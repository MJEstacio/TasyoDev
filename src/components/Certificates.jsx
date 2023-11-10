import webDev from "../assets/WebDevMaster.jpg";
import FEBootcamp from "../assets/FEBootcamp.jpg";
import BootstrapReact from "../assets/BootstrapReact.jpg";
import ReactBeginner from "../assets/ReactBeginner.jpg";
import JSbeginner from "../assets/JSbeginner.jpg";
import IntroHTML from "../assets/IntroHTML.png";
import webDevSololearn from "../assets/webDevelopmentSololearn.jpg";
import { Reveal } from "./Reveal";

const certs = [
  {
    imageUrl: IntroHTML,
    title: "Introduction to HTML",
    link: "https://www.sololearn.com/certificates/CC-3VDVPDNU",
    issuedBy: "Sololearn",
    dateIssued: "March 2023",
  },
  {
    imageUrl: webDevSololearn,
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

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative mt-20 px-3 xl:px-0 dark:text-slate-800"
    >
      <div className="max-w-7xl mx-auto pt-40">
        <h1 className="backtext">Certificates</h1>

        <Reveal className="grid marker: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="ring-2 ring-offset-2 bg-sky-50 shadow-lg rounded-lg p-5 overflow-hidden shadow-sky-100 flex flex-col justify-between"
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className=" object-contain max-h-72  m-auto pb-5 "
              />
              <div className="min-h-[12rem] flex flex-col justify-between">
                <h4 className="border-t-[1px] pt-5 text-center font-semibold text-lg">
                  {cert.title}
                </h4>

                <div className="flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-small font-semibold  text-white bg-sky-500 px-4 py-2 rounded-lg hover:ring-2 hover:bg-sky-50 hover:text-sky-500 duration-300 shadow-md hover:shadow-lg"
                  >
                    Certificate Link
                  </a>
                </div>
                <div>
                  <span className="text-xs">
                    Issued by{" "}
                    <strong className=" text-sm">{cert.issuedBy}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Certificates;
