import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';
import { motion } from 'framer-motion';
import MainLayout from './components/layout/MainLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Initialize GSAP animations
  React.useEffect(() => {
    const sections = gsap.utils.toArray('.section-animate');
    
    sections.forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <ScrollProvider>
        <MainLayout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education/>
          <Certificates />
          <Experience />
          <Contact />
        </MainLayout>
      </ScrollProvider>
    </ThemeProvider>
  );
};

export default App;