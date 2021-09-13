import React from 'react';
import contact from '../../assests/contact/contactCircle.png';
import fb from '../../assests/contact/fb.png';
import li from '../../assests/contact/li.png';
import twitter from '../../assests/contact/twitter.png';
import insta from '../../assests/contact/insta.png';

const ContactIcons = () => {
  return (
    <div className='relative hidden lg:block'>
      <img src={contact} alt='' />
      <div className='absolute duration-500 cursor-pointer hover:rotate-360 left-48 top-8'>
        <img src={fb} alt='' />
      </div>
      <div className='absolute duration-500 cursor-pointer hover:rotate-360 left-72 top-48'>
        <img src={li} alt='' />
      </div>
      <div className='absolute duration-500 cursor-pointer hover:rotate-360 left-64 top-96'>
        <img src={insta} alt='' />
      </div>
      <div className='absolute duration-500 cursor-pointer hover:rotate-360 left-28 top-120'>
        <img src={twitter} alt='' />
      </div>
    </div>
  );
};

export default ContactIcons;
