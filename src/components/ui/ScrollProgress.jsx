import React from 'react';
import { useEffect, useState } from 'react';

/** Tracks reading progress; requestAnimationFrame avoids scroll-update overload. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;
    function updateProgress() {
      if (frame != null) return;
      frame = window.requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0);
        frame = null;
      });
    }
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (frame != null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}
