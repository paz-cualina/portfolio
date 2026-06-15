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
