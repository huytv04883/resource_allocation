import { createContext, useEffect, useState } from "react";
export const appContext = createContext();
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosConfig from "../pages/api/axios/axiosConfig";

export const AppContextProvider = (props) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const isLoggedIn = !!token;

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(process.env.TOKEN_KEY);
    } else {
      return null;
    }
  };

  const TOKEN_KEY = getToken();

  const fetchCurrentUser = async () => {
    await axiosConfig.get("/api/users/current-user", {
      headers: { Authorization: `Bearer ${TOKEN_KEY}` },
    });
  };

  const { isLoading, isError, data, error } = useQuery(
    "current-user",
    fetchCurrentUser
  );

  console.log("data", data);

  const logoutGoogle = () => {
    localStorage.removeItem(process.env.TOKEN_KEY);
    localStorage.clear();
    router.push("/login");
  };

  return (
    <appContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        setToken: setToken,
        logoutGoogle: logoutGoogle,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};
