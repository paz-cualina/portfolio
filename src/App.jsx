import React from 'react';
import Hero from './components/hero/hero.jsx';
import Nav from './components/misc/nav/nav.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';
import Experience from './components/experience/experience.jsx';
import Work from './components/work/work.jsx';
import Education from './components/education/education.jsx';
import Contact from './components/contact/contact.jsx';

// Main App
const App = () => {
  const presets = [
    { name: 'Cyber green', h: 152, c: 0.27, l: 0.85 },
    { name: 'Toxic lime', h: 130, c: 0.3, l: 0.92 },
    { name: 'Mint', h: 170, c: 0.2, l: 0.85 },
    { name: 'Acid yellow', h: 110, c: 0.28, l: 0.92 },
    { name: 'Hot pink', h: 0, c: 0.28, l: 0.78 },
    { name: 'Electric blue', h: 240, c: 0.24, l: 0.75 },
  ];

  return (
    <>
      <Hero />
      <Nav />
      <main id="hero" />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />
    </>
  );
};

export default App;
