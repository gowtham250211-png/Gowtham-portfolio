import React from 'react';
import { useMemo, useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Icon from '../../components/ui/Icon';
import ProjectCard from './ProjectCard';
import { PROJECTS, MINI_PROJECTS } from '../../data/projects';

/** Search and category filtering are client-side: no API/server needed. */
export default function Projects() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const normalized = search.trim().toLowerCase();
  const featured = useMemo(() =>
    category === 'Frontend' ? [] : PROJECTS.filter(project =>
      [project.title, project.summary, ...project.tags, ...project.points]
        .join(' ').toLowerCase().includes(normalized)
    ), [category, normalized]
  );
  const mini = useMemo(() =>
    category === 'Full stack' ? [] : MINI_PROJECTS.filter(project =>
      [project.title, project.subtitle, project.stack].join(' ').toLowerCase().includes(normalized)
    ), [category, normalized]
  );
  const total = featured.length + mini.length;

  return (
    <section id="projects" className="section section-projects">
      <div className="shell">
        <div className="projects-heading-row">
          <SectionTitle number="03" eyebrow="SELECTED WORK"
            title={<>Projects I've <span className="highlight-text">built.</span></>}
            sub="A selection of full-stack applications and smaller web projects. Explore the repositories to see how they're put together." />
          <div className="filter-tabs" role="group" aria-label="Filter projects by category">
            {['All', 'Full stack', 'Frontend'].map(tab => (
              <button type="button" key={tab} className={category === tab ? 'active' : ''}
                onClick={() => setCategory(tab)} aria-pressed={category === tab}>{tab}</button>
            ))}
          </div>
        </div>

        <div className="project-search-row">
          <label htmlFor="project-search">Search technologies or projects</label>
          <div className="project-search-control">
            <Icon name="search" size={19} />
            <input id="project-search" type="search" placeholder="Try Spring Boot, React, CRM..."
              value={search} onChange={event => setSearch(event.target.value)} autoComplete="off" />
          </div>
          <span className="project-search-count" role="status" aria-live="polite">
            {total} project{total === 1 ? '' : 's'} found
          </span>
        </div>

        {featured.length > 0 && (
          <div className="featured-list">{featured.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        )}
        {mini.length > 0 && (
          <div className="mini-projects">
            <div className="mini-heading"><h3>More things I've made</h3><span>SMALL BUILDS / CONTINUOUS LEARNING</span></div>
            <div className="mini-grid">{mini.map(project => (
              <a className="mini-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.id}>
                <div className="mini-card-top"><span>{project.id} / {project.type.toUpperCase()}</span><Icon name="external" size={18} /></div>
                <h4>{project.title}</h4><p>{project.subtitle}</p><div className="mini-card-bottom">{project.stack}</div>
              </a>
            ))}</div>
          </div>
        )}
        {total === 0 && (
          <div className="projects-empty" role="status">
            <strong>No matching projects yet.</strong>
            <p>Try a different keyword or clear the filters.</p>
            <button type="button" onClick={() => { setSearch(''); setCategory('All'); }}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
