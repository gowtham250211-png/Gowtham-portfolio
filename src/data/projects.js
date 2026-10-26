export const PROJECTS = [
  {
    id: '01', slug: 'eptms', category: 'Full stack', kind: 'eptms',
    eyebrow: 'ENTERPRISE APP · FEATURED', title: 'Employee Performance & Task Management',
    summary: 'A role-aware workplace platform that connects teams, tasks, leave approvals, and performance in one place.',
    points: ['Four access levels: Admin, Manager, Team Leader, Employee', 'JWT authentication, Spring Security and audit logging', 'Kanban-based task workflow and performance tracking'],
    tags: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/gowtham250211-png/EPTMS-platform',
  },
  {
    id: '02', slug: 'logistics', category: 'Full stack', kind: 'logistics',
    eyebrow: 'AUTOMATION · FEATURED', title: 'Self-Healing Logistics System',
    summary: 'A logistics application that monitors shipment problems and triggers recovery workflows when disruptions are detected.',
    points: ['Scheduled monitoring for delayed or failed shipments', 'Recovery logic for alternative routing and backup vehicles', 'React dashboard integrated with Spring Boot REST APIs'],
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    repo: 'https://github.com/gowtham250211-png/self-healing-logistic-system',
  },
  {
    id: '03', slug: 'estateflow', category: 'Full stack', kind: 'estateflow',
    eyebrow: 'CRM PLATFORM · FEATURED', title: 'EstateFlow CRM',
    summary: 'A real estate CRM for managing leads, sales follow-ups, inventory, and property booking workflows.',
    points: ['Lead and property management with role-based access', 'Booking flow designed to prevent duplicate reservations', 'Deployed frontend and backend with PostgreSQL storage'],
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/gowtham250211-png/Estateflow-crm',
    live: 'https://estateflow-crm-one.vercel.app/',
  },
];

export const MINI_PROJECTS = [
  { id: '04', title: 'Weather API', subtitle: 'Weather data, presented clearly.', type: 'Frontend', stack: 'React · API integration', url: 'https://github.com/gowtham250211-png/Weather_Api' },
  { id: '05', title: 'QR Code Generator', subtitle: 'Turn text and links into scannable codes.', type: 'Frontend', stack: 'React · JavaScript', url: 'https://github.com/gowtham250211-png/QR_code' },
  { id: '06', title: 'BMI Calculator', subtitle: 'Simple inputs. Immediate calculations.', type: 'Frontend', stack: 'React · JavaScript', url: 'https://github.com/gowtham250211-png/BMI-calculator' },
  { id: '07', title: 'Quotes', subtitle: 'A lightweight interactive quotes app.', type: 'Frontend', stack: 'React · JavaScript', url: 'https://github.com/gowtham250211-png/Quotes' },
];
