import React from 'react';
import styles from "./Projects.module.css";
import themes from "../components/Theme.module.css";
import exCircle from "../assets/exclamation-circle.svg";
import gTwinImg from "../assets/gdt4.png";
import gTwinEnviro from "../assets/gdt.png";
import gTwinStats1 from "../assets/gdtstats1.png";
import gTwinStats2 from "../assets/gdtstats2.png";
import gTwinStats3 from "../assets/gdtstats3.png";
import gTwinProto1 from "../assets/gdtproto1.png";
import gTwinProto2 from "../assets/gdtProtoRender.png";
import gTwinScreenFlow from "../assets/gdtUploadPage.png";
import rhythmMenu from "../assets/game2.png";
import tcmenu from "../assets/tcmenu.png";

const Projects = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.Projects}>
      <div className={themes.sectionCard + ' ' + styles.projSection}>
        <h1 className={themes.sectionTitle}>Projects</h1>
        <div className={styles.projCards}>
          <div className={styles.projCard} onClick={() => handleScrollTo('greenDigital')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Green Digital Twin</h2>
            <img src={gTwinImg} alt="Digital Twin Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>A multimedia project intended to encourage interest in local green spaces. A physical map was linked with an online app through an NFC card and Arduino components.</p>
          </div>
          <div className={styles.projCard} onClick={() => handleScrollTo('rhythmGame')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Rhythm Game</h2>
            <img src={rhythmMenu} alt="Rhythm Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>Unity and C# rhythm game, midi files, stats, final year project</p>
          </div>
          <div className={styles.projCard} onClick={() => handleScrollTo('takingCharge')} style={{ cursor: 'pointer' }}>
            <h2 className={styles.projName}>Taking Charge</h2>
            <img src={tcmenu} alt="Taking Charge Thumbnail" className={styles.projThumbnail} />
            <p className={styles.projDesc}>Web app for GCSE circuits help</p>
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
          <div className={styles.gdtIntroImg}>
            <div className={styles.spacer}></div>
            <div className={styles.infoCard2 + ' ' + styles.gdtInfoCard2Txt}>
              <p className={styles.infoTxt}>Taking inspiration from games like Pokémon Go and crowd databases like iNaturalist, we decided to focus on creating a community database of the biodiversity in the area. We decided to create an application that would store and show on a map what images people had taken of flora and fauna. To introduce the users to this application we would have physical maps with NFC areas that would take users to the web app when scanned.</p>
              <p className={styles.infoTxt}> My responsibilities in this project were the digital Design and Front-End development. In addition to this I also supported the other members with physical construction and back-end development.</p>
            </div>
            <img src={gTwinEnviro} alt="Green Digital Twin" className={styles.gdtEnviro} />
            <div className={styles.spacer}></div>
          </div>
        </div>
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Research</h1>
        <p className={styles.sectionTxt}>This project was based around the biodiversity of our campus greenspaces, so this is where we conducted user engagement and education research.</p>
        <p className={styles.sectionTxtEmphasis}>User research was completed to see whether people would use their phones to scan prompts and to gauge general knowledge on biodiversity.</p>
        <div className={styles.gdtStatsImgs}>
          <img src={gTwinStats1} alt="Green Digital Twin Stats 1" className={styles.gdtStats} />
          <img src={gTwinStats2} alt="Green Digital Twin Stats 2" className={styles.gdtStats} />
          <img src={gTwinStats3} alt="Green Digital Twin Stats 3" className={styles.gdtStats} />
        </div>
      </div>
      <div className={themes.sectionCard + ' ' + styles.gdtDesignPage}>
        <h1 className={themes.sectionTitle + ' ' + styles.gdtDesignTitle}>Design</h1>
        <h3 className={themes.imgLabel + ' ' + styles.imgLabel1}>User Journey Prototype</h3>
        <img src={gTwinProto1} alt="Green Digital Twin Prototype" className={styles.gdtProto1} />
        <div className={styles.infoCard + ' ' + styles.designInfoCard}>
          <img src={exCircle} alt="Exclamation Circle" className={styles.exclamationIcon} />
          <p className={styles.infoTxt}>The main purpose of these changes were to increase user retention through reducing loading times and inputting unnecessary data</p>
        </div>
        <h3 className={themes.imgLabel + ' ' + styles.imgLabel2}>Design Prototype</h3>
        <img src={gTwinProto2} alt="Green Digital Twin Prototype" className={styles.gdtProto2} />
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Finished Product</h1>
        <img src={gTwinScreenFlow} alt="Green Digital Twin Screen Flow" className={styles.gdtScreenFlow} />
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