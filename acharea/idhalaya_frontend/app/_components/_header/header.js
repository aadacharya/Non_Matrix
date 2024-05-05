// import Head from "next/head";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header_main}>
      <img src="logo.png" alt="Acharea" />
      <div className={styles["content"]}>
        <Link href="/">Parents</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/">Students</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/">Teachers</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/">Schools</Link>
      </div>
      <div className={styles["buttons-container"]}>
        <button className={styles["sign-in-button"]}>Sign In</button>
        <button className={styles["become-member-button"]}>Be a Member</button>
      </div>
    </div>
  );
};

export default Header;
