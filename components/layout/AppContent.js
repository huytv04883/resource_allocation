import React from "react";
import styles from "../../styles/Home.module.css";

const AppContent = ({ children }) => {
  return (
    <div className={styles.main}>
      <span>{children}</span>
    </div>
  );
};

export default AppContent;
