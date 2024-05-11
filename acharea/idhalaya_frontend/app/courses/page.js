import React from "react";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import styles from "./courses.module.css";
import Link from "next/link";
import Image from "next/image";

const Courses_Details = ({ params }) => {
  return <div>
    <div className={styles.courses}>
          <Image width={600} height={600} src='/graphics.png' alt="graphics"/>
          <div className={styles.course_details}>
          <Image width={64} height={64}  src="https://img.icons8.com/ios-glyphs/30/document-header.png" alt="document-header"/>
            <div >Test</div>
          </div>
          <div className={styles.course_details}>
          <Image width={64} height={64} src="https://img.icons8.com/ios-filled/50/training.png" alt="training"/>
            <div >Test</div>
          </div>
          <div className={styles.course_details}>
          <Image width={64} height={64} src="https://img.icons8.com/material-outlined/24/cost.png" alt="cost"/>
            <div >Test</div>
          </div>
          <div className={styles.course_details}>
          <Image width={64} height={64} src="https://img.icons8.com/ios-filled/50/delivery-time.png" alt="delivery-time"/>
            <div >Test</div>
          </div>
          <Link href="/courses/testcourse">
              <div className={styles.enroll}> Enroll </div>
          </Link>
        </div>

  </div>;
};

const Courses = () => {
  return (
    <div>
      <Header />
      <div className={styles.coursesMain}>
        <div className={styles.searchBar}>
        <input type="text" placeholder="Search for the available courses"/>
        <Image width={64} height={64} src="https://img.icons8.com/ios-glyphs/480/search--v1.png" alt="search--v1"/>
        </div>
        <div className={styles.parentsCourses}>
          For Parents
          <div className={styles.horizontalSlider}>
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
            <Courses_Details params={"parents"} />
          </div>
        </div>
        <div>
          <div className={styles.studentsCourses}>
            For Students
            <div className={styles.horizontalSlider}>
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
              <Courses_Details params={"students"} />
            </div>
          </div>
        </div>
        <div className={styles.teachersCourses}>
          For Teachers
          <div className={styles.horizontalSlider}>
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
            <Courses_Details params={"teachers"} />
          </div>
        </div>
        <div className={styles.schoolsCourses}>
          For Schools
          <div className={styles.horizontalSlider}>
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
            <Courses_Details params={"schools"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
