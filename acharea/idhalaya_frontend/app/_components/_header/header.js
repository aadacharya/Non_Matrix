// import Head from "next/head";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

// import {useRouter} from "next/navigation";

export const Header = () => {
  // const router = useRouter();
  return (
    <div className={styles.header_main}>
      <Link href="/home">
          <Image src="/next.svg" width={100} height={50} alt='Graphics'/>
      </Link>
      <div className={styles["content"]}>
        <Link href="/parents">Parents</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/students">Students</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/teachers">Teachers</Link>
      </div>
      <div className={styles["content"]}>
        <Link href="/schools">Schools</Link>
      </div>
      <div className={styles["buttons-container"]}>
        <div className={styles["sign-in-button"]}>
          {" "}
          <Link href="/signin">Sign In</Link>{" "}
        </div>
        <div className={styles["become-member-button"]}>
          {" "}
          <Link href="/member">Be A Member</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
