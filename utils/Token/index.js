export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(process.env.TOKEN_KEY);
  } else {
    return null;
  }
};

export const getUserData = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(process.env.USER_DATA);
  } else {
    return null;
  }
};
