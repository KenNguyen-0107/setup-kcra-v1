import { put, takeLatest } from 'redux-saga/effects';
import { getError } from 'utils/error';
import { globalActions } from '.';

function* getGlobalData(action: any) {
  try {
    yield console.log('calling API');
    yield globalActions.getGlobalDataSucceed('Fake called API');
  } catch (error) {
    const errMsg: string = yield getError(error);
    yield globalActions.getGlobalDataFailed(errMsg);
  }
}

export function* failedJobsSaga() {
  yield takeLatest(globalActions.getGlobalData.type, getGlobalData);
}
