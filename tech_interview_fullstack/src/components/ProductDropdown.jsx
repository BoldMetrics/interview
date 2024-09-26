import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, selectProduct } from '../actions/ProductActions';
import axios from 'axios';
import { DropdownContainer, DropdownLabel, StyledSelect, Option, RecommendationContainer, Button, Card } from '../global/styledComponents';

const ProductDropdown = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const profileId = useSelector((state) => state.profile.profileId);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(null); 
  const [errorVisible, setErrorVisible] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsButtonDisabled(!profileId || !selectedProduct);
      }
    };

    fetchProducts();
  }, [dispatch, profileId, selectedProduct]);

  const handleProductChange = (event) => {
    const productId = event.target.value;
    setSelectedProduct(productId);
    dispatch(selectProduct(productId));

    setRecommendation(null);
    setError(null);
  };

  const validateProfile = (profile) => {
    const { height, weight, age, waist } = profile;
    if (height <= 0 || weight <= 0 || age <= 0 || waist <= 0) {
      return 'All profile measurements must be positive numbers.';
    }
    if (age > 120) {
      return 'Age cannot be greater than 120 years.';
    }
    return null;
  };

  const handleGetRecommendation = async () => {
    if (!profileId || !selectedProduct) {
      setError("Please ensure a profile is loaded and a product is selected.");
      setTimeout(() => setErrorVisible(false), 2000);
      return;
    }
    setError(null);

    const profile = await axios.get(`http://localhost:3000/profile/${profileId}`);
    const validationError = validateProfile(profile.data);

    if (validationError) {
      setError(validationError);
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 2000);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/recommendation?productId=${selectedProduct}&profileId=${profileId}`);
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      setError(error.response?.data?.message || 'Error fetching recommendation');
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 2000);
    }
  };

  return (
    <DropdownContainer>
      <DropdownLabel htmlFor="product-select">Select a product:</DropdownLabel>
      <StyledSelect
        id="product-select"
        value={selectedProduct}
        onChange={handleProductChange}
      >
        <Option value="">--Please choose a product--</Option>
        {products.map(({ productID, name }) => (
          <Option key={productID} value={productID}>
            {name}
          </Option>
        ))}
      </StyledSelect>
      <Card>
        <Button onClick={handleGetRecommendation}  disabled={isButtonDisabled}>Recommendation</Button>
        
        {recommendation && (
          <RecommendationContainer issuccess={true}>
            <h3>Best Size Recommendation:</h3>
            <p>{recommendation.size}</p>
          </RecommendationContainer>
        )}

        {errorVisible && error && (
          <RecommendationContainer issuccess={false}>
            <h3 style={{ color: 'red' }}>Error:</h3>
            <p style={{ color: 'red' }}>{error}</p>
          </RecommendationContainer>
        )}
      </Card>
    </DropdownContainer>
  );
};

export default ProductDropdown;