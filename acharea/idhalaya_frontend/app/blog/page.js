import React from "react";
import styles from "./blog.module.css";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import blogs from "./blogs"
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <Header />
      <div className={styles.blog_main}>
        <div className={styles.blog_header}>
            <div className={styles.blog_header_title}> Edhyalaya Blogs</div>
            <div className={styles.blog_header_details}> Get the latest blogs trends, news, resources about education, technology, innovation with the Edhalaya team.</div>
        </div>
        <div className={styles.blog}>
            {Object.entries(blogs).map(([key,value],index) => (
                <div>
                    <Link href={"/blog/"+index}>
                    <div className={styles.blog_title}>
                            {key}
                        </div>
                            </Link>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
