import React from 'react';
import styles from "./Projects.module.css";
import themes from "../components/Theme.module.css";
import exCircle from "../assets/exclamation-circle.svg";
// --------------GREEN DIGITAL TWIN-----------------
import gTwinImg from "../assets/gdt4.png";
import gTwinEnviro from "../assets/gdt.png";
import gTwinStats1 from "../assets/gdtstats1.png";
import gTwinStats2 from "../assets/gdtstats2.png";
import gTwinStats3 from "../assets/gdtstats3.png";
import gTwinProto1 from "../assets/gdtproto1.png";
import gTwinProto2 from "../assets/gdtProtoRender.png";
import gdtFinal from "../assets/gdtFinal.png";
// --------------RHYTHM GAME-----------------
import rhythmMenu from "../assets/game1.jpg";
import rhythmPlayMode from "../assets/game2.png";
import rhythmPracticeMode from "../assets/game3.png";
import levelStats from "../assets/game4.png";
import playerStats1 from "../assets/gamestats1.png";
import playerStats2 from "../assets/gamestats2.png";
import pracColours from "../assets/Pcolours.png";
import gameColours from "../assets/Gcolours.png";
import mainMenu from "../assets/gamemenu.png";
import gameMenu from "../assets/gamelevel1.jpg";
import pracMenu from "../assets/gamelevel2.png";
// --------------TAKING CHARGE-----------------
import tcmenu from "../assets/tcmenu.png";
import tcUserFlow from "../assets/user flow.png";
import tcFinalProto from "../assets/finalprototype.png";
import tcStoryboard from "../assets/storyboard.png";
import tcCorrect from "../assets/tcCorrect.png";
import tcIncorrect from "../assets/tcIncorrect.png";
import tcLevelSelect from "../assets/tcLevelSelect.png";
import tcHint from "../assets/tcHint.png";
import tcTutorial from "../assets/tcTutorial.png";
const Projects = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.Projects} id="pageTop">

      <div className={themes.sectionCard + ' ' + styles.projSection}>
              <button onClick={() => handleScrollTo('pageTop')} style={{ cursor: 'pointer' }} className={styles.topBtn}>
        <i class="bi bi-chevron-up"></i>
      </button>
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
      <div className={themes.sectionCard} id="greenDigital">
        <div className={styles.project}>
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
          
          <div  className={styles.gdtStats1} ><img src={gTwinStats1} alt="Green Digital Twin Stats 1" className={styles.gdtStats1Img}/></div>
          <div  className={styles.gdtStats2} ><img src={gTwinStats2} alt="Green Digital Twin Stats 2" className={styles.gdtStats2Img} /></div>
          <div  className={styles.gdtStats3} ><img src={gTwinStats3} alt="Green Digital Twin Stats 3" className={styles.gdtStats3Img} /></div>
        </div>
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Design</h1>
        <div className={styles.proto}>
          <p className={styles.sectionTxt + ' ' + styles.gdtProtoTxt}>I created the user journey first to walk through the initial idea of the app and system design. After going through the the user journey design, the design prototype was created and adjusted to increase user retention. This was done by taking out the requirement to have an account before interacting with the app. In addition, the NFC scanning instructions were moved to the physical map, this change meant no prior knowledge of the existence of the app was needed before interacting with it.</p>
          <div className={styles.proto1}>
            <h3 className={themes.imgLabel + ' ' + styles.imgLabel}>User Journey Prototype</h3>
            <img src={gTwinProto1} alt="Green Digital Twin Prototype" className={styles.gdtProto1} />
          </div>
          <div className={styles.proto2}>
            <h3 className={themes.imgLabel + ' ' + styles.imgLabel}>Design Prototype</h3>
            <img src={gTwinProto2} alt="Green Digital Twin Prototype" className={styles.gdtProto2} />
          </div>
        </div>
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Finished Product</h1>
        <div className={styles.gdtFinished}>
          <div className={styles.finalTextBlock}>
            <p className={styles.finalText1}>To reduce the amount of text the user needed to read, the project information was added as an additional section the user could seek out. A species counter was also added to keep the user more engaged and encourage a feeling of community and engagement.</p>
            <p className={styles.finalText2}>The user has the option to view the posts through the gallery page, which gives more detail, or by clicking individual dots on the map.</p>
            <p className={styles.finalText3}>I made changes from the design prototype so the map became the one of the first things the user saw. I did this as it would be easier for the user to make the connection to  the physical map in front of them and the digital one that appeared on their phone.</p>
            <p className={styles.finalText4}>A carousel of facts about local biodiversity and ongoing initiatives is there to help promote and inspire stewardship</p>
          </div>
          <div className={styles.gdtFinalImgContainer}>
            <img src={gdtFinal} alt="Green Digital Twin Main Page" className={styles.gdtFinalImg} />
          </div>
        </div>
      </div>
      <div className={themes.sectionCard} id="rhythmGame">
        <div className={styles.project} >
          <div className={styles.projIntro}>
            <h1 className={styles.projTitle} >Rhythm Game</h1>
            <p className={styles.introTxt}>For my university final year project I created a rhythm game in unity, using a unity store asset that allowed my to import and control MIDI music files. I also did some research into differences in how musicians and non-musicians approach these kinds of games by sending out a questionnaire to my playtesters.</p>
            <div className={styles.skills}>
              <div className={styles.skill}></div>
              <div className={styles.skill}>Unity</div>
              <div className={styles.skill}>C#</div>
              <div className={styles.skill}></div>
            </div>
          </div>
        </div>
        {/* <div className={styles.infoCard2}>
          <p className={styles.infoTxt}>For my university final year project I created a rhythm game in unity, using a unity store asset that allowed my to import and control MIDI music files. I also did some research into differences in how musicians and non-musicians approach these kinds of games by sending out a questionnaire to my playtesters.</p>
        </div> */}
        <p className={styles.imgTxt}>Click below to play the game!</p>
        <a href="https://r-truesdale.github.io/Rhythm/final/index.html" target='_blank' rel="noopener noreferrer">
          <img src={rhythmMenu} alt="Rhythm Game Menu" className={styles.rhythmMenuImg} />
        </a>
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Game Design</h1>
        <p className={styles.sectionTxt}>In order to review player behavior I created two different play modes, a Game mode and a Practice mode. To keep the game interesting, I made sure to include three difficulty levels for per song.</p>
        <div className={styles.rhythmModes}>
          <div className={styles.modeCard}>
            <img src={rhythmPlayMode} alt="Rhythm Game Play Mode" className={styles.rhythmPlayModeImg} />
            <p className={styles.modeTxt}><span className={themes.bold}>Game mode:</span> The player moves a box up and down to ‘catch’ the beats on time. The next song would only be unlocked to play after the player beat a certain score on their current level.</p>
          </div>
          <div className={styles.modeCard}>
            <img src={rhythmPracticeMode} alt="Rhythm Game Practice Mode" className={styles.rhythmPracticeModeImg} />
            <p className={styles.modeTxt}><span className={themes.bold}>Practice mode:</span> The player just needs to keep time to the beats of the song.</p>
          </div>
        </div>
        <p className={styles.sectionTxt}>To make sure players know how to improve their score timings are shown at the end of the level, along with a summary and graph available after completing a level.</p>
        <div className={styles.rhythmStats}>
          <div className={styles.rhythmStatsCard}>
            <img src={levelStats} alt="Rhythm Game Level Stats" className={styles.rhythmStatsImgs} />
            <p className={styles.modeTxt}>Level end screen showing accuracy of player performance</p>
          </div>
          <div className={styles.rhythmStatsCard}>
            <img src={playerStats1} alt="Rhythm Game Player Stats 1" className={styles.rhythmStatsImgs} />
            <p className={styles.modeTxt}>Player Statistics table view of game mode scores</p>
          </div>
          <div className={styles.rhythmStatsCard}>
            <img src={playerStats2} alt="Rhythm Game Player Stats 2" className={styles.rhythmStatsImgs} />
            <p className={styles.modeTxt}>Player Statistics graph view of overall level score</p>
          </div>
        </div>
        <p className={styles.sectionTxt}>I made sure the player was able to separate their scores from the different modes of play. The table view had the modes on two different pages and the graph mode showed the scores in two different colours.</p>
      </div>
      <div className={themes.sectionCard}>
        <div className={themes.sectionTitle}>UI</div>
        <p className={styles.sectionTxt}>To give the player consistency I made sure the different game types had their own colour theme, but had the same overall layout and design. This was to create a clear separation between the two modes, especially when their layout is similar. </p>
        <div className={styles.uiImgs}>
          <img src={gameColours} alt="Game Colors" className={styles.gameColours} />
          <img src={mainMenu} alt="Main Menu" className={styles.mainMenu} />
          <img src={pracColours} alt="Practice Colours" className={styles.pracColours} />
          <img src={gameMenu} alt="Game Menu" className={styles.gameMenu} />
          <img src={pracMenu} alt="Practice Menu" className={styles.pracMenu} />
        </div>
      </div>
      <div className={themes.sectionCard} id="takingCharge">
        <div className={styles.project}>
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
          <img src={tcmenu} alt="Taking Charge Menu" className={styles.tcMenu} />
        </div>
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Design</h1>
        <p className={styles.sectionTxt}>This project idea was reached from reaching out to GCSE aged people and asking which subjects they needed more help understanding or which was their least favourite subject and why. We also asked these questions to people who had completed their GCSEs for additional responses. Physics was a common problem subject with people saying they had trouble visualizing certain concepts.</p>
        <p className={styles.sectionTxtEmphasis}>Prototypes and storyboards were iterated upon until we reached our final high fidelity prototype. I have shown the progression of the design process below.</p>
        <p className={themes.subheading}>User Flow Diagram</p>
        <p className={styles.sectionTxt}>The user flow includes the path that the players will use. This was created to allow us to ensure the user journey was as intuitive and helpful as possible, allowing the user to focus on the educational content.</p>
        <img src={tcUserFlow} alt="Taking Charge User Flow" className={themes.mainImg} />
        <p className={themes.subheading}>Storyboard</p>
        <p className={styles.sectionTxt}>The storyboard was created after the user flow diagram to decide on the layout design of the pages within the application. This made sure the team was coherent on the overall layout, and how we would need to move forward with the code implementation.</p>
        <img src={tcStoryboard} alt="Taking Charge Storyboard" className={themes.mainImg} />
        <p className={themes.subheading}>Design Prototype</p>
        <p className={styles.sectionTxt}>After finishing the storyboard, the design prototype was created to finalize the overall theme of the application.</p>
        <img src={tcFinalProto} alt="Taking Charge Final Prototype" className={themes.mainImg} />
      </div>
      <div className={themes.sectionCard}>
        <h1 className={themes.sectionTitle}>Finished Project</h1>
        <p className={styles.sectionTxt2}>Below is the finished implementation, which includes a practice question to demonstrate the system.</p>
        <p className={styles.sectionTxt2}> A toggle switch was added to the simulator which switches between written symbols and more lifelike images of the circuit components. This was added to give the user the option to practice identifying the different component symbols.</p>
        <div className={styles.tcImgs}>
          <img src={tcmenu} alt="Taking Charge Menu" className={styles.tcImg} />
          <img src={tcTutorial} alt="Taking Charge Tutorial" className={styles.tcImg} />
          <img src={tcLevelSelect} alt="Taking Charge Level Select" className={styles.tcImg} />
          <img src={tcIncorrect} alt="Taking Charge Incorrect Answer" className={styles.tcImg} />
          <img src={tcHint} alt="Taking Charge Hint" className={styles.tcImg} />
          <img src={tcCorrect} alt="Taking Charge Correct Answer" className={styles.tcImg} />
        </div>
      </div>
    </div >
  )
}
export default Projects;