import React from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

const Home: React.FC = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Home;
