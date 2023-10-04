import React from "react";
import katie from "../assets/katie2.jpg";
import onetrace from "../assets/onetrace4.jpg";
import smdc from "../assets/refersmdc4.jpg";
import meats from "../assets/meats4.jpg";
import norms from "../assets/norms.jpg";
import concep from "../assets/concepstore3.jpg";
import dragonfly from "../assets/dragonfly1.jpg";
import firmtech from "../assets/thefirmtech1.jpg";
import clickhost from "../assets/clickhost.jpg";
import tairi from "../assets/tairihome.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { animateContainer, item } from "./Animation";
const Portfolio = () => {
  const portfolios = [
    {
      title: "Tairi.co",
      image: tairi,
      link: "https://tairi.co/",
    },
    {
      title: "Clickhost Australia",
      image: clickhost,
      link: "https://clickhost.com.au/",
    },
    {
      title: "Kati Souza Ministries",
      image: katie,
      link: "https://katiesouza.com/",
    },
    {
      title: "Onetrace",
      image: onetrace,
      link: "https://onetrace.com/",
    },
    {
      title: "Refers @ SMDC",
      image: smdc,
      link: "https://refer.smdc.com/",
    },
    {
      title: "Circle M Meats",
      image: meats,
      link: "https://circlemmeats.wpengine.com/",
    },
    {
      title: "Norms Farms",
      image: norms,
      link: "https://normsfarms.com/",
    },
    {
      title: "Concepstore",
      image: concep,
      link: "https://concepstore.com/",
    },
    {
      title: "Dragonfly Saas",
      image: dragonfly,
      link: "https://mjestacio-dragonflysaas.netlify.app/",
    },
    {
      title: "The Firm Tech",
      image: firmtech,
      link: "https://thefirmtech.one/",
    },
  ];

  return (
    <section
      className=" relative  max-w-[1440px]  lg:mx-auto my-20  portfolio dark:text-black  "
      id="portfolio"
    >
      <span className="backtext ">Portfolio</span>

      <Reveal
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-8 overflow-hidden  pt-20 px-2 md:px-5 2xl::px-0 ${animateContainer}`}
      >
        {portfolios.map((proj) => (
          <Reveal
            className={`mt-5 rounded-xl portfolio-card  md:mx-0 duration-500 ${item} `}
            variants={item}
            key={proj.title}
          >
            <div className="relative img-container overflow-hidden rounded-t-xl">
              <img
                src={proj.image}
                alt={proj.title}
              />
              <a
                href={proj.link}
                target="_blank"
              >
                <div className="overlay">
                  <FaExternalLinkAlt className="text-sky-200 text-4xl" />
                </div>
              </a>
            </div>
            <div className="text-center bg-white z-10 border rounded-b-lg border-sky-500 py-3">
              <span className="font-semibold text-xl ">{proj.title}</span>
            </div>
          </Reveal>
        ))}
      </Reveal>
    </section>
  );
};

export default Portfolio;
