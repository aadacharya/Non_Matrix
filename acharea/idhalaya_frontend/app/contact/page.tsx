"use client"
import React from "react";
import styles from "./contact.module.css";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import Image from "next/image";

const openCrispChat = () => {
    if (typeof window !== 'undefined') {
      (window as any).$crisp.push(['do', 'chat:open']);
      (window as any).$crisp.push(["do", "message:send", ["text", "Hello there! I need Help."]]);
      (window as any).$crisp.push(["do", "message:show", ["text", "I am Glad to Help you. Please tell us more about your concern"]]);
    }
  };
  
const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.contactmain}>
        <div className={styles.contact}>
          <div className={styles.contact_container}>
            <Image width={64} height={64}
              src="https://img.icons8.com/ios-glyphs/90/new-post.png"
              alt="new-post"
            />
            <p>edhyalaya@gmail.com </p>
          </div>
          <div className={styles.contact_container}>
            <Image width={64} height={64}
              src="https://img.icons8.com/ios-filled/50/address--v1.png"
              alt="address--v1"
            />
            <p>Buddhanagar 10, Kathmandu, Nepal</p>
          </div>
          <div className={styles.contact_container}>
            <Image width={64} height={64}
              src="https://img.icons8.com/ios-filled/50/phone.png"
              alt="phone"
            />
            <p>+977-9802345866</p>
          </div>
          <div className={styles.contact_container}>
            <Image width={64} height={64}
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp--v1"
            />
            <p>+977-9802345866</p>
          </div>
          <div className={styles.contact_container}>
          <Image width={64} height={64} src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-viber-logo-with-hand-phone-receiver-under-chat-bubble-logo-color-tal-revivo.png" alt="external-viber-logo-with-hand-phone-receiver-under-chat-bubble-logo-color-tal-revivo"/>
            <p>+977-9802345866</p>
          </div>
          <div className={styles.contact_container}>
            <button onClick={openCrispChat}>Chat Live With Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
