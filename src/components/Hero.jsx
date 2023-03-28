import React from 'react';
import {
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsGithub,
  BsTelegram,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import mjpic from '../assets/mjpic.png';

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <section className='text-center max-w-[1440px] mt-32'>
        <h1 className='text-3xl font-semibold text-sky-500'>
          Mark Joseph Estacio
        </h1>
        <h2 className='text-xl'>
          Freelance Web Developer
        </h2>
        <p className='py-5 px-10 '>
          A passionate, organized, and
          detail-oriented Front-End
          Developer with extensive
          experience in maintaining and
          building responsive and
          animated web pages to deliver
          exceptional customer
          experiences. I am adept at
          contributing to a highly
          collaborative work
          environment, finding
          solutions, determining
          customer satisfaction, and
          seeking new opportunities and
          challenges that will expand my
          skill set.
        </p>
        <div className='social-icons gap-2 lg:gap-5 justify-center'>
          <a
            href='https://www.facebook.com/shempot1601 '
            target='_blank'
          >
            <BsFacebook
              size={30}
              className='text-sky-500 hover:text-sky-700 duration-500 cursor-pointer'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/markjosephestacio/'
            target='_blank'
          >
            <BsLinkedin
              size={30}
              className='text-sky-500 hover:text-sky-700 duration-500 cursor-pointer'
            />
          </a>
          <a href='https://github.com/MJEstacio/MJEWebsite'>
            <BsGithub
              size={30}
              className='text-sky-500 hover:text-sky-700 duration-500 cursor-pointer'
            />
          </a>
          <a href='mailto:mjestacioiii@gmail.com'>
            <MdEmail
              size={30}
              className='text-sky-500 hover:text-sky-700 duration-500 cursor-pointer'
            />
          </a>
        </div>
        <div className='w-[200px] h-[200px] bg-gradient-to-b from-sky-500 to-sky-100 flex mx-auto rounded-full overflow-hidden object-contain flex items-center justify-center my-10'>
          <img
            src={mjpic}
            alt='mjpic'
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
