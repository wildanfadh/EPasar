import axios from 'axios';
import {BASE_URL} from '../configs';

// get all products
const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {getProducts};
