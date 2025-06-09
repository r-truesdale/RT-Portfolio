import React from 'react'
import styles from "./Contact.module.css";
import themes from "../components/Theme.module.css"

function Contact() {
  return (
    <div className={themes.sectionCard}>
      <div className={styles.contact}>
        <h1>Contact Me</h1>
        <p>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
        <ul className={styles.contactList}>
          <li>Email: <a href="mailto:r-truesdale@outlook.com">r-truesdale@outlook.com</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact