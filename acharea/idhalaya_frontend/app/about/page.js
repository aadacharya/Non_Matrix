import React from "react";
import styles from "./about.module.css";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.aboutmain}>
        <div className={styles.tagline}>
          Life Skill Courses For Enhanching Your Future
        </div>
        <div className={styles.tagline_details}>
          {" "}
          Experience holistic personal and professional growth through our
          comprehensive curriculum. From communication to leadership, acquire
          essential skills for success in diverse areas.{" "}
        </div>
        <Link href="/member">
          <div className={styles.member}>Try Today</div>
        </Link>
        <Image width="4800" height="4800" src="/graphics.png" alt='Graphics'/>
        <div className={styles.about_outer}>
          <div className={styles.about_inner}>
            <p>
              Introducing eDHYALAYA, the digital iteration of Vidhyalaya,
              revolutionizing education.{" "}
            </p>
            <p>
              Our platform offers tailored courses meticulously crafted to
              address the individual needs of every student, fostering
              excellence across all domains. We believe in holistic success,
              emphasizing not only academic proficiency but also non-academic
              skills, practical life acumen, a strategic mindset, and personal
              development mastery.{" "}
            </p>
            <p>
              With eDHYALAYA, learners embark on a journey towards comprehensive
              growth and all-round progress. Our goal is to empower individuals
              with the knowledge, skills, and mindset necessary to thrive in
              today&apos;s dynamic world. Whether you seek academic excellence,
              career advancement, or personal fulfillment, our diverse range of
              courses and personalized approach ensure that you receive the
              support and resources needed to reach your full potential. Join us
              at eDHYALAYA and unlock the path to holistic success and lifelong
              learning.
            </p>
          </div>
          <div className={styles.right}>
            <div id="vision" className={styles.vision}>
              <h1>OUR VISION</h1>
              <p>
                We envision to uplift the quality and standard of education of
                the entire educational communities.
              </p>
            </div>
            <div id="mission" className={styles.mission}>
              <h1>OUR MISSION</h1>
              <p>
                Our Mission is to equip students with skills, knowledge, mindset
                and consciousness that would prepare them to be successful in
                all areas of life.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.objectives}>
            <h1>Objectives</h1>
            <p>
              Create and deliver high-quality, engaging, and relevant courses
              that prepare students for the real global world.
            </p>
            <p>
              Foster a culture of continuous improvement and innovation to stay
              ahead of the curve.
            </p>
            <p>
              Empower students to take control of their own learning by providing
              personalized and flexible learning experiences.
            </p>
            <p>
              Build strong partnerships with industry leaders and experts to
              bring real-world experience into the classroom.
            </p>
            <p>
              Expand access to education by providing affordable and accessible
              courses to students of all backgrounds.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
