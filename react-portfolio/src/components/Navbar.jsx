import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cv from "../assets/CV.pdf";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.cv}><a href={cv} without rel="noopener noreferrer" target="_blank">CV</a></div>
      <ul className={styles.pageLinks}>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;