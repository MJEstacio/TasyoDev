import React from "react";
import MJLogo from "../assets/mjelogo.jpg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiFilePaper2Line, RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Nav = ({ handleclick, openmodal }) => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen overflow-x-hidden bg-sky-50/80 z-50 px-5 dark:bg-slate-900/90 duration-500">
      <nav className="max-w-[1440px] mx-auto py-2 flex items-center justify-between">
        <a
          href="https://mjestacio.github.io/TasyoDev/"
          className="logo flex items-center gap-2"
        >
          <img
            src={MJLogo}
            alt="mjlogo"
            className="w-14 rounded-full"
          />
          <span className="text-2xl font-semibold text-sky-500">TasyoDev</span>
        </a>
        <ul className=" gap-5 items-center flex">
          <li>
            <a
              href="#"
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#tech"
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300"
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hidden lg:flex font-semibold hover:text-sky-500 duration-300 cursor-pointer"
              onClick={openmodal}
            >
              Let's Talk
            </a>
          </li>
          <li className="relative overflow-hidden">
            <BsFillMoonStarsFill
              size={25}
              onClick={handleclick}
              className="cursor-pointer absolute top-0 left-0 dark:-translate-x-12 duration-300 "
            />
            <BsFillSunFill
              size={25}
              onClick={handleclick}
              className="cursor-pointer top-0 left-0 translate-x-12 dark:translate-x-0 duration-300"
            />
          </li>
          <li className="block lg:hidden ">
            <RiMenu3Line
              size={30}
              onClick={() => setNav(!nav)}
              className="dark:text-white duration-500"
            />
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? " fixed top-0 left-0 bg-black/90 w-full h-full flex justify-end overflow-hidden translate-x-[100%] backdrop:blur-sm overlay "
            : " fixed top-0 left-0 bg-black/90 w-full h-full flex justify-end overflow-hidden overlay"
        }
      >
        <nav
          className={
            !nav
              ? "w-[300px] bg-sky-100 flex justify-center items-center translate-x-[100%] duration-300 relative dark:bg-slate-900"
              : "w-[300px] bg-sky-100 flex justify-center items-center duration-300 relative dark:bg-slate-900"
          }
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 text-sky-500 dark:text-white"
            onClick={() => setNav(!nav)}
          />
          <ul className="flex flex-col gap-5 text-2xl font-semibold text-sky-500 ">
            <li className="duration-200 hover:text-slate-500 cursor-pointer">
              <a href="#hero">Home</a>
            </li>
            <li className="duration-200 hover:text-slate-500 cursor-pointer">
              <a href="#tech">Tech</a>
            </li>
            <li className="duration-200 hover:text-slate-500 cursor-pointer">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="duration-200 hover:text-slate-500 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li>
              <a
                className="duration-200 hover:text-slate-500 cursor-pointer"
                onClick={openmodal}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
