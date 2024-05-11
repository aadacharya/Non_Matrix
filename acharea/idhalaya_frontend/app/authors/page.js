"use client";
import React, { useState } from "react";
import styles from "./authors.module.css";
import { authors_list } from "./authors_meta";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import Image from "next/image";

const Gen_Authors_Meta = () => {
  const [selectedName, setSelectedName] = useState(authors_list[0].first_name);
  const [selectedItem, setSelectedItem] = useState(authors_list[0]);

  const handleNameClick = (item) => {
    setSelectedName(item.first_name);
    setSelectedItem(item)
  };
  return (
    <div className={styles.authors_main}>
      <div className={styles.header_main}>
        {authors_list.map((item, index) => (
          <div
            className={`${styles.nameDiv} ${
              selectedName === item.first_name ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleNameClick(item)}
          >
            {item.first_name}
          </div>
        ))}
      </div>
      <div className={styles.author_main}>
        <div className={styles.leftcontent}>
        <Image width={640} height={640} src="/member.png" alt="Member"/>
        </div>
        <div className={styles.rightcontent}>
          <div className={styles["name"]}>{selectedItem.first_name} {selectedItem.last_name} </div>
          <div className={styles["education"]}> Educator For {selectedItem.educator_for} years.</div>
          <div className={styles["affiliation"]}> 
          <div>Affiliations</div> 
            {selectedItem.affiliations.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
             </div>
          <div className={styles["about"]}> <div>About</div>
          <p>{selectedItem.about}</p>
           </div>

        </div>
      </div>
    </div>
  );
};
const Authors = () => {
  return (
    <div>
      <Header />
      <Gen_Authors_Meta />
      <Footer />
    </div>
  );
};

export default Authors;
