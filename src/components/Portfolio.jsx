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
  const portfolios = [
    {
      title: 'Kati Souza Ministries',
      image: katie,
    },
    {
      title: 'Onetrace',
      image: onetrace,
    },
    {
      title: 'Refers @ SMDC',
      image: smdc,
    },
    {
      title: 'Circle M Meats',
      image: meats,
    },
    {
      title: 'Norms Farms',
      image: norms,
    },
    {
      title: 'Concepstore',
      image: concep,
    },
    {
      title: 'Dragonfly Saas',
      image: dragonfly,
    },
    {
      title: 'The Firm Tech',
      image: firmtech,
    },
  ];

  return (
    <div
      className=' relative  max-w-[1440px] mx-auto my-20  portfolio dark:text-black '
      id='portfolio'
    >
      <span className='backtext '>
        Portfolio
      </span>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0 lg:gap-8 overflow-hidden lg:p-8 p-0'>
        {portfolios.map((proj) => (
          <div
            className='mt-20 rounded-xl portfolio-card hover:scale-110 duration-500'
            key={proj.title}
          >
            <div className='relative img-container overflow-hidden rounded-t-xl'>
              <img
                src={proj.image}
                alt={proj.title}
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
                {proj.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
