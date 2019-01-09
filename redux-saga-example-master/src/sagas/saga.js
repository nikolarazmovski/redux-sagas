import { delay } from "redux-saga";
import axios from "axios";
import { takeLatest, takeEvery, take, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

function* ageDownAsync() {
  yield delay(4000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}

function* sendName(action) {
yield yield axios({
    method: "post",
    url: "http://localhost:9966/",
    data: {
      user: {
        firstName: action.value.name,
        lastName: action.value.surname
      }
    },
    config: { headers: { "Content-Type": "multipart/form-data" } }
  })
    .then(function(response) {
      return put({ type: "SEND_NAME_ASYNC", value: action.value });
    })
    .catch(function(error) {
      return error;
    });
}

export function* watchAgeUp() {
  const action = yield takeLatest("SEND_NAME", sendName);
  yield takeEvery("AGE_UP", ageUpAsync);
  yield takeLatest("AGE_DOWN", ageDownAsync);
}
