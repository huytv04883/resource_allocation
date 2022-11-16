import { appContext } from "../../../context/appContextProvider";
import { useContext } from "react";
import axiosConfig from "../../../api/axiosConfig";
import { useQuery } from "react-query";

const useAcount = () => {
  const { getToken } = useContext(appContext);
  const token = getToken();
  const fetchCurrentUser = async () => {
    const { data } = await axiosConfig.get("/api/users/current-user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data && typeof window !== "undefined") {
      localStorage.setItem(process.env.USER_DATA, JSON.stringify(data));
    }
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    "current-user",
    fetchCurrentUser
  );

  return { isLoading, isError, data, error };
};

export default useAcount;
