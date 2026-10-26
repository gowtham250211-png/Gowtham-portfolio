import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';

function About() {
  return <section id="about" className="section section-about"><div className="shell about-layout">
    <div><SectionTitle number="01" eyebrow="GET TO KNOW ME" title={<>A developer who cares about <span className="highlight-text">the details.</span></>} /></div>
    <div className="about-right">
      <p>I'm a <strong>2026 B.Tech Artificial Intelligence &amp; Data Science graduate</strong> from Annai Mira College of Engineering and Technology (CGPA: 8.37), with a strong interest in software engineering and real-world problem solving.</p>
      <p>My projects explore everything from <strong>role-based authentication and team workflows</strong> to automated failure detection in logistics. I enjoy connecting clean interfaces to reliable backend logic.</p>
      <p>During my Full Stack Developer internship at <strong>Femtosoft Technologies</strong>, I worked with React, Spring Boot REST APIs, SQL and Agile development practices. I'm adaptable, eager to learn and ready to contribute to a development team.</p>
      <div className="about-facts"><div><span>01</span><small>FULL STACK<br/>INTERNSHIP</small></div><div><span>03</span><small>FEATURED<br/>APPLICATIONS</small></div><div><span>8.37</span><small>B.TECH<br/>CGPA</small></div></div>
    </div>
  </div></section>;
}

export default About;
