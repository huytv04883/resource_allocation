import axiosConfig from "../axiosConfig";

export const loginWithGoogle = async (params) => {
  try {
    const { data } = await axiosConfig.post(
      "/api/auth/google",
      JSON.stringify({ code: params })
    );
    return { data };
  } catch (error) {
    console.log("Error:", error);
  }
};
