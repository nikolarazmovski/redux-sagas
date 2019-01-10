const initialState = {
  gereetings: "",
  randomData: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {

    case "GET_RANDOM_DATA":
      newState.randomData = "Random Data";
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
