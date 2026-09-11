import UIElements from '../components/UIElements';
import Offcanvas from '../components/Offcanvas';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceSection from '../components/ExperienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BrandsSection from '../components/BrandsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <UIElements />
      <Offcanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ExperienceSection />
          <TestimonialsSection />
          <BrandsSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
