import { delay } from "redux-saga";
import axios from "axios";
import { takeLatest, takeEvery, take, put } from "redux-saga/effects";



function* sendUser(action) {
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
      return put({ type: "SEND_USER_ASYNC", value: action.value });
    })
    .catch(function(error) {
      return error;
    });
}

function* getRandomData(){}

export function* watchAgeUp() {
 yield takeLatest("SEND_USER", sendUser);
 yield takeLatest("GET_RANDOM_DATA", getRandomData); 
}
