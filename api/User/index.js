import axiosConfig from "../axiosConfig";
export const fetchCurrentUser = async () => {
  try {
    const { data } = await axiosConfig.get("/api/users/current-user");
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
