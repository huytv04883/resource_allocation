import { createContext } from "react";
export const appContext = createContext();
import { useRouter } from "next/router";

export const AppContextProvider = (props) => {
  const router = useRouter();

  const logoutGoogle = () => {
    localStorage.removeItem(process.env.TOKEN_KEY);
    localStorage.clear();
    router.push("/login");
  };

  const getCurrentPage = () => {
    const router = useRouter();
    return router.asPath;
  };

  return (
    <appContext.Provider
      value={{
        logoutGoogle: logoutGoogle,
        getCurrentPage: getCurrentPage,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};
