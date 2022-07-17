import {
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
  PRODUCT_END_REACHED,
} from '../types/products.types';

const initialState = {
  products: [],
  loading: false,
  moreLoading: false,
  error: false,
  moreError: false,
  success: false,
  errorMessage: '',
  listEndReached: false,
};

export const ProductsReducer = (state = initialState, action) => {
  console.log('productsReducer', action);
  switch (action.type) {
    case PRODUCT_REQUEST:
      if (action.payload.limit === 5) {
        return {
          ...state,
          loading: true,
        };
      } else {
        return {
          ...state,
          moreLoading: true,
        };
      }
    case PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload.products],
        moreLoading: false,
      };
    case PRODUCT_REQUEST_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false,
        moreLoading: false,
      };
    case PRODUCT_END_REACHED:
      return {
        ...state,
        loading: false,
        moreLoading: false,
        listEndReached: true,
      };
    default:
      return state;
  }
};
