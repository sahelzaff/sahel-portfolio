import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
