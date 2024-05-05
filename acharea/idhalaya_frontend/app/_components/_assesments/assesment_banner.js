import React from "react";
import styles from "./assesment_banner.module.css";

const Assesment_Banner = () => {
  return (
    <div>
      <div className={styles.assesment_title}>
        Take Your Free Assesment Today
      </div>
      <div className={styles.assesment_main}>
        <div className={styles["assement_main_content"]}>
          <div className={styles["assesment_main_content_header"]}>
            For Parents
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/material-outlined/24/cost.png"
              alt="cost"
            />
            <div>NPR 0</div>
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/ios-filled/50/delivery-time.png"
              alt="delivery-time"
            />
            <div>10 mins</div>
          </div>
          <div className={styles["asses_yourself"]}>Asses Yourself</div>
        </div>
        <div className={styles["assement_main_content"]}>
          <div className={styles["assesment_main_content_header"]}>
            For Students
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/material-outlined/24/cost.png"
              alt="cost"
            />
            <div>NPR 0</div>
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/ios-filled/50/delivery-time.png"
              alt="delivery-time"
            />
            <div>10 mins</div>
          </div>
          <div className={styles["asses_yourself"]}> Asses Yourself </div>
        </div>
        <div className={styles["assement_main_content"]}>
          <div className={styles["assesment_main_content_header"]}>
            For Teachers
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/material-outlined/24/cost.png"
              alt="cost"
            />
            <div>NPR 0</div>
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/ios-filled/50/delivery-time.png"
              alt="delivery-time"
            />
            <div>10 mins</div>
          </div>
          <div className={styles["asses_yourself"]}> Asses Yourself </div>
        </div>
        <div className={styles["assement_main_content"]}>
          <div className={styles["assesment_main_content_header"]}>
            For Schools
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/material-outlined/24/cost.png"
              alt="cost"
            />
            <div>NPR 0</div>
          </div>
          <div className={styles["assesment_details"]}>
            <img
              src="https://img.icons8.com/ios-filled/50/delivery-time.png"
              alt="delivery-time"
            />
            <div>10 mins</div>
          </div>
          <div className={styles["asses_yourself"]}> Asses Yourself </div>
        </div>
      </div>
    </div>
  );
};
export default Assesment_Banner;
