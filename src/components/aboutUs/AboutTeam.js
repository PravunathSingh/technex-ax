import React, { useState } from 'react';
import { CustomTab } from '../UI/CustomTabs';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import { Zoom } from 'react-awesome-reveal';

import teamSphere from '../../assests/aboutUsPage/teamSphere.png';
import t1 from '../../assests/aboutUsPage/t1.png';
import t2 from '../../assests/aboutUsPage/t2.png';
import t3 from '../../assests/aboutUsPage/t3.png';
import t4 from '../../assests/aboutUsPage/t4.png';
import t6 from '../../assests/aboutUsPage/t6.png';
import t7 from '../../assests/aboutUsPage/t7.png';
import member from '../../assests/aboutUsPage/member.png';
import roundedGif from '../../assests/rounded-gif.gif';

const AboutTeam = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  const toggleActive1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const toggleActive2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const toggleActive3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const toggleActive4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
    setActive6(false);
  };
  const toggleActive5 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
    setActive6(false);
  };
  const toggleActive6 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(true);
  };

  return (
    <div className='mb-28 font-rubik'>
      <div className='container'>
        <div className='flex items-center mb-8 place-content-center lg:mx-0 '>
          <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
          <div className='text-2xl font-medium md:text-3xl text-text-primary'>
            MEET OUR EXPERTS
          </div>
        </div>
        <h4 className='mb-8 text-lg font-medium text-center lg:mb-0 md:text-xl text-text-secondary-light'>
          The team that makes us{' '}
          <span className='text-text-brand'> worthy</span>
        </h4>
      </div>

      <div className='grid lg:grid-cols-3'>
        <div className='relative hidden w-max lg:block'>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 top-12 left-60'
            onClick={toggleActive1}
          >
            <img src={t1} alt='' />
          </div>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 top-48 left-90'
            onClick={toggleActive2}
          >
            <img src={t2} alt='' />
          </div>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 -right-8 top-80'
            onClick={toggleActive3}
          >
            <img src={t3} alt='' />
          </div>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 -right-3 top-110'
            onClick={toggleActive4}
          >
            <img src={t4} alt='' />
          </div>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 bottom-28 right-12'
            onClick={toggleActive5}
          >
            <img src={t6} alt='' />
          </div>
          <div
            className='absolute transition-all duration-200 rounded-full cursor-pointer hover:shadow-shadow-brand-accordion hover:-translate-y-2 bottom-2 right-40'
            onClick={toggleActive6}
          >
            <img src={t7} alt='' />
          </div>
          <img src={teamSphere} alt='' />
        </div>

        <div className='block lg:hidden'>
          <Tabs>
            <TabList>
              <div className='container flex flex-wrap justify-center gap-8 mb-8'>
                <CustomTab>
                  <img
                    src={t1}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
                <CustomTab>
                  <img
                    src={t2}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
                <CustomTab>
                  <img
                    src={t3}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
                <CustomTab>
                  <img
                    src={t4}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
                <CustomTab>
                  <img
                    src={t6}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
                <CustomTab>
                  <img
                    src={t7}
                    alt=''
                    className='transition-all duration-500 hover:cursor-pointer hover:rotate-360'
                  />
                </CustomTab>
              </div>
            </TabList>

            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            Johnathan Doe
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Senior Software Engineer
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            Johnathan Doe
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Software Engineer
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            Lorem ipsum dolor
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Senior HR Manager
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            Johnathan Doe
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Design Manager
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            Johnny Doe
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Software Engineer
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
            <TabPanel>
              <Zoom>
                <div className='container grid place-content-center'>
                  <div className='grid'>
                    <div className='h-max'>
                      <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                        <img src={member} alt='' className='w-full' />

                        <div className='px-5 py-3'>
                          <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                            John Doe
                          </h1>
                          <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                            Senior Systems Engineer
                          </h6>

                          <div className='flex justify-center gap-10 mb-6 '>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                            <div className='rounded-full'>
                              <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </TabPanel>
          </Tabs>
        </div>

        <div className='container hidden lg:grid place-content-center'>
          <div className={active1 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        John Doe
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Senior Software Engineer
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className={active2 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        Johnathan Doe
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Software Engineer
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className={active3 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        Jane Doe
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Senior Cloud Architect
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className={active4 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        Richard Smith
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Senior HR Manager
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className={active5 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        Shane Warne
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Senior UX Designer
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className={active6 ? 'block' : 'hidden'}>
            <Zoom>
              <div className='grid'>
                <div className='h-max'>
                  <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
                    <img src={member} alt='' className='w-full' />

                    <div className='px-5 py-3'>
                      <h1 className='text-2xl font-semibold text-center md:text-3xl text-text-primary'>
                        John Doe
                      </h1>
                      <h6 className='my-4 text-lg text-center md:my-8 md:text-xl text-text-primary'>
                        Sales Lead
                      </h6>

                      <div className='flex justify-center gap-10 mb-6 '>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-linkedin fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-facebook fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                        <div className='rounded-full'>
                          <i className='transition-all duration-500 cursor-pointer fab fa-instagram fa-2x text-text-brand hover:rotate-360'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>

        <div className='relative hidden lg:block'>
          <img src={roundedGif} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
