import {put, takeLatest, all} from 'redux-saga/effects';
import productSaga from './products.saga';

export default function* rootSaga() {
  yield all([productSaga()]);
}
