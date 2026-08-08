import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/misc/top-bar/top-bar.jsx';
import Nav from '../components/misc/nav/nav.jsx';
import Hero from '../components/hero/hero.jsx';
import About from '../components/about/about.jsx';
import Skills from '../components/skills/skills.jsx';
import Experience from '../components/experience/experience.jsx';
import Work from '../components/work/work.jsx';
import Sites from '../components/sites/sites.jsx';
import Education from '../components/education/education.jsx';
import Contact from '../components/contact/contact.jsx';

const Portfolio = () => {
  const { state } = useLocation();

  // Case-study back links pass `scrollTo` so returning lands on that section.
  React.useEffect(() => {
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView({ block: 'start' });
    }
  }, [state]);

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Sites />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default Portfolio;
