import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import ProjectCard from '../UI/ProjectCard';
import projectImg1 from '../../assests/ourWork/projectImg1.png';
import projectImg2 from '../../assests/ourWork/projectImg2.png';
import projectImg3 from '../../assests/ourWork/projectImg3.png';
import techStack from '../../assests/projects/tech-stack.png';

const WorkSection = () => {
  return (
    <div className='container grid gap-12 mb-32 font-rubik place-content-center place-items-center 2xl:gap-24 md:grid-cols-2 lg:grid-cols-3'>
      <Zoom>
        <ProjectCard
          src={projectImg1}
          title='E-Commerce Website'
          stack={techStack}
        />
      </Zoom>
      <Zoom>
        <div className='lg:mt-40'>
          <ProjectCard src={projectImg2} title='Boozimba' stack={techStack} />
        </div>
      </Zoom>
      <Zoom>
        <ProjectCard src={projectImg3} title='BriCabin' stack={techStack} />
      </Zoom>
    </div>
  );
};

export default WorkSection;
