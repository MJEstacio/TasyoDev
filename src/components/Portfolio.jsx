import React from 'react';
import katie from '../assets/katie2.jpg';
import onetrace from '../assets/onetrace4.jpg';
import smdc from '../assets/refersmdc4.jpg';
import meats from '../assets/meats4.jpg';
import norms from '../assets/norms.jpg';
import concep from '../assets/concepstore3.jpg';
import dragonfly from '../assets/dragonfly1.jpg';
import firmtech from '../assets/thefirmtech1.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';
const Portfolio = () => {
  return (
    <div
      className='px-5 relative grid grid-cols-1 lg:grid-cols-2  max-w-[1440px] mx-auto my-20 gap-5 portfolio dark:text-black'
      id='portfolio'
    >
      <span className='backtext'>
        Portfolio
      </span>
      <div className='mt-24 rounded-xl portfolio-card'>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={katie}
            alt='katie image'
          />
          <a
            href='https://katiesouza.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Katie Souza Ministries
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={onetrace}
            alt='katie image'
          />
          <a
            href='https://onetrace.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Onetrace
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={smdc}
            alt='katie image'
          />
          <a
            href='https://refer.smdc.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Refers @ SMDC
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={meats}
            alt='katie image'
          />
          <a
            href='https://circlemmeats.wpengine.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Circle M Meats
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={norms}
            alt='katie image'
          />
          <a
            href='https://normsfarms.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Norms Farms
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={concep}
            alt='katie image'
          />
          <a
            href='https://concepstore.com/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            ConcepStore
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={dragonfly}
            alt='katie image'
          />
          <a
            href='https://mjestacio-dragonflysaas.netlify.app/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            Dragonfly Saas
          </span>
        </div>
      </div>
      <div className='mt-24 rounded-xl portfolio-card '>
        <div className='relative img-container overflow-hidden rounded-t-xl'>
          <img
            src={firmtech}
            alt='katie image'
          />
          <a
            href='https://mjestacio.github.io/The-Firmtech/'
            target='_blank'
          >
            <div className='overlay'>
              <FaExternalLinkAlt className='text-sky-200 text-4xl' />
            </div>
          </a>
        </div>
        <div className='text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3'>
          <span className='font-semibold text-xl '>
            The Firmtech
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
