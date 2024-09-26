import storage from 'node-persist';
import { getProductById } from './_fake_db.js';

class Utils {
  static convertToApiFormat(profile) {
    const heightInInches = Math.round(profile.height * 0.393701); //(1 cm = 0.393701 inches).
    const weightInPounds = Math.round(profile.weight * 2.20462); //(1 kg = 2.20462 pounds).
    const waistInInches = Math.round(profile.waist * 0.393701);  //(1 cm = 0.393701 inches).
    const ageInYears = Math.round(profile.age); // age in years
  
    return {
      height: heightInInches,
      weight: weightInPounds,
      waist: waistInInches,
      age: ageInYears
    };
  }

  static async loadProfiles() {
    let profiles = await storage.getItem('profiles');
    if (!Array.isArray(profiles)) {
      profiles = [];
    }
    return profiles;
  }

  static _getProductById(productId) {
    return getProductById(productId);
  }

  static getAvailableSizes(productId) {
    const product = this._getProductById(productId);
    if (!product || !Array.isArray(product.sizes)) {
      console.error(`Product with ID ${productId} not found or has no sizes.`);
      return [];
    }
    const availableSizes = product.sizes
    .filter(({ inStock }) => inStock)
    .map(({ value }) => value)

    return [...new Set(availableSizes)];
  }
}

export default Utils;