import React from 'react';
import Icon from '../../components/ui/Icon';
import ProjectArt from './ProjectArt';

function ProjectCard({ project }) {
  return <article className="featured-card">
    <ProjectArt kind={project.kind}/>
    <div className="featured-copy"><div className="featured-eyebrow"><span>{project.id} / {project.eyebrow}</span><span className="featured-category">{project.category}</span></div><h3>{project.title}</h3><p>{project.summary}</p><ul className="feature-list">{project.points.map(point => <li key={point}><span>↗</span>{point}</li>)}</ul><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.repo} target="_blank" rel="noopener noreferrer">View code <Icon name="github" size={17}/></a>{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live demo <Icon name="external" size={17}/></a>}</div></div>
  </article>;
}

export default ProjectCard;
