import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal, useActiveSection } from './hooks/useScrollReveal';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import TeachingExperience from './components/TeachingExperience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import SocialLinks from './components/SocialLinks';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const SECTION_IDS = [
  'hero',
  'about',
  'personal-info',
  'education',
  'experience',
  'teaching',
  'projects',
  'publications',
  'skills',
  'soft-skills',
  'certifications',
  'achievements',
  'leadership',
  'social-profiles',
  'hobbies',
  'contact',
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [initialLoading, setInitialLoading] = useState(true);

  // Initialize IntersectionObserver scroll reveals
  useScrollReveal();

  // Active section tracking for navbar highlight
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    // Lightweight initial loader check
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Lightweight Initial Loading Screen */}
      <div className={`initial-loader ${!initialLoading ? 'loaded' : ''}`} aria-hidden={!initialLoading}>
        <div className="loader-spinner" />
        <div className="loader-text">INITIALIZING SYSTEMS...</div>
      </div>

      {/* Global Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections in Logical Sequence */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero personalInfo={portfolioData.personalInfo} />

        {/* 2. About Me */}
        <About aboutData={portfolioData.about} />

        {/* 3. Personal Information */}
        <PersonalInfo personalInfo={portfolioData.personalInfo} />

        {/* 4. Education Timeline (B.Tech, Class XII, Class X) */}
        <Education educationList={portfolioData.education} />

        {/* 5. Professional Work Experience (Transmogrify Global) */}
        <Experience experienceList={portfolioData.experience} />

        {/* 6. Teaching Experience (Part-Time Private Tutoring) */}
        <TeachingExperience teachingList={portfolioData.teachingExperience} />

        {/* 7. Projects Showcase */}
        <Projects projectsList={portfolioData.projects} />

        {/* 8. Research Publications */}
        <Publications publicationsList={portfolioData.publications} />

        {/* 9. Technical Skills */}
        <Skills technicalSkills={portfolioData.technicalSkills} />

        {/* 10. Soft Skills */}
        <SoftSkills softSkillsList={portfolioData.softSkills} />

        {/* 11. Certifications */}
        <Certifications certificationsList={portfolioData.certifications} />

        {/* 12. Achievements */}
        <Achievements achievementsList={portfolioData.achievements} />

        {/* 13. Leadership & Volunteering */}
        <Leadership leadershipList={portfolioData.leadership} />

        {/* 14. Professional Social Profiles */}
        <SocialLinks profilesList={portfolioData.socialProfiles} />

        {/* 15. Hobbies & Interests */}
        <Hobbies hobbiesList={portfolioData.hobbies} />

        {/* 16. Contact Section */}
        <Contact
          contactData={portfolioData.contact}
          personalInfo={portfolioData.personalInfo}
        />
      </main>

      {/* 17. Footer */}
      <Footer personalInfo={portfolioData.personalInfo} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
