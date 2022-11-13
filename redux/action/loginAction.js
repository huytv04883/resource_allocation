export const loginAction = (token) => {
  return {
    type: "LOGIN_REQUEST",
    payload: token,
  };
};
