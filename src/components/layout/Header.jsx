import React from 'react';
import { useState, useEffect } from 'react';
import Icon from '../ui/Icon';
import Wordmark from './Wordmark';
import { NAV } from '../../data/navigation';
import { PROFILE } from '../../data/profile';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = event => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);
  return <header className="site-header">
    <div className="shell header-inner">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Primary navigation">{NAV.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
      <a className="header-contact" href={`mailto:${PROFILE.email}`}>Let's talk <Icon name="arrow" size={15}/></a>
      <button type="button" className="mobile-menu-trigger" onClick={() => setMenuOpen(o => !o)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}><Icon name={menuOpen ? 'close' : 'menu'} size={22}/></button>
    </div>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="mailto:gowtham250211@gmail.com" onClick={() => setMenuOpen(false)}>Let's talk</a></nav>}
  </header>;
}

export default Header;
