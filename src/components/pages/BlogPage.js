import React from 'react';
import BlogBtn from '../blogs/BlogBtn';
import BlogHeader from '../blogs/BlogHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import BlogCards from '../UI/BlogCards';

const BlogPage = () => {
  return (
    <>
      <BlogHeader />
      <BlogCards />
      <BlogCards />
      <BlogBtn />
      <Contact />
      <Footer />
    </>
  );
};

export default BlogPage;
