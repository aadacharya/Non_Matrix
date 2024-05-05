import React from 'react'
import styles from "./essential_courses.module.css"

const Course = () => {
  return (
<div className={styles["courses"]}>
          <img src='graphics.png'/>
          <div className={styles["course_details"]}>
          <img  src="https://img.icons8.com/ios-glyphs/30/document-header.png" alt="document-header"/>
            <div >Title</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/ios-filled/50/training.png" alt="training"/>
            <div >Aaditya A</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/material-outlined/24/cost.png" alt="cost"/>
            <div >NPR 200</div>
          </div>
          <div className={styles["course_details"]}>
          <img src="https://img.icons8.com/ios-filled/50/delivery-time.png" alt="delivery-time"/>
            <div >30 mins</div>
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
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        
            </div>
      </div>
  )
}
export default Essential_Courses