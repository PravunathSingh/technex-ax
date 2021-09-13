import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import BlogCards from './UI/BlogCards';

const Blog = () => {
  return (
    <div className='my-28 font-rubik'>
      <h1 className='mb-10 text-4xl font-bold leading-relaxed text-center lg:mb-24 2xl:text-5xl text-text-primary'>
        Explore Our Blogs
      </h1>

      <BlogCards />

      <div className='container'>
        <Slide>
          <div className='flex justify-center mt-12 mb-20 lg:mt-16 lg:mb-42'>
            <Link to='/blogs'>
              <button className='w-full primary-btn lg:w-auto'>
                Read All Blogs
              </button>
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Blog;
