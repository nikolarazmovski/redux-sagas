
const initialState = {
  gereetings: ""
}

export default  (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "RESET_ALL":
      return initialState;
    case "SEND_USER_ASYNC":
      newState.gereetings = "Hi " + action.value.name + " " + action.value.surname;
      break;
  }
  return newState;
};

