import axiosConfig from "../axiosConfig";

export const loginWithGoogle = async (params) => {
  const { data } = await axiosConfig.post(
    "/api/auth/google",
    JSON.stringify({ code: params })
  );
  return { data };
};
