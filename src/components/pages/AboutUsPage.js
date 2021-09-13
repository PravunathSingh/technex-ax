import React from 'react';
import AboutUsHero from '../aboutUs/AboutUsHero';
import AboutMission from '../aboutUs/AboutMission';
import AboutSpecialization from '../aboutUs/AboutSpecialization';
import AboutTeam from '../aboutUs/AboutTeam';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUsHero />
      <AboutMission />
      <AboutSpecialization />
      <AboutTeam />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutUsPage;
