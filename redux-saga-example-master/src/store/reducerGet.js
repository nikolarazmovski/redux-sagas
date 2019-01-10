

export default (state, action) => {
  const newState = { ...state }

  switch (action.type) {

    case "GET_RANDOM_DATA_ASYNC":
    console.log(action.value);
      newState.randomData = JSON.stringify(action.value);
      break;
  }
  return newState
}
