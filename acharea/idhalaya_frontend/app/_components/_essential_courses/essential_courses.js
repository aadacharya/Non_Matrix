import React from 'react'
import styles from "./essential_courses.module.css"

const Course = (props) => {
  return (
<div className={styles["courses"]}>
          <img src='graphics.png'/>
          <div className={styles["course_details"]}>
          <img  src="https://img.icons8.com/ios-glyphs/30/document-header.png" alt="document-header"/>
            <div >{props.title}</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/ios-filled/50/training.png" alt="training"/>
            <div >{props.author}</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/material-outlined/24/cost.png" alt="cost"/>
            <div >{props.price}</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/ios-filled/50/delivery-time.png" alt="delivery-time"/>
            <div >{props.duration}</div>
          </div>
          <div className={styles["enroll"]}> Enroll </div>
        </div>
  );
}
const Essential_Courses = () => {
  return (
      <div>
        <div className={styles.essential_title}> Essential_Courses </div>
            <div className={styles.essential_main}>
        <Course title="Handwriting"  author="Naresh J"  price="200 NRP" duration="30 Min"/>
        <Course title="Handwriting"  author="Naresh J"  price="200 NRP" duration="30 Min"/>
        <Course title="Handwriting"  author="Naresh J"  price="200 NRP" duration="30 Min"/>
        {/* <Course title="Handwriting"  author="Naresh J"  price="200 NRP" duration="30 Min"/>
        <Course title="Handwriting"  author="Naresh J"  price="200 NRP" duration="30 Min"/> */}
            </div>
      </div>
  )
}
export default Essential_Courses