import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/reducer';

export default function* rootSaga() {
  return yield all([auth, user]);
}
