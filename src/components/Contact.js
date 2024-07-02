// src/components/Contact.js
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
