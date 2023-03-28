import React from 'react';
import MJLogo from '../assets/mjelogo.jpg';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { RiFilePaper2Line } from 'react-icons/ri';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = ({ handleclick }) => {
  const [nav, setNav] = useState(false);
  return (
    <div className='fixed top-0 left-0 w-screen overflow-x-hidden bg-white/80 z-50 px-2'>
      <nav className='max-w-[1440px] mx-auto py-2 flex items-center justify-between'>
        <div className='logo flex items-center gap-2'>
          <img
            src={MJLogo}
            alt='mjlogo'
            className='w-14 rounded-full'
          />
          <span className='text-2xl font-semibold text-sky-500'>
            TasyoDev
          </span>
        </div>
        <ul className='flex gap-5 items-center'>
          <li>
            <BsFillMoonStarsFill
              size={25}
              onClick={handleclick}
              className='cursor-pointer '
            />
          </li>
          <li>
            <a
              href='#'
              className='flex items-center gap-1 bg-gradient-to-r from-sky-500 to-sky-400 px-4 py-2 rounded-xl text-white font-semibold '
            >
              <RiFilePaper2Line />
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
