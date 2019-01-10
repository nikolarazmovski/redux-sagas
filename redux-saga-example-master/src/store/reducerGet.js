const initialState = {
    age: 20
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "AGE_UP_ASYNC":
        newState.age += action.value;
        break;
  
      case "AGE_DOWN_ASYNC":
        newState.age -= action.value;
        break;
       case "SEND_NAME_ASYNC":
       newState.hi = action.value.name + " " + action.value.surname; 
    
    }
    return newState;
  };
  
  export default reducer;
  