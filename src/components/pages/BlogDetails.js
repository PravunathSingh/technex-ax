import React from 'react';
import Details from '../blogDetails/Details';
import DetailsHero from '../blogDetails/DetailsHero';
import Header from '../Header';
import Reviews from '../blogDetails/Reviews';
import Footer from '../Footer';

const BlogDetails = () => {
  return (
    <>
      <Header />
      <DetailsHero />
      <Details />
      <Reviews />
      <Footer />
    </>
  );
};

export default BlogDetails;
