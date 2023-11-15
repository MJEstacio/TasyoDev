import React from "react";
import { Reveal } from "./Reveal";

const CTASection = ({ openmodal }) => {
  return (
    <Reveal>
      <section id="cta-section">
        <div className="max-w-7xl mx-auto  flex justify-center flex-col gap-10 ">
          <h3 className="text-3xl font-bold   text-center text-slate-700 ">
            Ready to Elevate your Online Presence?
          </h3>
          <div className="flex justify-center ">
            <button
              onClick={openmodal}
              className="px-4 py-2 bg-sky-500 hover:ring-2  hover:bg-sky-50 hover:text-sky-500 text-white duration-300 ring-sky-500 shadow-md rounded-md font-semibold tracking-widest"
            >
              Let's do it!
            </button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default CTASection;
