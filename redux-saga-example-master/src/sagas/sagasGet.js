import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* getRandomData() {
  yield yield axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments?postId=1"
  })
    .then(function(response) {
      return put({ type: "GET_RANDOM_DATA_ASYNC", value: response });
    })
    .catch(function(error) {
      return error;
    });
}

export function* getSagas() {
  yield takeLatest("GET_RANDOM_DATA", getRandomData);
}