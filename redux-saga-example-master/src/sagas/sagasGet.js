import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* getRandomData() {
  console.log("ENTERED: sagasGet | WORKS ON: GET_RANDOM_DATA");
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
  console.log("ENTERED: sagasGet | WATCH: GET_RANDOM_DATA");
  yield takeLatest("GET_RANDOM_DATA", getRandomData);
}