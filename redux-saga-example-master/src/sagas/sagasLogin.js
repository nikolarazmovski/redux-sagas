import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* sendUser(action) {
  console.log("ENTERED: sagasLogin | WORK: SEND_USER");
  yield yield axios({
    method: "post",
    url: "http://localhost:9966/",
    data: {
      user: {
        firstName: action.value.name,
        lastName: action.value.surname
      }
    },
    crossdomain: true 
  })
    .then(function(response) {
      console.log('Response ' + response)
      return put({ type: "SEND_USER_ASYNC", value: action.value });
    })
    .catch(function(error) {
      return error;
    });
}


export function* loginSagas() {
  console.log("ENTERED: sagasLogin | WATCH: SEND_USER");
  yield takeLatest("SEND_USER", sendUser);
}