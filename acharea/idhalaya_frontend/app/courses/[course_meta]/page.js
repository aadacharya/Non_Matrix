import React from "react";
import styles from "./course.module.css";
import Header from "../../_components/_header/header";
import Footer from "../../_components/_footer/footer";

const Course_Meta = ({ params }) => {
  const course_meta = params.course_meta;
  return (
    <div>
      <Header />
      <div className={styles.course_main}>
        <div className={styles.left}>
          <video controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Cost : 200 NPR</h3>
          <h1> About the course </h1>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
          <h1> What will you learn </h1>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
          <h1> FAQs </h1>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
          <p>
            {" "}
            The course "Introduction to Data Science" provides an essential
            foundation for individuals interested in exploring the
            interdisciplinary field of data science. Through a comprehensive
            curriculum, participants will gain practical knowledge and skills
            required to analyze and interpret complex data sets effectively. The
            course covers key topics such as data collection, preprocessing,
            visualization, statistical analysis, machine learning, and
            data-driven decision-making.
          </p>
        </div>
        <div className={styles.right}>
          <h1>{course_meta}</h1>
          <div className={styles.enroll}> Enroll </div>
          <h3>Cost : 200 NPR</h3>
          <h2>Requirement</h2>
          <p>
            {" "}
            The course "Introduction to Data Science" equips learners with
            essential skills for effective data analysis. Topics include data
            preprocessing, visualization, statistical analysis, machine
            learning, and decision-making. Through hands-on projects,
            participants gain practical experience using Python, R, and popular
            data science libraries.
          </p>
          <h2>How is This Course For</h2>
          <p>
            {" "}
            The course "Introduction to Data Science" equips learners with
            essential skills for effective data analysis. Topics include data
            preprocessing, visualization, statistical analysis, machine
            learning, and decision-making. Through hands-on projects,
            participants gain practical experience using Python, R, and popular
            data science libraries.
          </p>
          <h2>What will you learn</h2>
          <p>
            {" "}
            The course "Introduction to Data Science" equips learners with
            essential skills for effective data analysis. Topics include data
            preprocessing, visualization, statistical analysis, machine
            learning, and decision-making. Through hands-on projects,
            participants gain practical experience using Python, R, and popular
            data science libraries.
          </p>
          <h2>About the Educator</h2>
          <p>
            {" "}
            The course "Introduction to Data Science" equips learners with
            essential skills for effective data analysis. Topics include data
            preprocessing, visualization, statistical analysis, machine
            learning, and decision-making. Through hands-on projects,
            participants gain practical experience using Python, R, and popular
            data science libraries.
          </p>
          <h2>Testimonial</h2>
          <p>
            {" "}
            The course "Introduction to Data Science" equips learners with
            essential skills for effective data analysis. Topics include data
            preprocessing, visualization, statistical analysis, machine
            learning, and decision-making. Through hands-on projects,
            participants gain practical experience using Python, R, and popular
            data science libraries.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Course_Meta;
