'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExpertiseOverview from '../components/ExpertiseOverview';
import ProjectsSection from '../components/ProjectsSection';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseOverview />
      <ProjectsSection />
      <TechStack />
      <Footer />
    </div>
  );
}