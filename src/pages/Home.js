import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
// import LoadingSection from '../components/LoadingSection';
// const HeroSection = React.lazy(() => import('../components/HeroSection'));
// const AboutSection = React.lazy(() => import('../components/AboutSection'));
// const ServicesSection = React.lazy(() =>
//   import('../components/ServicesSection')
// );
// const ProjectsSection = React.lazy(() =>
//   import('../components/ProjectsSection')
// );

export default function Home() {
  return (
    <div>
      {/* <Suspense fallback={<LoadingSection />}> */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      {/* </Suspense> */}
    </div>
  );
}
