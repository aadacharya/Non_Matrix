import Footer from "../_components/_footer/footer";
import styles from "./member.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.member_main}>
        <div className={styles["member_left"]}>
          <img src="/member.png" />
        </div>
        <div className={styles["member_right"]}>
          <Link href="/home" className={styles["member_right_back"]}>
            <img
              width="13"
              height="13"
              src="https://img.icons8.com/metro/26/back.png"
              alt="back"
            />
            <div>Go Back</div>
          </Link>
          <div className={styles["member_right_quote"]}>
            {" "}
            "Education is the key to unlock the golden door of freedom." <br />{" "}
            George Washington Carver
          </div>
          <div className={styles["member_right_main"]}>
            <div className={styles["member_right_main_quote"]}>
              {" "}
              Unlock your Future Today
            </div>
            <div className={styles["member_right_input"]}>
              <div> Email</div>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Email Here Please"
              />
            </div>
            <div className={styles["member_right_input"]}>
              <div> Password</div>
              <input
                type="password"
                name="user_password"
                id="user_password"
                placeholder="Password Here Please"
              />
            </div>
            <div className={styles["become-member-button"]}> Continue </div>
          </div>
          <div className={styles["member_right_information"]}>
            <div className={styles["member_right_information"]}>
              <img src="https://img.icons8.com/stickers/100/people-working-together.png" alt="people-working-together"/>
              <div>2000+ Learners Enrolled</div>
            </div>
            <div className={styles["member_right_information"]}>
            <img width="100" height="100" src="https://img.icons8.com/stickers/100/tuition.png" alt="tuition"/>
              <div>7 Exceptional Authors</div>
            </div>
            <div className={styles["member_right_information"]}>
            <img width="100" height="100" src="https://img.icons8.com/stickers/100/course-assign.png" alt="course-assign"/>
              <div>20+ Skill Courses Available</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
