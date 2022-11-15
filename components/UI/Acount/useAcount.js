import { appContext } from "../../../context/appContextProvider";
import { useContext } from "react";
import axiosConfig from "../../../pages/api/axiosConfig";
import { useQuery } from "react-query";

const useAcount = () => {
  const { getToken } = useContext(appContext);
  const token = getToken();
  const fetchCurrentUser = async () => {
    return await axiosConfig.get("/api/users/current-user", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const { isLoading, isError, data, error } = useQuery(
    "current-user",
    fetchCurrentUser
  );

  return { isLoading, isError, data, error };
};

export default useAcount;
