const initialState = {
  token: ['1', 2],
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return state;

    case "LOG_OUT":
      return state;

    default:
      return state;
  }
};
