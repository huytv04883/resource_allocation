import { createContext, useEffect, useState } from "react";
export const appContext = createContext();
import { useRouter } from "next/router";

export const AppContextProvider = (props) => {
  const router = useRouter();

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(process.env.TOKEN_KEY);
    } else {
      return null;
    }
  };

  const getUserData = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(process.env.USER_DATA);
    } else {
      return null;
    }
  };

  const logoutGoogle = () => {
    localStorage.removeItem(process.env.TOKEN_KEY);
    localStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <appContext.Provider
      value={{
        logoutGoogle: logoutGoogle,
        getToken: getToken,
        getUserData: getUserData,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};
