import React from "react";
import styles from "../../styles/Home.module.css";
import Acount from "../UI/Acount";
import useAcount from "../UI/Acount/useAcount";

const Header = () => {
  const { data } = useAcount();
  return (
    <div className={styles.header}>
      <Acount acountName={data?.data?.name} />
    </div>
  );
};

export default Header;
