const initialState = {
  randomData: ""
}

export default (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case "RESET_ALL":
    return initialState;
    case "GET_RANDOM_DATA_ASYNC":
      newState.randomData = JSON.stringify(action.value);
      break;
  }
  return newState
}
