import React from 'react';
function SectionTitle({ number, eyebrow, title, sub, center = false }) {
  return <div className={'section-heading'+(center?' centered':'')}><div className="section-kicker"><span>{number}</span> / {eyebrow}</div><h2>{title}</h2>{sub && <p>{sub}</p>}</div>;
}

export default SectionTitle;
