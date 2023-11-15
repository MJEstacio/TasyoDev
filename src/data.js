import webDev from "./assets/WebDevMaster.jpg";
import FEBootcamp from "./assets/FEBootcamp.jpg";
import BootstrapReact from "./assets/BootstrapReact.jpg";
import ReactBeginner from "./assets/ReactBeginner.jpg";
import JSbeginner from "./assets/JSbeginner.jpg";
import IntroHTML from "./assets/IntroHTML.png";
import webDevSolo from "./assets/webDevSolo.jpg";

// Portfolio

import smdc from "./assets/refersmdc4.jpg";
import meats from "./assets/meats4.jpg";
import norms from "./assets/norms.jpg";
import concep from "./assets/concepstore3.jpg";
import dragonfly from "./assets/dragonfly1.jpg";
import firmtech from "./assets/thefirmtech1.jpg";
import clickhost from "./assets/clickhost.jpg";
import tairi from "./assets/tairihome.png";
//


export const certs = [
  {
    imageUrl: IntroHTML,
    title: "Introduction to HTML",
    link: "https://www.sololearn.com/certificates/CC-3VDVPDNU",
    issuedBy: "Sololearn",
    dateIssued: "March 2023",
  },
  {
    imageUrl: webDevSolo,
    title: "Web Development",
    link: "https://www.sololearn.com/certificates/CC-GQWTER6J",
    issuedBy: "Sololearn",
    dateIssued: "November 2023",
  },
  {
    imageUrl: webDev,
    title: "Web Development MasterClass",
    link: "https://youaccel.com/admin/certificate_gen/tcpdf/ya/certificate_ya2.php?certid=70196677",
    issuedBy: "YouAccel",
    dateIssued: "November 2022",
  },

  {
    imageUrl: BootstrapReact,
    title: "Complete Bootstrap and React Bootcamp",
    link: "https://www.udemy.com/certificate/UC-298d69b1-2f9a-4644-b465-b5d0f566af37/",
    issuedBy: "YouAccel",
    dateIssued: "March 2023",
  },
  {
    imageUrl: FEBootcamp,
    title: "The Front-End Web Development Bootcamp: HTML, CSS, JS and React",
    link: "https://www.udemy.com/certificate/UC-2abec72e-5f21-4210-b026-50e8c996bc75/",
    issuedBy: "Meta Brains",
    dateIssued: "March 2023",
  },

  {
    imageUrl: ReactBeginner,
    title: "ReactJS Crash Course",
    link: "https://www.udemy.com/certificate/UC-a54d6b36-c6fc-47c2-b2ec-0a1b59353b83/",
    issuedBy: "Meta Brains",
    dateIssued: "March 2023",
  },
  {
    imageUrl: JSbeginner,
    title: "JS for Beginners",
    link: "https://www.udemy.com/certificate/UC-961237f4-4330-4d07-ab02-027f68412e1a/",
    issuedBy: "YouAccel",
    dateIssued: "October 2022",
  },
];


// Portfolio 
export const portfolios = [
  {
    id: 1,
    title: "Tairi.co",
    image: tairi,
    link: "https://tairi.co/",

    description:
      "Supercharge your startup’s tech within just 30 days! At Tairi, we’re all about people. We believe the best way we can help others is through meaningful work.  ",
    programs: ["NextJs", "TypeScript", "CSS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Clickhost Australia",
    image: clickhost,
    link: "https://clickhost.com.au/",

    description:
      "Fast hosting with a team of experts you can trust. With an average response time of under 10 minutes, it's easy to see why Aussie Businesses love Clickhost.",
    programs: ["Svelte", "JavaScript", "CSS", "Tailwind CSS", "RestAPI"],
  },

  {
    id: 3,
    title: "Refers @ SMDC",
    image: smdc,
    link: "https://refer.smdc.com/",

    description:
      "Whether you are a fresh graduate, working that 9 to 5, or a stay-at-home mom (or dad) who wants to earn more income to fund your dreams – this is for you!",
    programs: ["HTML", "CSS", "mySQL", "jQuery", "WordPress"],
  },
  {
    id: 4,
    title: "Circle M Meats",
    image: meats,
    link: "https://circlemmeats.wpengine.com/",

    description:
      "Circle M Meats’ top priority is providing delivery of premium-quality beef, pork and chicken to socially conscious buyers.  We are a completely vertically integrated meat company, from our unique feeding program all the way through to the thought and care we put into our aging program. ",
    programs: ["HTML", "CSS", "mySQL", "jQuery", "ColdFusion"],
  },
  {
    id: 5,
    title: "Norms Farms",
    image: norms,
    link: "https://normsfarms.com/",

    description:
      "At Norm’s Farms, we’re dedicated to creating the best elderberry products on the market. Every supplement we sell is 3rd-party tested for quality and authenticity.",
  },
  {
    id: 6,
    title: "Concepstore",
    image: concep,
    link: "https://concepstore.com/",

    description:
      "Concepstore helps you design and refine your home by addressing your household’s most pressing concerns as they arrive. We do this by not only giving you a wealth of options to choose from, but by also helping you decide which household appliances would best suit your home. ",
    programs: ["HTML", "CSS", "Liquid", "Shopify"],
  },
  {
    id: 7,
    title: "Dragonfly Saas",
    image: dragonfly,
    link: "https://mjestacio-dragonflysaas.netlify.app/",

    description:
      "Dragonfly SaaS is a simple and cloud based retention and user insight system for your business. It comes with a complete dashboard, putting you in control so you can increase your COA, retention and figure out the abusers from the high value with a few simple clicks.",
    programs: ["HTML", "CSS", "SCSS", "JavaScript"],
  },
  {
    id: 8,
    title: "The Firm Tech",
    image: firmtech,
    link: "https://thefirmtech.one/",

    description:
      "Transforming your vision into reality with The Firm tech. Our cohesive team of exceptionally skilled individuals collaborates to deliver innovative ideas and cutting-edge technology solutions to companies and brands. ",
    programs: ["HTML", "CSS", "SCSS", "JavaScript"],
  },
];