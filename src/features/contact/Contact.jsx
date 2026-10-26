import React from 'react';
import { useState } from 'react';
import Icon from '../../components/ui/Icon';
import { PROFILE } from '../../data/profile';

/** Clipboard access is secure-context only; email link remains a fallback. */
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyStatus('Email copied!');
    } catch {
      setCopyStatus('Copy unavailable here. Use the email link instead.');
    }
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="shell"><div className="contact-inner">
        <div className="contact-kicker"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
        <h2>Have a role in mind?<br /><span>Let's connect.</span></h2>
        <p>I'm actively exploring entry-level Software Developer, Java Full Stack, React and related software engineering opportunities. Available to join immediately and open to relocation.</p>
        <div className="contact-ctas">
          <a className="button button-primary" href={`mailto:${PROFILE.email}`}>Email me <Icon name="arrow" size={19} /></a>
          <button className="button button-ghost copy-email-button" type="button" onClick={copyEmail}>Copy email <Icon name="copy" size={17} /></button>
          <a className="button button-ghost" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" size={17} /></a>
        </div>
        {copyStatus && <p className="copy-feedback" role="status" aria-live="polite">{copyStatus}</p>}
        <div className="contact-footer">
          <a href={`mailto:${PROFILE.email}`}><Icon name="mail" size={17} />{PROFILE.email}</a>
          <span>Based in Vellore, Tamil Nadu · India</span>
        </div>
      </div></div>
    </section>
  );
}
