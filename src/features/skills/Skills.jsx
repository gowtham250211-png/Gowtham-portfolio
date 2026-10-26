import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import { SKILLS } from '../../data/skills';

function Skills() {
  return <section id="skills" className="section section-skills"><div className="shell">
    <SectionTitle number="02" eyebrow="TECHNICAL SKILLS" title={<>The tools behind <span className="highlight-text">my work.</span></>} sub="A practical stack for building responsive frontends, secure APIs and data-backed applications."/>
    <div className="skill-grid">{SKILLS.map((skill, i) => <div className="skill-card" key={skill.label}><div className="skill-card-top"><span className="skill-card-icon">{['{ }','</>','▦','⌘'][i]}</span><span className="skill-index">0{i+1}</span></div><h3>{skill.label}</h3><div className="skill-pills">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </div></section>;
}

export default Skills;
