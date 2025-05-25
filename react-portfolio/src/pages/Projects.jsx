import React from 'react';
import styles from "./Projects.module.css";
import themes from "../components/Theme.module.css";

const Projects = () => {
 return (
  <div className={styles.Projects}>
   <div className={themes.sectionCard}>
    <div className={styles.projIntro}>
     <h1 className={styles.projTitle}>Green Digital Twin</h1>
     <p className={styles.introTxt}>Brief: Group project to create a “Green Digital Twin” that will help to improve people’s awareness, understanding and stewardship of the green spaces around them.</p>
     
     <div className={styles.skills}>
      <div className={styles.skill}>Arduino</div>   
      <div className={styles.skill}>HTML</div>
      <div className={styles.skill}>CSS</div>
      <div className={styles.skill}>JavaScript</div>
      <div className={styles.skill}>Figma</div>
      </div>
    </div>
   </div>
  </div>

 )
}
export default Projects;