"use client"
import React, { useState } from 'react';
import styles from './sidebar.module.css';
import { FaBars, FaHome , FaWhatsapp , FaBlog } from 'react-icons/fa'; // Import icons

interface SidebarProps {
    activeItem: string;
  }


const Sidebar: React.FC<SidebarProps>  = ({activeItem}) => {
    const [collapsed , setIsCollpased] = useState(false);
    const toggleSidebar = () => {setIsCollpased(!collapsed);};
    
  return (
    <div className={`${styles.sidebar_main} ${!collapsed ? styles.sidebar_expanded : styles.sidebar_collapsed}`}>
        <div className={styles.sidebar_header} onClick={toggleSidebar}>
            <FaBars/>
            {!collapsed && <img src='./acharea.png' />}
        </div>
        <hr className={styles.sidebar_divider }/>
        <div >
            <div className={`${styles.sidebar_content} ${activeItem === "account" ? styles.sidebar_content_selected : styles.not_slected}`}>
                <FaWhatsapp/> {!collapsed && <span> Your Accounts</span>}

            </div>
            <div className={`${styles.sidebar_content} ${activeItem === "emails" ? styles.sidebar_content_selected : styles.not_slected}`}>
                <FaBlog/> {!collapsed && <span> Emails</span>}
            </div>
        </div>
        <hr className={styles.sidebar_divider }/>
    </div>
    

  );
}

export default Sidebar;
