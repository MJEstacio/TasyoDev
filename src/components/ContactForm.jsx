import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookMessenger, FaViber, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
const ContactForm = ({ openmodal }) => {
  const messenger = [
    {
      app: "Facebook",
      link: "https://m.me/shempot1601",
      icon: <FaFacebookMessenger className="w-10 h-10 text-sky-400 mx-auto mb-2" />,
    },
    {
      app: "WhatsApp",
      link: "https://wa.me/+639653458348",
      icon: <FaWhatsappSquare className="w-10 h-10 text-green-500 mx-auto mb-2" />,
    },
    {
      app: "Telegram",
      link: "https://t.me/+5tfgZm6rdoowYzFl",
      icon: <FaTelegram className="w-10 h-10 text-sky-500 mx-auto mb-2" />,
    },
    {
      app: "Viber",
      link: "viber://chat?number=012345678901",
      icon: <FaViber className="w-10 h-10 text-purple-500 mx-auto mb-2" />,
    },
  ];
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_x6nkrpl', 'template_yk833t7', form.current, 'wPKSwijrx1j8QuwmD').then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     },
  //   );
  // };

  return (
    <>
      <div
        className={
          openmodal
            ? "w-full h-full duration-300 bg-black/90  fixed top-0 left-0 z-[600] opacity-100 translate-x-0 flex justify-center items-center text-black backdrop:blur-sm"
            : "w-full h-full duration-300 bg-black/90  fixed top-0 translate-x-full left-0 z-[600] opacity-0 flex justify-center items-center text-black backdrop:blur-sm"
        }
        onClick={openmodal}
      >
        <div className="max-w-5xl bg-white flex flex-col p-10 mx-5 rounded-md   border-sky-500 border-2  shadow shadow-sky-500 relative text">
          <AiOutlineClose
            onClick={openmodal}
            size={35}
            className="absolute top-5 right-5 cursor-pointer"
          />
          <h2 className="font-semibold text-2xl text-center">
            Let's <span className="text-sky-500">Talk</span>
          </h2>
          <div>
            <div className="mx-auto w-16 h-1 bg-sky-500 my-5 rounded-md"></div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5  justify-center my-5">
              {messenger.map((m) => (
                <div key={m.app}>
                  <a
                    href={m.link}
                    target="_blank"
                  >
                    {m.icon}
                    <h3 className="text-center">{m.app}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <form
          ref={form}
          onSubmit={sendEmail}
          className='w-[300px] lg:w-[600px] bg-white flex flex-col p-5 rounded-md  border border-sky-500 border-2 shadow-sm shadow shadow-sky-500 relative'>
          <AiOutlineClose
            onClick={openmodal}
            size={35}
            className='absolute top-5 right-5 cursor-pointer'
          />
          <span className='text-center font-semibold mt-5 text-2xl mb-5'>
            Let's <span className='text-sky-500'>Talk</span>
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
            required></textarea>
          <input
            type='submit'
            value='Send'
            className='mt-5 border rounded-md bg-sky-400 text-white cursor-pointer duration-200 hover:bg-sky-500 font-semibold'
          />
        </form> */}
      </div>
    </>
  );
};

export default ContactForm;
