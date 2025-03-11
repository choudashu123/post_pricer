import axios from 'axios';

const API_BASE_URL = 'https://post-pricer.onrender.com/api';

export const calculatePrice = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/calculate-price`, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};