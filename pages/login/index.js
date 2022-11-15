import React, { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { WrapperLoginForm, ButtonLoginGoogle, TextLogin } from "./style";
import GoogleIcon from "./images/google.png";
import Image from "next/image";
import { loginWithGoogle } from "../api/auth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      if (codeResponse) {
        const { data } = await loginWithGoogle(codeResponse.code);
        if (data?.response) {
          localStorage.setItem(process.env.TOKEN_KEY, data?.response?.token);
          router.push("/");
        }
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "auth-code",
  });
  return (
    <WrapperLoginForm>
      <ButtonLoginGoogle onClick={() => googleLogin()}>
        <Image
          src={GoogleIcon}
          alt="Login With Google"
          width={48}
          height={48}
        />
        <TextLogin>Login With google</TextLogin>
      </ButtonLoginGoogle>
    </WrapperLoginForm>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      {page}
    </GoogleOAuthProvider>
  );
};
