import React from 'react'
import styles from "./Contact.module.css";
import themes from "../components/Theme.module.css"
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";

function Contact() {
  return (
    <div className={themes.sectionCard}>
      <div className={styles.contact}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <h2>If you have any questions or comments, please feel free to contact me via email or LinkedIn</h2>
        <ul className={styles.contactList}>
          <li><img src={email} className={styles.emailSVG}></img><a href="mailto:r-truesdale@outlook.com">r-truesdale@outlook.com</a></li>
          <li><img src={linkedin} className={styles.linkedinSVG}></img><a href="https://www.linkedin.com/in/rebecca-truesdale/" target="_blank" rel="noopener noreferrer">Rebecca Truesdale</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact