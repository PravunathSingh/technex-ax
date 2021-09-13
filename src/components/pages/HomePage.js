import React from 'react';
import Header from '../Header';
import AboutUs from '../AboutUs';
import Services from '../Services';
import Projects from '../Projects';
import Testimonials from '../Testimonials';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';
import Hero from '../Hero';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
