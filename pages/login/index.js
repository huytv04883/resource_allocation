import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { WrapperLoginForm, ButtonLoginGoogle, TextLogin } from "./style";
import GoogleIcon from "./images/google.png";
import Image from "next/image";
import { loginWithGoogle } from "../api/axios";

const Login = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      if (codeResponse) {
        loginWithGoogle(codeResponse.code);
      }
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
    <GoogleOAuthProvider clientId="10107497848-sg7ll6o5ik7pl0e8lm8kj29eds13u765.apps.googleusercontent.com">
      {page}
    </GoogleOAuthProvider>
  );
};
