import {
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
  PRODUCT_END_REACHED,
} from '../types/products.types';

export const getProductsRequest = params => ({
  type: PRODUCT_REQUEST,
  payload: {
    limit: params.limit,
  },
});
