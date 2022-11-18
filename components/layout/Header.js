import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
import Acount from "../UI/Acount/index";
import { appContext } from "../../context/appContextProvider";
import GoBack from "../UI/Back";
import { getCurrentUrl } from "../../utils/CurrentUrl";

const Header = () => {
  const currentUrl = getCurrentUrl();
  const { dataUser } = useContext(appContext);
  return (
    <div className={styles.header}>
      {currentUrl !== "/" && <GoBack />}
      <Acount acountName={dataUser?.data?.name} />
    </div>
  );
};

export default Header;
