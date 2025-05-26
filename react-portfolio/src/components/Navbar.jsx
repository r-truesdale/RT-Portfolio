import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <p className={styles.title}>RT</p>
      <ul className={styles.pageLinks}>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;