import React from 'react';
import footersvg from '../assets/footer.svg';
import mjelogo from '../assets/mjelogo.jpg';
import {
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsGithub,
  BsTelegram,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <div className=''>
      <img
        src={footersvg}
        alt=''
      />
      <div className='grid grid-cols-1 mx-auto lg:grid-cols-3 justify-center bg-sky-500 py-10 gap-5 '>
        <div className='flex flex-col justify-center items-center mx-auto max-w-[1440px]'>
          <img
            src={mjelogo}
            alt='mjelogo'
            className='w-20 rounded-full'
          />
          <span className='text-2xl font-semibold text-white'>
            TasyoDev
          </span>
        </div>
        <div className='flex flex-col gap-3 justify-center px-10 '>
          <div className='flex items-center gap-4'>
            <MdEmail size={25} />
            <span>
              mjestacioiii@gmail.com
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <BsWhatsapp size={25} />
            <span>+639205010266</span>
          </div>
          <div className='flex items-center gap-4'>
            <BsTelegram size={25} />
            <span>@MJEstacio</span>
          </div>
        </div>
        <div className='flex flex-col px-10 gap-5'>
          <a href='#'>Home</a>
          <a href='#portfolio'>
            Portfolio
          </a>
          <a href='#tech'>Tech</a>
          <a href='#services'>
            Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
