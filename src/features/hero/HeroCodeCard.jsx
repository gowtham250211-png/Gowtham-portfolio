import React from 'react';
import Icon from '../../components/ui/Icon';

function HeroCodeCard() {
  return <div className="hero-art" aria-label="Visual summary of developer skills">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="code-window">
      <div className="code-bar"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="code-bar-right">● &nbsp; ACTIVE</span></div>
      <div className="code-body">
        <div><span className="line-num">01</span><span className="token-purple">const</span> <span className="token-light">developer</span> = {'{'}</div>
        <div><span className="line-num">02</span>&nbsp;&nbsp; <span className="token-blue">name</span>: <span className="token-yellow">'Gowtham G'</span>,</div>
        <div><span className="line-num">03</span>&nbsp;&nbsp; <span className="token-blue">focus</span>: <span className="token-yellow">'Software Development'</span>,</div>
        <div><span className="line-num">04</span>&nbsp;&nbsp; <span className="token-blue">stack</span>: [</div>
        <div><span className="line-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="token-yellow">'Java'</span>, <span className="token-yellow">'Spring Boot'</span>,</div>
        <div><span className="line-num">06</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="token-yellow">'React'</span>, <span className="token-yellow">'SQL'</span></div>
        <div><span className="line-num">07</span>&nbsp;&nbsp; ],</div>
        <div><span className="line-num">08</span>&nbsp;&nbsp; <span className="token-blue">openToWork</span>: <span className="token-purple">true</span></div>
        <div><span className="line-num">09</span>{'}'};</div>
      </div>
      <div className="code-footer"><span className="code-footer-pulse"/> Ready to build what matters. <span>UTF-8 · JSX</span></div>
    </div>
    <div className="floating-note floating-note-one"><span className="floating-mark">✦</span><span><strong>2026 Graduate</strong><small>AI & Data Science</small></span></div>
    <div className="floating-note floating-note-two"><span className="faux-check"><Icon name="check" size={16}/></span><span><strong>Full Stack Internship</strong><small>Femtosoft Technologies</small></span></div>
  </div>;
}

export default HeroCodeCard;
