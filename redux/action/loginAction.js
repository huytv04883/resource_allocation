export const loginAction = (token) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: token,
  };
};
