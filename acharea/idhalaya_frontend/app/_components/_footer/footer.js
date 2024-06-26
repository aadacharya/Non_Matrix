"use client"
import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import Image from 'next/image'

const openCrispChat = () => {
  if (typeof window !== 'undefined') {
    (window).$crisp.push(['do', 'chat:open']);
    (window).$crisp.push(["do", "message:send", ["text", "Hello there! I need Help."]]);
    (window).$crisp.push(["do", "message:show", ["text", "I am Glad to Help you. Please tell us more about your concern"]]);
  }
};

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div>
        <div> <Link href="/home">Home </Link></div>
        <div> <Link href="/about">About Us</Link> </div>
        <div> <Link href="/member">Membership</Link></div>
        <div> <Link href="/courses">Courses</Link></div>
        <div> <Link href="/">Assesments</Link></div>
        <div> <Link href="/faqs">FAQs</Link></div>
        <div> <Link href="/blog">Blogs</Link></div>
      </div>
      <div>
        <div> <Link href="/contact">Contact Us</Link></div>
        <div> <Link href="/about#mission">Mission</Link></div>
        <div> <Link href="/about#vision">Vision</Link></div>
        <div onClick={openCrispChat}> <Link href="/contact">Support</Link></div>
        <div> <Link href="/authors">Authors</Link></div>
      </div>
      <div>
        <div><Link href="/parents">Parents</Link></div>
        <div><Link href="/students">Students</Link></div>
        <div><Link href="/teachers">Teachers</Link></div>
        <div><Link href="/schools">Schools</Link></div>
      <div className={styles.social_medias}>
        <Image width={64} height={64} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2ZzUrDQBDH82S7Vby1JTsoPpAieFBv0qMP4UyEQq03L4KWWh/Am4eASXupYEeiWL9o6W5jdgPzgzku+f/2m00UCYIgBE3DYKwArxTgRANxFaUAJwqor+KkvVZ4beiwqtB6URk8cO557+HhU4Ja1gLFtAlI4NJewODYe3CYV24tEEBo/l4ioEvoxc2dhI86Q767TznLpzyb8Q+CHoGN7YSvb554GTpkgePOcGn44AUGo5RrLZCPX/4E3ju55a3di5Xaexd4/b1imd/XxartvQvYThktAvA/vb6I52wa3gjYMBil9RY47z7WW+D07CE8AdmFQEaAZAppOYlJdiGWbRTkNspyEuu6XSVUyU+L6wlgZi8A1C/7QudcBnv2AnHS9h4cPqoB2IxcKH4u+A6vgPadwn9JUKt4n6/yuV0V3zLYc+55QRCEqCreAAESa+zxbT1rAAAAAElFTkSuQmCC" alt='Graphics'/>
        <Image width={64} height={64} src="https://img.icons8.com/fluency/48/facebook-messenger--v2.png" alt="facebook-messenger--v2"/>
        <Image width={64} height={64} src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
        <Image width={64} height={64} src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
        <Image width={64} height={64} src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
      </div>
      <Image src="/next.svg" width={100} height={50} alt='Graphics'/>
      </div>

    </div>
  )
}

export default Footer