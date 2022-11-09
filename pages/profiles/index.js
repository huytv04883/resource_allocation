import React from "react";
import { useSelector } from "react-redux";

const Profiles = () => {
  const token = useSelector((state) => state.loginReducer.token);
  console.log("token", token);
  return <span> Profiles</span>;
};

export default Profiles;
