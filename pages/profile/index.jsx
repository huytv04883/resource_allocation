import React, { useContext } from "react";
import { appContext } from "../../context/appContextProvider";
import styles from "../../styles/Home.module.css";

const Profile = () => {
  const { getUserData } = useContext(appContext);
  const dataUser = getUserData();

  return <div className={styles.secsion}>Profile</div>;
};

export default Profile;
