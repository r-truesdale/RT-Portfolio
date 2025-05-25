import React from 'react';
import styles from "./About.module.css";
import themes from "../components/Theme.module.css"


const About = () => {
 return (
  <div className={styles.about}>
   <div className={themes.sectionCard}>
    <h1 className={styles.title}>Rebecca Truesdale</h1>
    <p className={styles.introTxt}>
     <span className={styles.emphasis}>Creative Computing </span>Graduate with a
     <span className={styles.emphasis}> first </span>
     from Queen Mary University of London</p>
    <p className={styles.introTxt}>
     Experienced in
     <span className={styles.emphasis}> full stack development </span>
     with a passion for
     <span className={styles.emphasis}> user-centric design.</span></p>
   </div>
  </div>

 )
}
export default About;