import React, { useState } from 'react';
// import { TabPage } from './Tabs';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import { Slide, Zoom } from 'react-awesome-reveal';
import careersLeft from '../../assests/careersPage/careersLeft.png';
import careersRight from '../../assests/careersPage/careersRight.png';
import reactIcon from '../../assests/careersPage/reactIcon.png';
import laravelIcon from '../../assests/careersPage/laravelIcon.png';
import cssIcon from '../../assests/careersPage/cssIcon.png';
import htmlIcon from '../../assests/careersPage/htmlIcon.png';
import sqlIcon from '../../assests/careersPage/sqlIcon.png';
import phpIcon from '../../assests/careersPage/phpIcon.png';
import flutterIcon from '../../assests/careersPage/flutterIcon.png';
import andIcon from '../../assests/careersPage/andIcon.png';
import CareerCard from '../UI/CareerCard';
import CareersTab from './CareersTab';

const OpenPositions = () => {
  const [allJobs, setAllJobs] = useState(true);
  const [fre, setFre] = useState(false);
  const [bce, setBce] = useState(false);
  const [appDev, setAppDev] = useState(false);

  const all = () => {
    setAllJobs(true);
    setFre(false);
    setBce(false);
    setAppDev(false);
  };
  const frontend = () => {
    setAllJobs(false);
    setFre(true);
    setBce(false);
    setAppDev(false);
  };
  const backend = () => {
    setAllJobs(false);
    setFre(false);
    setBce(true);
    setAppDev(false);
  };
  const app = () => {
    setAllJobs(false);
    setFre(false);
    setBce(false);
    setAppDev(true);
  };

  return (
    <div className='mb-20 font-rubik md:mb-24 lg:mb-40'>
      <div className='container max-w-5xl'>
        <Slide>
          <h1 className='text-4xl font-semibold leading-relaxed text-center text-text-secondary'>
            We’d Love To Work With Someone Like You !
          </h1>
        </Slide>
        <Zoom>
          <p className='my-8 text-lg font-normal leading-relaxed text-center lg:leading-relaxed md:my-16 lg:mt-16 lg:mb-28 text-text-secondary-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            distinctio minus corrupti fugiat est nesciunt odit ipsam facilis
            excepturi molestias ipsum veritatis cupiditate, eaque maxime nemo
            quaerat assumenda labore
          </p>
        </Zoom>
      </div>

      <div className='grid lg:grid-cols-4'>
        <div className='hidden h-max lg:block'>
          <div className='relative '>
            <div className='absolute transition-all duration-700 top-20 hover:rotate-360 left-44'>
              <img src={reactIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 top-1/3 hover:rotate-360 left-60'>
              <img src={laravelIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 top-90 hover:rotate-360 left-56'>
              <img src={htmlIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 bottom-12 hover:rotate-360 left-36'>
              <img src={cssIcon} alt='' />
            </div>
            <img src={careersLeft} alt='' />
          </div>
        </div>

        <div className='w-full col-span-2 px-12 lg:px-0'>
          <Slide>
            <div>
              <Tabs>
                <TabList>
                  <div className='flex flex-wrap justify-center gap-6 py-4 sm:justify-between'>
                    <CareersTab selected={allJobs} onClick={all}>
                      All Jobs
                    </CareersTab>
                    <CareersTab selected={fre} onClick={frontend}>
                      Frontend
                    </CareersTab>
                    <CareersTab selected={bce} onClick={backend}>
                      Backend
                    </CareersTab>
                    <CareersTab selected={appDev} onClick={app}>
                      App Development
                    </CareersTab>
                  </div>
                </TabList>

                <TabPanel>
                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>

                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>

                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>
                </TabPanel>

                <TabPanel>
                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>
                </TabPanel>

                <TabPanel>
                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>

                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>
                </TabPanel>

                <TabPanel>
                  <Zoom>
                    <CareerCard
                      title='Senior Software Engineer'
                      tech='Node, React, HTML, CSS'
                      exp='2 - 3 Years'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
                    />
                  </Zoom>
                </TabPanel>
              </Tabs>

              {/* <div className='border-b-4 cursor-pointer border-text-brand'>
                <h1 className='text-xl font-semibold text-center transition-all duration-150 lg:text-2xl text-text-secondary hover:text-text-brand'>
                  All Jobs
                </h1>
              </div>
              <div className='cursor-pointer'>
                <h1 className='text-xl font-semibold text-center transition-all duration-150 lg:text-2xl hover:text-text-brand text-text-secondary'>
                  Frontend
                </h1>
              </div>
              <div className='cursor-pointer'>
                <h1 className='text-xl font-semibold text-center transition-all duration-150 lg:text-2xl hover:text-text-brand text-text-secondary'>
                  Backend
                </h1>
              </div>
              <div className='cursor-pointer'>
                <h1 className='text-xl font-semibold text-center transition-all duration-150 lg:text-2xl hover:text-text-brand text-text-secondary'>
                  Application Devlopment
                </h1>
              </div> */}

              {/* <TabPage /> */}
            </div>
          </Slide>

          {/* <Zoom>
            <CareerCard
              title='Senior Software Engineer'
              tech='Node, React, HTML, CSS'
              exp='2 - 3 Years'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
            />
          </Zoom>

          <Zoom>
            <CareerCard
              title='Senior Software Engineer'
              tech='Node, React, HTML, CSS'
              exp='2 - 3 Years'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
            />
          </Zoom>

          <Zoom>
            <CareerCard
              title='Senior Software Engineer'
              tech='Node, React, HTML, CSS'
              exp='2 - 3 Years'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
            />
          </Zoom> */}
        </div>

        <div className='hidden h-max mt-72 lg:block'>
          <div className='relative ml-auto w-max'>
            <div className='absolute transition-all duration-700 top-16 hover:rotate-360 right-32'>
              <img src={phpIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 top-1/3 hover:rotate-360 -left-8'>
              <img src={andIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 top-90 hover:rotate-360 -left-6'>
              <img src={flutterIcon} alt='' />
            </div>
            <div className='absolute transition-all duration-700 bottom-12 hover:rotate-360 left-10'>
              <img src={sqlIcon} alt='' />
            </div>
            <img src={careersRight} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
