import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getRecommendation } from './_helpers.js';
import Utils from './utils.js';
import storage from 'node-persist';
import { getProducts } from './_fake_db.js';

const port = 3000;
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'],
};

await storage.init();
const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.json());

let profiles = await storage.getItem('profiles');


if (!Array.isArray(profiles)) {
  profiles = [];
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// GET /profile
app.get('/profile', async (req, res, next) => {
  try {
    const isEmpty = profiles.length === 0;
    if (isEmpty) {
      return res.json({
        profiles: [],
        status: {
          empty: true,
          message: 'No profiles available.'
        }
      });
    }
  
    res.json({
      profiles: profiles,
      status: {
        empty: false
      }
    });
  } catch (error) {
    next(error);
  }
});

app.get('/profile/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const profile = profiles.find(p => p.id === id);

    if (!profile) {
      throw { status: 404, message: 'Profile not found.' };
    }

    res.json(profile);
  } catch (error) {
    next(error);
  }
});

// POST /profile
app.post('/profile', async (req, res, next) => {
  try {
    const { height, weight, age, waist } = req.body;

    if (!height || !weight || !age || !waist) {
      throw { status: 400, message: 'All fields are required: height, weight, age, and waist.' };
    }
  
    const newProfileId = profiles.length > 0 ? Math.max(...profiles.map(p => parseInt(p.id))) + 1 : 1;
    
    const newProfile = {
      id: newProfileId.toString(),
      height: Math.round(height),
      weight: Math.round(weight),
      age: Math.round(age),
      waist: Math.round(waist),
    };
    
    profiles.push(newProfile); 
  
    await storage.setItem('profiles', profiles);
    res.json({ message: 'Profile created successfully!', profile: newProfile });
  } catch (error) {
    next(error);
  }
});

// PUT /profile/:id
app.put('/profile/:id', async (req, res, next) => {
  const { id } = req.params; 
  const { height, weight, age, waist } = req.body;

  try {
    const profileMatch = profiles.findIndex(p => p.id === id);
    
    if (profileMatch < 0) {
      throw { status: 404, message: 'Profile not found.' };
    }
    
    const updateProfile = {
      ...profiles[profileMatch],
      height: height ? Math.round(height) : profiles[profileMatch].height,
      weight: weight ? Math.round(weight) : profiles[profileMatch].weight,
      age: age ? Math.round(age) : profiles[profileMatch].age,
      waist: waist ? Math.round(waist) : profiles[profileMatch].waist
    };

    profiles[profileMatch] = updateProfile; 

    await storage.setItem('profiles', profiles);
    res.json({ message: 'Profile updated successfully!', profile: updateProfile });
  } catch (error) {
    next(error);
  }
});

// GET /products
app.get('/products', (req, res, next) => {
  try {
    const products = getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET /recommendation
app.get('/recommendation', async (req, res, next) => {
  try {
    const { productId: selectedProduct, profileId } = req.query;
    console.log('Received query:', req.query);


    if (!selectedProduct || !profileId) {
      throw new Error('ProductId and ProfileId must be provided.');
    }
  
    const profiles = await Utils.loadProfiles();
    console.log('Loaded profiles:', profiles);

    const profile = profiles.find(p => p.id === profileId);
    
    const availableSizes = Utils.getAvailableSizes(selectedProduct);
    console.log('Available sizes for product:', availableSizes);
  
    if (!profile) {
      throw new Error('Profile not found.');
    }
  
    if (!availableSizes || availableSizes.length === 0) {
      throw new Error('Product not found or no available sizes.');
    }
  
    const profileForApi = Utils.convertToApiFormat(profile);
  
    const recommendation = await getRecommendation({
      profile: profileForApi,
      availableSizes
    });
    console.log('Recommendation:', recommendation);
    
    res.json({ recommendation });
  } catch (error) {
    console.error('Error in recommendation processing:', error);
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});