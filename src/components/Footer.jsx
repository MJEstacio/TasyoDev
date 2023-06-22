import React from 'react';
import footersvg from '../assets/footer.svg';
import mjelogo from '../assets/mjelogo.jpg';
import { BsFacebook, BsWhatsapp, BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 mx-auto lg:grid-cols-3 justify-center bg-blue-700 py-40 gap-5 relative'>
        <div className='flex flex-col justify-center items-center mx-auto max-w-[1440px] relative z-10'>
          <img src={mjelogo} alt='mjelogo' className='w-20 rounded-full' />
          <span className='text-2xl font-semibold text-white'>TasyoDev</span>
        </div>
        <div className='flex flex-col gap-3 justify-center px-10 relative z-10 '>
          <div className='flex items-center gap-4 relative z-10'>
            <MdEmail size={25} />
            <span>mjestacioiii@gmail.com</span>
          </div>
          <div className='flex items-center gap-4 relative z-10'>
            <BsWhatsapp size={25} />
            <span>+639205010266</span>
          </div>
          <div className='flex items-center gap-4 relative z-10'>
            <BsTelegram size={25} />
            <span>@MJEstacio</span>
          </div>
        </div>
        <div className='flex flex-col px-10 gap-5 relative z-10'>
          <a href='#'>Home</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#tech'>Tech</a>
          <a href='#services'>Services</a>
        </div>
        <img src={footersvg} alt='' className='absolute bottom-0 left-0' />
      </div>
    </div>
  );
};

export default Footer;
