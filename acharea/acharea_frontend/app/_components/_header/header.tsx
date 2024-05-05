import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'

const Header:React.FC = () => {
  return (
    <div className={styles.header_main}>
        <div className={styles.header_logo}>
            {/* Logo */}
            <img src='./vercel.svg' alt='Acharea'/> 
            </div>
        <div className={styles.header_content}>
            {/* Header Content */}
            <Link rel="stylesheet" href="/Home" className={styles.header_content_link}> Products </Link>
            <Link rel="stylesheet" href="/Home" className={styles.header_content_link}> Solutions </Link>
            <Link rel="stylesheet" href="/Home" className={styles.header_content_link}> Pricing </Link>
            </div>
        <div className={styles.header_auth}>
            {/* Sign IN Sign Up */}
            <button className={styles.header_login}>Sign In</button>
            <button className={styles.header_register}>Get Started</button>
            </div>
        <div className = {styles.header_hamburger}>{/* Hamburger for Content when small screen */}</div>
    </div>
  )
}

export default Header;