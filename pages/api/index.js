/**
 *
 * @param {*} code : The authorization code of a successful token response. (String type)
 */
const loginWithGoogle = async (code) => {
  try {
    const { data } = await axiosConfig.post(
      "/api/auth/google",
      JSON.stringify({ code: code })
    );
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
