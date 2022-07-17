import {
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
  PRODUCT_END_REACHED,
} from '../types/products.types';

import {put, takeLatest, call} from 'redux-saga/effects';
import {getProducts} from '../../apis/products';

function* getReqProducts({payload}) {
  try {
    const response = yield call(getProducts, payload);
    console.log('getReqProducts', response);
    if (response.length > 0) {
      yield put({
        type: PRODUCT_REQUEST_SUCCESS,
        payload: {
          products: response,
        },
      });
    } else {
      yield put({
        type: PRODUCT_END_REACHED,
      });
    }
  } catch (error) {
    yield put({
      type: PRODUCT_REQUEST_FAILED,
      payload: {
        error: error.message,
      },
    });
  }
}

function* productSaga() {
  yield takeLatest(PRODUCT_REQUEST, getReqProducts);
}

export default productSaga;
