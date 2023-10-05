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

import { animateContainer, item } from "./Animation";
const Portfolio = () => {
  const portfolios = [
    {
      title: "Tairi.co",
      image: tairi,
      link: "https://tairi.co/",
      order: "lg:order-0 ",
      description:
        "Supercharge your startup’s tech within just 30 days! At Tairi, we’re all about people. We believe the best way we can help others is through meaningful work.  ",
      programs: ["NextJs", "TypeScript", "CSS", "Tailwind CSS", "RestAPI", "XML"],
    },
    {
      title: "Clickhost Australia",
      image: clickhost,
      link: "https://clickhost.com.au/",
      order: "lg:order-1",
      description:
        "Fast hosting with a team of experts you can trust. With an average response time of under 10 minutes, it's easy to see why Aussie Businesses love Clickhost.",
      programs: ["Svelte", "JavaScript", "CSS", "Tailwind CSS", "RestAPI"],
    },

    {
      title: "Refers @ SMDC",
      image: smdc,
      link: "https://refer.smdc.com/",
      order: "lg:order-0",
      description:
        "Whether you are a fresh graduate, working that 9 to 5, or a stay-at-home mom (or dad) who wants to earn more income to fund your dreams – this is for you!",
      programs: ["HTML", "CSS", "mySQL", "jQuery", "WordPress"],
    },
    {
      title: "Circle M Meats",
      image: meats,
      link: "https://circlemmeats.wpengine.com/",
      order: "lg:order-1",
      description:
        "Circle M Meats’ top priority is providing delivery of premium-quality beef, pork and chicken to socially conscious buyers.  We are a completely vertically integrated meat company, from our unique feeding program all the way through to the thought and care we put into our aging program. You can have peace of mind knowing that we take great pride in being responsible for every aspect of our animals’ journey.",
      programs: ["HTML", "CSS", "mySQL", "jQuery", "ColdFusion"],
    },
    {
      title: "Norms Farms",
      image: norms,
      link: "https://normsfarms.com/",
      order: "lg:order-0",
      description:
        "At Norm’s Farms, we’re dedicated to creating the best elderberry products on the market. Every supplement we sell is 3rd-party tested for quality and authenticity.",
    },
    {
      title: "Concepstore",
      image: concep,
      link: "https://concepstore.com/",
      order: "lg:order-1",
      description:
        "Concepstore helps you design and refine your home by addressing your household’s most pressing concerns as they arrive. We do this by not only giving you a wealth of options to choose from, but by also helping you decide which household appliances would best suit your home. Whether these decisions are influenced by health, safety, security, and hygiene concerns or by the simple need to automate time-consuming chores, Concepstore is sure to have something just for you.",
      programs: ["HTML", "CSS", "Liquid", "Shopify"],
    },
    {
      title: "Dragonfly Saas",
      image: dragonfly,
      link: "https://mjestacio-dragonflysaas.netlify.app/",
      order: "lg:order-0",
      description:
        "Dragonfly SaaS is a simple and cloud based retention and user insight system for your business. It comes with a complete dashboard, putting you in control so you can increase your COA, retention and figure out the abusers from the high value with a few simple clicks.",
      programs: ["HTML", "CSS", "SCSS", "JavaScript"],
    },
    {
      title: "The Firm Tech",
      image: firmtech,
      link: "https://thefirmtech.one/",
      order: "lg:order-1",
      description:
        "Transforming your vision into reality with The Firm tech. Our cohesive team of exceptionally skilled individuals collaborates to deliver innovative ideas and cutting-edge technology solutions to companies and brands. With diverse backgrounds spanning various industries, we unite to provide the latest tech advancements, unparalleled design expertise, and tailored solutions that perfectly meet our clients' specific requirements.",
      programs: ["HTML", "CSS", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section
      className=" relative  max-w-[1440px]  lg:mx-auto my-20  portfolio dark:text-black overflow-hidden  "
      id="portfolio"
    >
      <span className="backtext ">Portfolio</span>

      <div
        className={`grid grid-cols-1 gap-0 md:gap-8  pt-28 px-2 md:px-5 2xl:px-3 ${animateContainer}  `}
      >
        {portfolios.map(({ title, image, link, order, description }) => (
          <Reveal
            y={100}
            className={`mt-5 rounded-xl portfolio-card my-20 md:mx-0 duration-500 flex flex-col lg:flex-row  gap-2 lg:gap-20  `}
            key={title}
          >
            <div
              className={`relative img-container overflow-hidden lg:basis-1/2 ${order} hover:shadow-lg rounded-md duration-300 hover:shadow-sky-300 ring-2 ring-offset-1 `}
            >
              <img
                src={image}
                alt={title}
              />
              <a
                href={link}
                target="_blank"
              >
                <div className="overlay">
                  <FaExternalLinkAlt className="text-sky-200 text-4xl " />
                </div>
              </a>
            </div>
            <Reveal
              x={100}
              className=" py-5 lg:basis-1/2 px-2 lg:px-10 "
            >
              <h2 className="font-bold text-3xl  dark:text-white ">{title}</h2>
              <p className="mt-3  text-gray-600 dark:text-gray-300 leading-7 text-sm lg:text-base mb-10">
                {description}
              </p>
              <a
                href={link}
                target="_blank"
                className="bg-sky-400 px-4 py-2 rounded-md text-white duration-500 font-semibold hover:bg-transparent hover:ring-2 hover:text-sky-400 hover:ring-sky-400 "
              >
                Live Preview
              </a>

              <div className="flex gap-2"></div>
            </Reveal>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
