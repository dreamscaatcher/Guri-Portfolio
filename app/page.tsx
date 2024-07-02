// pages/page.tsx
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function Home() {
  return (

    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer/>
      
    </div>
  );
}
