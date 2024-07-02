// src/components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ghuman&rsquo;s Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
