import React from "react";
import styles from "../../styles/Home.module.css";

const AppContent = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default AppContent;
