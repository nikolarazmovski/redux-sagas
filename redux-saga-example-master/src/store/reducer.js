const initialState = {
  gereetings: "",
  randomData: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {

    case "GET_RANDOM_DATA_ASYNC":
      newState.randomData = JSON.stringify(action.value.data);
      break;
    case "SEND_USER_ASYNC":
      newState.gereetings = "Hi " + action.value.name + " " + action.value.surname;
      break;
    case "RESET_ALL":
      return initialState;
  }
  return newState;
};

export default reducer;
