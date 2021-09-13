import React from 'react';
import CareersForm from '../careers/CareersForm';
import CareersHero from '../careers/CareersHero';
import OpenPositions from '../careers/OpenPositions';
import Perks from '../careers/Perks';
import Footer from '../Footer';
import Header from '../Header';

const Careers = () => {
  return (
    <>
      <Header />
      <CareersHero />
      <OpenPositions />
      <Perks />
      <CareersForm />
      <Footer />
    </>
  );
};

export default Careers;
