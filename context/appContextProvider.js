import { createContext } from "react";
export const appContext = createContext();
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchCurrentUser } from "../api/User";
import Item from "antd/lib/list/Item";

export const AppContextProvider = (props) => {
  const router = useRouter();

  /**
   * Logout With Google
   */
  const logoutGoogle = () => {
    localStorage.removeItem(process.env.TOKEN_KEY);
    localStorage.clear();
    router.push("/login");
  };

  /**
   * Fetch data current User
   */
  const { isLoading, isError, data, error } = useQuery(
    "current-user",
    fetchCurrentUser
  );

  return (
    <appContext.Provider
      value={{
        dataUser: { isLoading, isError, data, error },
        logoutGoogle: logoutGoogle,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};
