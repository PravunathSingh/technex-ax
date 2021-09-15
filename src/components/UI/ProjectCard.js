import React from 'react';

const ProjectCard = ({ src, title, stack }) => {
  return (
    <div className='h-max'>
      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
        <div>
          <img src={src} alt='' className='w-full' />
        </div>
        <div class='p-6 h-auto'>
          <h2 className='mb-6 text-3xl font-semibold leading-relaxed text-center xl:leading-relaxed t md:mb-6 text-text-primary xl:text-4xl'>
            {title}
          </h2>

          <p className='mb-8 text-base font-normal text-center md:mb-12 text-text-secondary-light md:text-lg xl:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus sit
            amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut purus sit amet luctus venenatis
          </p>

          <div className='flex justify-center mb-6'>
            <img src={stack} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
