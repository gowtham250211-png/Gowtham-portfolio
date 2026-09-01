import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

/* ---------------------------------------------------------------- */
/* Data                                                               */
/* ---------------------------------------------------------------- */

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const STACK_LAYERS = [
  { label: 'Frontend', items: ['React.js', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Microservices'] },
  { label: 'Data', items: ['MySQL', 'PostgreSQL', 'SQL'] },
  { label: 'Tooling', items: ['Git', 'GitHub', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Apache Tomcat'] },
  { label: 'Practice', items: ['Agile', 'CI/CD', 'Unit Testing', 'Microservices Architecture'] },
];

const SECONDARY_PROJECTS = [
  {
    idx: '03',
    name: 'Weather API',
    desc: 'Responsive forecasting interface pulling live temperature, humidity and wind data from a public REST API with dynamic UI updates.',
    tags: ['React.js', 'REST API'],
    url: 'https://github.com/gowtham250211-png/Weather_Api',
  },
  {
    idx: '04',
    name: 'BMI Calculator',
    desc: 'A focused frontend utility with clean input validation and instant, readable results — no framework overhead.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/gowtham250211-png/BMI-calculator',
  },
  {
    idx: '05',
    name: 'Quotes',
    desc: 'Lightweight app demonstrating API consumption patterns and dynamic frontend rendering in React.',
    tags: ['React.js', 'REST API'],
    url: 'https://github.com/gowtham250211-png/Quotes',
  },
  {
    idx: '06',
    name: 'QR Code Generator',
    desc: 'A small utility that turns any input into a scannable QR code through a clean, interactive interface.',
    tags: ['React.js', 'JavaScript'],
    url: 'https://github.com/gowtham250211-png/QR_code',
  },
];

const EDUCATION = [
  { degree: 'B.Tech — Artificial Intelligence & Data Science', school: 'Annai Mira College of Engineering and Technology, Ranipet', score: '8.39', scoreLabel: 'CGPA' },
  { degree: 'SSLC', school: 'TMKV Government Boys Higher Secondary School, Vellore', score: '78%', scoreLabel: '2021–22' },
  { degree: 'HSLC', school: 'Vidyaniketan Matric Higher Secondary School, Vellore', score: '80%', scoreLabel: '2019–20' },
];

const CERTIFICATES = [
  { name: 'Full Stack Development', issuer: 'Simplilearn' },
  { name: 'Python Data Analysis', issuer: 'LinkedIn Learning' },
  { name: 'Spring Framework Specialization', issuer: 'Infosys' },
];

/* ---------------------------------------------------------------- */
/* Icons                                                              */
/* ---------------------------------------------------------------- */

function Icon({ name, ...props }) {
  const paths = {
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.2 4 5 5 0 0 0 19.1 1S18 .7 15 2.7a13.4 13.4 0 0 0-6 0C6 .7 4.9 1 4.9 1A5 5 0 0 0 4.8 4 5.4 5.4 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    external: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {paths[name]}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Schematic diagrams                                                 */
/* ---------------------------------------------------------------- */

function EptmsDiagram() {
  return (
    <svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#56C7E0" />
        </marker>
      </defs>
      <g fontFamily="IBM Plex Mono" fontSize="10.5" fill="#93A9BC">
        <rect x="20" y="16" width="420" height="46" rx="2" fill="none" stroke="#2A4356" />
        <text x="34" y="34" fill="#9FE6F5">ADMIN</text>
        <text x="34" y="50" fill="#5D7488" fontSize="9">full access · system config</text>

        <rect x="50" y="76" width="360" height="42" rx="2" fill="none" stroke="#2A4356" />
        <text x="64" y="93" fill="#9FE6F5">MANAGER</text>
        <text x="64" y="108" fill="#5D7488" fontSize="9">sector oversight · approvals</text>

        <rect x="80" y="132" width="300" height="42" rx="2" fill="none" stroke="#2A4356" />
        <text x="94" y="149" fill="#9FE6F5">TEAM LEADER</text>
        <text x="94" y="164" fill="#5D7488" fontSize="9">delegation · sprint boards</text>

        <rect x="110" y="188" width="240" height="42" rx="2" fill="none" stroke="#2A4356" />
        <text x="124" y="205" fill="#9FE6F5">EMPLOYEE</text>
        <text x="124" y="220" fill="#5D7488" fontSize="9">tasks · leave requests</text>
      </g>
      <line x1="230" y1="62" x2="230" y2="76" stroke="#2A4356" />
      <line x1="230" y1="118" x2="230" y2="132" stroke="#2A4356" />
      <line x1="230" y1="174" x2="230" y2="188" stroke="#2A4356" />

      <g fontFamily="IBM Plex Mono" fontSize="8.5" fill="#5D7488">
        <rect x="20" y="250" width="90" height="60" rx="2" fill="#132538" stroke="#2A4356" />
        <text x="30" y="264">TO DO</text>
        <rect x="130" y="250" width="90" height="60" rx="2" fill="#132538" stroke="#2A4356" />
        <text x="140" y="264">IN PROGRESS</text>
        <rect x="240" y="250" width="90" height="60" rx="2" fill="#132538" stroke="#2A4356" />
        <text x="250" y="264">REVIEW</text>
        <rect x="350" y="250" width="90" height="60" rx="2" fill="#132538" stroke="#E8A33D" strokeOpacity="0.6" />
        <text x="360" y="264" fill="#E8A33D">DONE +15XP</text>
      </g>
      <line x1="230" y1="230" x2="230" y2="250" stroke="#56C7E0" strokeDasharray="3 3" markerEnd="url(#arrow1)" />

      <g fontFamily="IBM Plex Mono" fontSize="9" fill="#5D7488">
        <rect x="20" y="330" width="420" height="34" rx="2" fill="none" stroke="#2A4356" strokeDasharray="2 3" />
        <text x="34" y="351" fill="#9FE6F5">IMMUTABLE AUDIT TRAIL</text>
        <text x="220" y="351">every action logged · balances auto-calculated</text>
      </g>
      <line x1="230" y1="310" x2="230" y2="330" stroke="#2A4356" />
    </svg>
  );
}

function LogisticsDiagram() {
  return (
    <svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#56C7E0" />
        </marker>
      </defs>
      <g fontFamily="IBM Plex Mono" fontSize="10" fill="#9FE6F5">
        <rect x="170" y="20" width="120" height="46" rx="2" fill="#132538" stroke="#56C7E0" strokeOpacity="0.6" />
        <text x="188" y="40" fontSize="9.5">MONITOR</text>
        <text x="188" y="54" fill="#5D7488" fontSize="8.5">scheduled polling</text>

        <rect x="300" y="110" width="130" height="46" rx="2" fill="#132538" stroke="#2A4356" />
        <text x="315" y="130" fontSize="9.5">DISRUPTION</text>
        <text x="315" y="144" fill="#5D7488" fontSize="8.5">delay / failure detected</text>

        <rect x="170" y="200" width="120" height="46" rx="2" fill="#132538" stroke="#E8A33D" strokeOpacity="0.7" />
        <text x="185" y="220" fontSize="9.5" fill="#E8A33D">RECOVER</text>
        <text x="185" y="234" fill="#5D7488" fontSize="8.5">reroute / reassign</text>

        <rect x="30" y="110" width="130" height="46" rx="2" fill="#132538" stroke="#2A4356" />
        <text x="45" y="130" fontSize="9.5">BACKUP VEHICLE</text>
        <text x="45" y="144" fill="#5D7488" fontSize="8.5">alternate route</text>
      </g>
      <path d="M230 66 C 270 80, 320 90, 335 110" fill="none" stroke="#2A4356" markerEnd="url(#arrow2)" />
      <path d="M330 156 C 300 175, 260 190, 250 200" fill="none" stroke="#2A4356" markerEnd="url(#arrow2)" />
      <path d="M170 220 C 130 200, 100 175, 95 156" fill="none" stroke="#2A4356" markerEnd="url(#arrow2)" />
      <path d="M95 110 C 130 90, 170 76, 190 66" fill="none" stroke="#56C7E0" strokeDasharray="3 3" markerEnd="url(#arrow2)" />

      <g fontFamily="IBM Plex Mono" fontSize="9" fill="#5D7488">
        <rect x="60" y="290" width="340" height="70" rx="2" fill="none" stroke="#2A4356" strokeDasharray="2 3" />
        <text x="76" y="312" fill="#9FE6F5" fontSize="9.5">GPS DASHBOARD</text>
        <text x="76" y="330">live shipment coordinates</text>
        <text x="76" y="344">checkpoint status · ETA drift</text>
      </g>
      <line x1="230" y1="246" x2="230" y2="290" stroke="#2A4356" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Layout components                                                  */
/* ---------------------------------------------------------------- */

function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topnav">
      <div className="navrow">
        <a href="#home" className="brand"><span className="dot"></span>Gowtham&nbsp;G</a>
        <nav className="links">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Get in touch</a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name="menu" width="18" height="18" />
        </button>
      </div>
      <div className={'mobile-drawer' + (open ? ' open' : '')}>
        {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="wrap hero">
      <div>
        <span className="status-line"><span className="pulse"></span>OPEN TO FULL STACK JAVA ROLES · VELLORE, TN</span>
        <h1 className="headline">I build systems that notice when something breaks — <span className="accent">and fix it before anyone has to.</span></h1>
        <p className="lead">I'm Gowtham G, a final-year B.Tech Artificial Intelligence &amp; Data Science student who builds full-stack Java systems: role-gated access, audit trails that don't lie, and services that recover from failure on their own.</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#work">View the work</a>
          <a className="btn btn-outline" href="https://github.com/gowtham250211-png" target="_blank" rel="noreferrer">
            <Icon name="github" />GitHub
          </a>
        </div>
      </div>

      <div className="hero-panel tick-frame">
        <div className="panel-head">
          <span>STATUS.LOG</span>
          <span className="lights"><i></i><i></i><i></i></span>
        </div>
        <div className="kv"><span className="k">name</span><span className="v">Gowtham G</span></div>
        <div className="kv"><span className="k">role</span><span className="v">Full Stack Java Developer</span></div>
        <div className="kv"><span className="k">focus</span><span className="v">Spring Boot · React · PostgreSQL</span></div>
        <div className="kv"><span className="k">degree</span><span className="v">B.Tech AI &amp; Data Science</span></div>
        <div className="kv"><span className="k">cgpa</span><span className="v">8.39 / 10</span></div>
        <div className="divider"></div>
        <div className="kv"><span className="k">last build</span><span className="v">EPTMS — 4-tier RBAC platform</span></div>
        <div className="stack-chips">
          <span>Java 21</span><span>Spring Security</span><span>JWT</span><span>Docker</span><span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 01</span><span className="rev">ABOUT</span></div>
      <div className="about-grid">
        <div>
          <h2 className="sheet-title" style={{ marginBottom: 0, display: 'block' }}>What I actually spend my time on</h2>
        </div>
        <div className="about-copy">
          <p>Most of my projects share the same instinct: don't just build the happy path — build for what happens when the happy path breaks. In the <strong>Employee Performance &amp; Task Management System</strong>, that meant a four-tier permission structure and an audit trail that can't be edited after the fact. In the <strong>Self-Healing Logistics System</strong>, it meant a service that watches shipments, notices when one has stalled, and reroutes it without waiting for a human.</p>
          <p>I did my Full Stack Developer internship at <strong>Femtosoft Technologies</strong>, where I worked across React.js and Spring Boot REST APIs in a microservices setup, tuned MySQL queries for response time, and got comfortable in Agile sprints run through JIRA with CI/CD behind them.</p>
          <p>Outside of coursework and internship work, I'm usually deep in a side project — the kind of thing where I'd rather write the reconciliation logic myself than trust a library to get it right.</p>
        </div>
      </div>
      <div className="fact-strip" style={{ marginTop: 40 }}>
        <div><div className="num">8.39</div><div className="lbl">CGPA — B.TECH AI &amp; DS</div></div>
        <div><div className="num">6</div><div className="lbl">SHIPPED PROJECTS</div></div>
        <div><div className="num">4</div><div className="lbl">MONTHS — FULL STACK INTERNSHIP</div></div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 02</span><span className="rev">STACK</span></div>
      <div className="sheet-title">
        <h2>How the pieces are layered</h2>
        <span className="count">5 LAYERS</span>
      </div>
      <div className="arch">
        {STACK_LAYERS.map((layer) => (
          <div className="arch-row" key={layer.label}>
            <div className="arch-label">{layer.label}</div>
            <div className="arch-items">
              {layer.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject({ reverse, diagram, fig, title, type, desc, features, tags, url }) {
  return (
    <article className={'featured-project' + (reverse ? ' reverse' : '')}>
      <div className="fp-diagram tick-frame">{diagram}</div>
      <div className="fp-copy">
        <div className="fp-eyebrow"><span className="fig">{fig}</span><span className="status">FLAGSHIP</span></div>
        <h3>{title}</h3>
        <span className="fp-type">{type}</span>
        <p className="fp-desc">{desc}</p>
        <ul className="fp-feat-list">
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="fp-tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="fp-links">
          <a href={url} target="_blank" rel="noreferrer">Source code</a>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ idx, name, desc, tags, url }) {
  return (
    <div className="proj-card">
      <div className="pc-top">
        <span className="pc-idx">{idx}</span>
        <a className="pc-link" href={url} target="_blank" rel="noreferrer" aria-label="View source">
          <Icon name="external" />
        </a>
      </div>
      <h4>{name}</h4>
      <p>{desc}</p>
      <div className="pc-tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 03</span><span className="rev">SELECTED WORK</span></div>
      <div className="sheet-title">
        <h2>Two systems built to take care of themselves</h2>
        <span className="count">06 PROJECTS</span>
      </div>

      <FeaturedProject
        fig="FIG. 01 — EPTMS"
        diagram={<EptmsDiagram />}
        title="Employee Performance & Task Management System"
        type="Full-stack enterprise web application · Jun–Aug 2026"
        desc="An enterprise platform with a strict four-tier permission model, where what you can see and approve depends entirely on where you sit in the hierarchy — and every decision leaves a record that can't be quietly changed."
        features={[
          'Four-tier RBAC (Admin, Manager, Team Leader, Employee) with method-level pre-authorization',
          'Stateless auth via Spring Security 6 + JJWT, passwords hashed with BCrypt',
          'Domain-driven task delegation with sector partitioning and sprint Kanban boards',
          'Gamified performance engine awarding +15 XP per completed deliverable',
          'Multi-level leave governance with automated balance calculation and immutable audit trails',
          'Containerized with Docker Compose — Spring Boot, React/Vite, PostgreSQL 16 as separate services',
        ]}
        tags={['Java 21', 'Spring Boot 3', 'React.js', 'PostgreSQL', 'Spring Security', 'JWT', 'Docker']}
        url="https://github.com/gowtham250211-png/EPTMS-platform"
      />

      <FeaturedProject
        reverse
        fig="FIG. 02 — LOGISTICS"
        diagram={<LogisticsDiagram />}
        title="Self-Healing Logistics System"
        type="Logistics automation platform · Feb–Mar 2026"
        desc="A shipment ever stalls without a human noticing? Not on this platform. A scheduled monitor watches every shipment in transit, and the moment one goes quiet or misses a checkpoint, the system reassigns it — no ticket, no phone call."
        features={[
          'Scheduled shipment monitoring that detects delays and failures in near real time',
          'Automated recovery workflow triggered the moment a disruption is confirmed',
          'Self-healing logic that assigns backup vehicles and alternate routes automatically',
          'Live shipment tracking dashboard with GPS-based monitoring, built in React.js',
        ]}
        tags={['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs']}
        url="https://github.com/gowtham250211-png/self-healing-logistic-system"
      />

      <div className="proj-grid">
        {SECONDARY_PROJECTS.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 04</span><span className="rev">EXPERIENCE</span></div>
      <div className="sheet-title"><h2>Where I put the theory to work</h2></div>
      <div className="timeline">
        <div className="tl-item">
          <span className="tl-when">JAN 2026 — APR 2026</span>
          <h3>Full Stack Developer Intern</h3>
          <span className="tl-org">Femtosoft Technologies</span>
          <ul>
            <li>Developed full-stack applications with React.js and Spring Boot REST APIs in a microservices architecture, improving scalability and reducing deployment time.</li>
            <li>Enhanced backend performance by optimizing MySQL queries, improving response time.</li>
            <li>Worked in Agile environments using JIRA and supported CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 05</span><span className="rev">EDUCATION &amp; CERTIFICATES</span></div>
      <div className="edu-cert-grid">
        <div>
          <h2 className="sheet-title" style={{ marginBottom: 18, display: 'block' }}>Education</h2>
          {EDUCATION.map((e) => (
            <div className="edu-row" key={e.degree}>
              <div>
                <h4>{e.degree}</h4>
                <span className="edu-sub">{e.school}</span>
              </div>
              <div className="edu-score">{e.score}<small>{e.scoreLabel}</small></div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="sheet-title" style={{ marginBottom: 18, display: 'block' }}>Certificates</h2>
          <ul className="cert-list">
            {CERTIFICATES.map((c) => (
              <li key={c.name}><span className="cname">{c.name}</span><span className="cissuer">{c.issuer}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sheet wrap">
      <div className="sheet-tag"><span className="idx">SHEET 06</span><span className="rev">CONTACT</span></div>
      <div className="contact-panel tick-frame">
        <h2>Let's build something that doesn't fall over.</h2>
        <p>Open to Full Stack Java Developer roles and interesting systems problems — especially the ones nobody wants to own. Reach out and I'll get back to you quickly.</p>
        <div className="contact-links">
          <a href="mailto:gowtham250211@gmail.com"><Icon name="mail" />gowtham250211@gmail.com</a>
          <a href="tel:+919952605003"><Icon name="phone" />9952605003</a>
          <a href="https://linkedin.com/in/gowtham-g299132308" target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
          <a href="https://github.com/gowtham250211-png" target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap">
      <span>© 2026 GOWTHAM G</span>
      <span>DRAWN IN VELLORE, TAMIL NADU</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
