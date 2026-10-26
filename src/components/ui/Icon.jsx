import React from 'react';
function Icon({ name, size = 18, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h6v6"/><path d="M20 5 10 15"/><path d="M19 14v5H5V5h5"/></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-2.7"/><path d="M9 22v-3.7c-3.9.6-7-1.7-7-6.7 0-1.4.5-2.8 1.4-3.8C3 6.6 3 5.3 3.5 4c1.6-.1 2.7.5 4 1.4a14 14 0 0 1 9 0c1.3-.9 2.4-1.5 4-1.4.5 1.3.5 2.6.1 3.8.9 1 1.4 2.4 1.4 3.8 0 5-3.1 7.3-7 6.7V22"/></>,
    linkedin: <><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="4.5" r="1.5"/><path d="M11 21V9h4v2c.8-1.4 2-2.3 4-2.3 3 0 4 2 4 5V21h-4v-7c0-2.2-1-2.6-2-2.6-1.6 0-2 1.2-2 2.6v7"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M4 17v4h16v-4"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M5 5 19 19M19 5 5 19"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-6 3 4-16"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

export default Icon;
