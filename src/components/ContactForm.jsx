import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { AiOutlineClose } from 'react-icons/ai';
const ContactForm = ({ openmodal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x6nkrpl',
        'template_yk833t7',
        form.current,
        'wPKSwijrx1j8QuwmD',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <div className='w-full h-full duration-300 bg-black/90 fixed top-0 left-0 z-[600] flex justify-center items-center '>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='w-[300px] lg:w-[600px] bg-white flex flex-col p-5 rounded-md  border border-sky-500 border-2 shadow-sm shadow shadow-sky-500 relative'
        >
          <AiOutlineClose
            onClick={openmodal}
            size={35}
            className='absolute top-5 right-5 cursor-pointer'
          />
          <span className='text-center font-semibold mt-5 text-2xl mb-5'>
            Let's{' '}
            <span className='text-sky-500'>
              Talk
            </span>
          </span>

          <label>Name</label>
          <input
            type='text'
            name='user_name'
            className='border bg-gray-100'
            placeholder='Your Name'
            required
          />
          <label>Email</label>
          <input
            type='email'
            name='user_email'
            className='border bg-gray-100'
            placeholder='Your Email'
            required
          />
          <label>Message</label>
          <textarea
            name='message'
            className='h-[200px] border p-2 bg-gray-100'
            placeholder='Your Message...'
            required
          ></textarea>
          <input
            type='submit'
            value='Send'
            className='mt-5 border rounded-md bg-sky-400 text-white cursor-pointer duration-200 hover:bg-sky-500 font-semibold'
          />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
