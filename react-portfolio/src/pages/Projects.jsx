import React from 'react';
import styles from "./Projects.module.css";
import themes from "../components/Theme.module.css";
import exCircle from "../assets/exclamation-circle.svg";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={themes.sectionCard}>
        <div className={styles.projCards}>
          <div className={styles.projCard}>
            <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className={styles.projThumbnail} />
            <h2 className={styles.projName}>Green Digital Twin</h2>
            <p className={styles.projDesc}>This is a brief description of the project. It highlights the main features and technologies used.</p>
            <a href="#" className={styles.projLink}>View Project</a>
          </div>
          <div className={styles.projCard}>
            <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className={styles.projThumbnail} />
            <h2 className={styles.projName}>Rhythm Game</h2>
            <p className={styles.projDesc}>This is a brief description of the project. It highlights the main features and technologies used.</p>
            <a href="#" className={styles.projLink}>View Project</a>
          </div>
                    <div className={styles.projCard}>
            <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className={styles.projThumbnail} />
            <h2 className={styles.projName}>Taking Charge</h2>
            <p className={styles.projDesc}>This is a brief description of the project. It highlights the main features and technologies used.</p>
            <a href="#" className={styles.projLink}>View Project</a>
          </div>
        </div>
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

        <div className={styles.infoCard}>
          <img src={exCircle} alt="Exclamation Circle" className={styles.exclamationIcon} />
          <p className={styles.infoTxt}>A Digital Twin is virtual representation of an object or system that’s updated from real-time data, and uses simulation to help decision making</p>
        </div>
      </div>
    </div>
  )
}
export default Projects;