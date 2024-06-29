import React from 'react';
import BannerSection from './mainComponents/BannerSection';
import AboutSection from './mainComponents/AboutSection';
import StateSection from './mainComponents/StateSection';
import SkillsSection from './SkillsSection';
import ResumeSection from './mainComponents/resumeSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './mainComponents/ServicesSection';
import TestimonialsSection from './mainComponents/TestimonialsSection';
import ContactSection from './mainComponents/ContactSection';

const Main = () => {
    return (
        <main className="main">
            <BannerSection />
            <AboutSection />
            <StateSection />
            <SkillsSection />
            <ResumeSection />
            <PortfolioSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
        </main>

    );
}

export default Main;
