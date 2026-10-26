import React from 'react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 550);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <a className={`back-to-top ${visible ? 'is-visible' : ''}`} href="#home"
      aria-label="Back to the top of the page" tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}>
      ↑
    </a>
  );
}
