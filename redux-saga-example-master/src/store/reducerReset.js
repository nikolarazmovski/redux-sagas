const initialState = {
  gereetings: "",
  randomData: ""
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "RESET_ALL":
      return initialState;
  }
  return newState;
};

