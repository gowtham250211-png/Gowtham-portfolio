import React from 'react';
import Icon from '../../components/ui/Icon';
import HeroCodeCard from './HeroCodeCard';
import { PROFILE } from '../../data/profile';

function Hero() {
  return <section id="home" className="hero">
    <div className="shell hero-layout">
      <div className="hero-copy">
        <div className="eyebrow"><span className="availability-dot"/> AVAILABLE FOR ENTRY-LEVEL OPPORTUNITIES</div>
        <p className="hero-intro">Hello, I'm <span>Gowtham G.</span></p>
        <h1>Building software<br/>with <em>purpose.</em></h1>
        <p className="hero-desc">Software Developer and 2026 AI &amp; Data Science graduate. I build full-stack applications with <strong>Java, Spring Boot, React</strong> and SQL — from the interface to the database.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore my projects <Icon name="arrow" size={18}/></a>
          <a href={PROFILE.resume} className="button button-secondary" download>Download resume <Icon name="download" size={18}/></a>
        </div>
        <div className="hero-socials"><span>FIND ME ON</span><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={19}/></a><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={19}/></a><div className="social-divider"/><span><Icon name="location" size={14}/> Vellore, Tamil Nadu</span></div>
      </div>
      <HeroCodeCard />
    </div>
    <div className="hero-bottom shell"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span>JAVA / REACT / SPRING BOOT</span></div>
  </section>;
}

export default Hero;
