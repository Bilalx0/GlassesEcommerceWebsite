// src/services/api.js
const BASE_URL = '/db.json' || 'http://localhost:3001';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};