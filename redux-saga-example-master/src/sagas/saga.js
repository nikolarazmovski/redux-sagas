
import {loginSagas} from "./sagasLogin";
import {getSagas} from "./sagasGet"
import { fork } from 'redux-saga/effects';

export function* rootSaga () {
  yield [
      fork(loginSagas), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
      fork(getSagas),
  ];
}
