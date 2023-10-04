import React from "react";
import footersvg from "../assets/footer.svg";
import mjelogo from "../assets/mjelogo.jpg";
import { BsFacebook, BsWhatsapp, BsTelegram } from "react-icons/bs";

import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-500 to-sky-300 py-20 dark:text-slate-800">
      <div className="max-w-[1440px] mx-auto flex justify-between flex-col md:flex-row">
        <div className="flex relative p-10 basis-[50%]">
          <div className="flex flex-col justify-center items-center mx-auto  relative z-10 ">
            <img
              src={mjelogo}
              alt="mjelogo"
              className="w-20 rounded-full"
            />
            <span className="text-2xl font-semibold text-white">TasyoDev</span>
          </div>
        </div>
        <div className="flex basis-full justify-around flex-col sm:flex-row">
          <div className="flex flex-col gap-3 justify-center p-10 relative z-10 ">
            <div className="flex items-center gap-4 relative z-10">
              <MdEmail size={25} />
              <span>mjestacioiii@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <BsWhatsapp size={25} />
              <span>+639653458348</span>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <BsTelegram size={25} />
              <span>@MJEstacio</span>
            </div>
          </div>
          <div className="flex flex-col px-20 py-10 gap-5 relative z-10">
            <a href="#">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#tech">Tech</a>
            <a href="#services">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
