import React from 'react'
import styles from './parents.module.css'
import Header from '../_components/_header/header'
import Footer from '../_components/_footer/footer'
import Parents_Tagline from "./parents_tagline"

const Parents = () => {
  return (
    <div>
        <Header/>
        <div className={styles.parents_main}>
            <div className={styles["parents_main_tagline"]}>
            <Parents_Tagline/>
            </div>
            <div className={styles["parents_main_assesment"]}>
            </div>
            <div className={styles["parents_main_courses"]}>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Parents