import Navigation from './app/components/Header';
import HeroSection from './app/components/Hero_Section1';
import { HashRouter } from 'react-router-dom';
import Hero_Section2 from './app/components/Hero_section2';
import Hero_Section3 from './app/components/Hero_Section3';

const Page = () => {
  return (
    <HashRouter>
      <Navigation />
      <HeroSection />
      <Hero_Section2 />
      <Hero_Section3 />
    </HashRouter>
  );
};

export default Page;
