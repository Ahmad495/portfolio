import Contact from '../components/landingPage/Contact';
import HireMe from '../components/landingPage/HIreMe';
import Hero from '../components/landingPage/Hero';
import Intro from '../components/landingPage/Intro';
import Project from '../components/landingPage/Project';
import Skill from '../components/landingPage/Skill';
import Footer from '../layout/Footer';

export default function Landing() {
  return (
    <section style={{ overflow: 'hidden' }}>
      <Hero />
      <Intro />
      <Skill />
      <Project />
      <Contact />
      <HireMe />
      <Footer />
    </section>
  );
}
