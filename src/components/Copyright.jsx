import React from 'react';
import phflag from '../assets/phflag.png';
const Copyright = () => {
  return (
    <div className='flex  py-5 justify-center items-center'>
      <span className='text-sky-500 font-semibold flex flex-col md:flex-row  items-center justify-center'>
        Made from the
        <span>
          <img
            src={phflag}
            alt='flag'
            className='w-10 mx-2'
          />
        </span>
        Philippines with 💖 by TasyoDev!
      </span>
    </div>
  );
};

export default Copyright;
