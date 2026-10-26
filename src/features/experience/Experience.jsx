import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';

function Experience() {
  return <section id="experience" className="section section-experience"><div className="shell experience-grid">
    <div><SectionTitle number="04" eyebrow="EXPERIENCE & EDUCATION" title={<>The work. <span className="highlight-text">The foundation.</span></>}/><p className="experience-intro">Learning by doing — across academic projects, a development internship and independent builds.</p></div>
    <div className="experience-right"><div className="experience-item"><div className="experience-meta">JAN — APR 2026 <span>INTERNSHIP</span></div><h3>Full Stack Developer Intern</h3><p className="exp-org">Femtosoft Technologies · Chennai</p><ul><li>Worked on React and Spring Boot application modules and REST API integration.</li><li>Supported SQL query optimization and backend feature development.</li><li>Collaborated in Agile workflows and gained exposure to CI/CD practices.</li></ul></div><div className="experience-item education-item"><div className="experience-meta">2022 — 2026 <span>EDUCATION</span></div><h3>B.Tech — Artificial Intelligence &amp; Data Science</h3><p className="exp-org">Annai Mira College of Engineering and Technology</p><div className="cgpa-line">CGPA <strong>8.37 / 10</strong></div></div><div className="experience-item certificates-item"><div className="experience-meta">CERTIFICATIONS <span>LEARNING</span></div><ul className="certifications"><li><span>Full Stack Java Development</span><small>Simplilearn</small></li><li><span>Python Data Analysis</span><small>LinkedIn Learning</small></li><li><span>Spring Framework Specialization</span><small>Infosys</small></li></ul></div></div>
  </div></section>;
}

export default Experience;
