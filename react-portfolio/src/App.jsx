import React from "react";
import { Route, Routes } from 'react-router-dom';

import styles from "./App.module.css";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
