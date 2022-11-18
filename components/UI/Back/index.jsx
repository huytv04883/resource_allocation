import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { ButtonGoBack } from "./style";

const GoBack = () => {
  const router = useRouter();
  return (
    <ButtonGoBack onClick={() => router.back()}>
      <LeftOutlined />
    </ButtonGoBack>
  );
};

export default GoBack;
