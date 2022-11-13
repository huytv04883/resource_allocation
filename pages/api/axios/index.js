import axios from "axios";
import axiosConfig from "./axiosConfig";

export const loginWithGoogle = async (params) => {
  const response = await axiosConfig.post(
    "/api/auth/google",
    JSON.stringify({ code: params })
  );
  console.log("res", response);
  return response;
};
