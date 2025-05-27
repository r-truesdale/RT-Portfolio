import React from 'react';
import styles from "./Projects.module.css";
import themes from "../components/Theme.module.css";
import exCircle from "../assets/exclamation-circle.svg";
import gTwinImg from "../assets/gdt3.png";

const Projects = () => {
  // Scroll handler
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.Projects}>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Projects</h1>
        <div className={styles.projCards}>
          <div className={styles.projCard} onClick={() => handleScrollTo('greenDigital')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Green Digital Twin</h2>
            <img src={gTwinImg} alt="Project Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>A multimedia project intended to encourage interest in local green spaces. A physical map was linked with an online app through an NFC card and Arduino components.</p>          </div>
          <div className={styles.projCard} onClick={() => handleScrollTo('rhythmGame')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Rhythm Game</h2>
            <img alt="Digital Twin Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>Unity and C# rhythm game, midi files, stats, final year project</p>
            <a href="#" className={styles.projLink}>View Project</a>
          </div>
          <div className={styles.projCard} onClick={() => handleScrollTo('takingCharge')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Taking Charge</h2>
            <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>Web app for GCSE circuits help</p>
            <a href="#" className={styles.projLink}>View Project</a>
          </div>
        </div>
      </div>
      <div className={themes.sectionCard}>
        <div className={styles.project} id="greenDigital">
          <div className={styles.projIntro}>
            <h1 className={styles.projTitle} >Green Digital Twin</h1>
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
      <div className={themes.sectionCard}>
        <div className={styles.project} id="rhythmGame">
          <div className={styles.projIntro}>
            <h1 className={styles.projTitle} >Rhythm Game</h1>
            <p className={styles.introTxt}>Brief: Group project to create a “Green Digital Twin” that will help to improve people’s awareness, understanding and stewardship of the green spaces around them.</p>
            <div className={styles.skills}>
              <div className={styles.skill}></div>
              <div className={styles.skill}>Unity</div>
              <div className={styles.skill}>C#</div>
              <div className={styles.skill}></div>
            </div>
          </div>
          <div className={styles.infoCard}>
            <img src={exCircle} alt="Exclamation Circle" className={styles.exclamationIcon} />
            <p className={styles.infoTxt}>A Digital Twin is virtual representation of an object or system that’s updated from real-time data, and uses simulation to help decision making</p>
          </div>
        </div>
      </div>
      <div className={themes.sectionCard}>
        <div className={styles.project} id="takingCharge">
          <div className={styles.projIntro}>
            <h1 className={styles.projTitle} >Taking Charge</h1>
            <p className={styles.introTxt}>Brief: Group project to design and implement an educational application with a controllable environment.</p>
            <div className={styles.skills}>
              <div className={styles.skill}>HTML</div>
              <div className={styles.skill}>CSS</div>
              <div className={styles.skill}>JavaScript</div>
              <div className={styles.skill}>Figma</div>
            </div>
          </div>
          <div className={styles.infoCard2}>
            <p className={styles.infoTxt}>A circuit building simulator focusing on GCSE level content. Intended to be used in conjunction with teachers as an engaging classroom resource or revision tool.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects;