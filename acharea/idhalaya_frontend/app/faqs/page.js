import React from "react";
import styles from "./faqs.module.css";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import questions from "./faqs"
import Image from "next/image";

const Faqs = () => {
  return (
    <div className={styles.main}>
      <Header />
          <div className={styles.container}>
            <div className={styles.leftColumn}>
              <div className={styles.leftColumn_title}>FAQs</div>
              <div className={styles.leftColumn_title_header}>
                Have any Questions?
              </div>
              <div className={styles.leftColumn_details}>
                We’re here to help. If you run into any problems at all, feel free
                to email us and we’d love to talk personally about how we can help.
              </div>
            </div>
            <div className={styles.rightColumn}>
            <Image width={640} height={640} src="/Graphics.png" alt="" />
            </div>
          </div>
            <div className={styles.faqs}>
                {Object.entries(questions).map(([key,value],index) => (
                    <div className={styles.each_faq} key={index}>
                        <div className={styles.questions}>{key}</div>
                        <div className={styles.answers}>{value}</div>
                    </div>
                ))}
            </div>
      <Footer />
    </div>
  );
};

export default Faqs;
