import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import Skills from '../features/skills/Skills';
import Projects from '../features/projects/Projects';
import Experience from '../features/experience/Experience';
import Contact from '../features/contact/Contact';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/ui/ScrollProgress';
import BackToTop from '../components/ui/BackToTop';

/** Single-page React composition: no backend microservices required. */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
