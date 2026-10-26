import React from 'react';
import Wordmark from './Wordmark';

function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><Wordmark/><span>© {new Date().getFullYear()} Gowtham G. Built with React &amp; curiosity.</span><a href="#home">Back to top ↑</a></div></footer>;
}

export default Footer;
