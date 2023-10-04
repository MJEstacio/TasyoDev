import React from "react";

import { FaHtml5, FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSvelte,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { Reveal } from "./Reveal";
import { animateContainer, item } from "./Animation";
import { motion } from "framer-motion";

const techStack = [
  {
    stack: "HTML",
    icon: (
      <FaHtml5
        size={30}
        className="text-orange-500"
      />
    ),
  },
  {
    stack: "CSS",
    icon: (
      <SiCss3
        size={30}
        className="text-blue-600"
      />
    ),
  },
  {
    stack: "SCSS/Sass",
    icon: (
      <FaSass
        size={30}
        className="text-pink-300"
      />
    ),
  },
  {
    stack: "JavaScript",
    icon: (
      <SiJavascript
        size={30}
        className="text-yellow-300"
      />
    ),
  },
  {
    stack: "TypeScript",
    icon: (
      <SiTypescript
        size={30}
        className="text-blue-600"
      />
    ),
  },
  {
    stack: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        size={30}
        className="text-sky-600"
      />
    ),
  },
  {
    stack: "React",
    icon: (
      <SiReact
        size={30}
        className="text-blue-600 rotate"
      />
    ),
  },
  {
    stack: "NextJs",
    icon: (
      <SiNextdotjs
        size={30}
        className="text-black"
      />
    ),
  },
  {
    stack: "Svelte",
    icon: (
      <SiSvelte
        size={30}
        className="text-orange-600"
      />
    ),
  },
  {
    stack: "NodeJs",
    icon: (
      <IoLogoNodejs
        size={30}
        className="text-green-600"
      />
    ),
  },
];

const Tech = () => {
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <section
      className="tech "
      id="tech"
    >
      <Reveal>
        <h2 className="text-center text-3xl text-white font-semibold">Tech Stack/Frameworks</h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-2 py-10 max-w-[1440px] mx-auto gap-5 text">
          {techStack.map((techs) => {
            return (
              <motion.div
                className={`flex flex-col items-center p-5 border border-2 rounded-md text-gray-800 dark:bg-white ${item}`}
                key={techs.stack}
                variants={item}
              >
                {techs.icon}
                <span>{techs.stack}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </Reveal>
    </section>
  );
};

export default Tech;
