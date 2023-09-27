import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import mjpic from "../assets/mjpic.png";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <div
      className="min-h-[110vh] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <Reveal>
        <motion.section className="text-center max-w-7xl mt-32">
          <h1 className="text-3xl md:text-5xl font-semibold text-sky-500 mb-5">
            Mark Joseph Estacio
          </h1>
          <h2 className="text-xl">Freelance Web Developer</h2>
          <p className="py-5 px-10 max-w-[800px]">
            A passionate, organized, and detail-oriented Front-End Developer with extensive
            experience in maintaining and building responsive and animated web pages to deliver
            exceptional customer experiences. I am adept at contributing to a highly collaborative
            work environment, finding solutions, determining customer satisfaction, and seeking new
            opportunities and challenges that will expand my skill set.
          </p>
          <div className="social-icons gap-2 lg:gap-5 justify-center">
            <a
              href="https://www.facebook.com/shempot1601 "
              target="_blank"
            >
              <BsFacebook
                size={30}
                className="text-blue-600   hover:text-sky-500 duration-500 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/markjosephestacio/"
              target="_blank"
            >
              <BsLinkedin
                size={30}
                className="text-sky-600 hover:text-sky-500 duration-500 cursor-pointer"
              />
            </a>
            <a href="https://github.com/MJEstacio">
              <BsGithub
                size={30}
                className="text-black hover:text-sky-500 duration-500 cursor-pointer"
              />
            </a>
            <a href="mailto:mjestacioiii@gmail.com">
              <AiOutlineMail
                size={30}
                className="text-slate-800 hover:text-sky-500 duration-500 cursor-pointer"
              />
            </a>
          </div>
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
              rotate: 360,
            }}
            transition={{
              type: "spring",
              duration: 5,
              bounce: 0.5,
            }}
            className="w-[200px] h-[200px] bg-gradient-to-b from-sky-500 to-sky-100 flex mx-auto rounded-full overflow-hidden object-contain flex items-center justify-center my-10"
          >
            <img
              src={mjpic}
              alt="mjpic"
            />
          </motion.div>
        </motion.section>
      </Reveal>
    </div>
  );
};

export default Hero;
