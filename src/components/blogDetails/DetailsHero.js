import React from 'react';
import blogHero from '../../assests/blogDetails/blogDetails.png';

const DetailsHero = () => {
  return (
    <div className='container mx-auto mt-12 lg:mt-20 max-w-7xl'>
      <img src={blogHero} alt='' />
    </div>
  );
};

export default DetailsHero;
