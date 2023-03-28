import React from 'react';
import {
  BsCodeSlash,
  BsMegaphone,
  BsLayoutTextSidebarReverse,
} from 'react-icons/bs';
import { MdWeb } from 'react-icons/md';
import { GiShop } from 'react-icons/gi';
import { ImPencil2 } from 'react-icons/im';

const Services = () => {
  return (
    <div
      className='relative flex max-w-[1440px] mx-auto px-2 '
      id='services'
    >
      <span className='backtext  '>
        Services
      </span>
      <div className='grid grid-cols-1 lg:grid-cols-3 my-20 gap-5 text-center'>
        <div className='service-card'>
          <BsCodeSlash
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            Web Applications & Systems
          </span>
          <p>
            I'll make sure your company
            functions in the most
            efficient way as possible as
            I will be building Web Apps
            and Systems that are tailor
            fit to your day to day
            needs.
          </p>
        </div>
        <div className='service-card'>
          <GiShop
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            E-Commerce & Marketing
            Websites
          </span>
          <p>
            I can curate and build your
            online presence and help you
            make a mark in the industry.
          </p>
        </div>
        <div className='service-card'>
          <MdWeb
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            UI / UX Design
          </span>
          <p>
            I will provide designs that
            not only looks good
            visually, but also
            communicates to its clients.
          </p>
        </div>
        <div className='service-card'>
          <ImPencil2
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            Logo Design & Branding
          </span>
          <p>
            Samples will show you the
            feeling on how to play
            around using the components
            in the website building
            process.
          </p>
        </div>
        <div className='service-card'>
          <BsMegaphone
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            Digital Marketing
          </span>
          <p>
            You can decide whether to
            create your site using UI
            Kit blocks or samples. The
            blocks can merge together in
            various combinations.
          </p>
        </div>
        <div className='service-card'>
          <BsLayoutTextSidebarReverse
            size={40}
            className='text-sky-500 mt-5'
          />
          <span className='mb-4 font-semibold text-xl'>
            Tech Consultations &
            Operations Management
          </span>
          <p>
            You can decide whether to
            create your site using UI
            Kit blocks or samples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
