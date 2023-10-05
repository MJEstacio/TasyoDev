import React from "react";
import phflag from "../assets/phflag.png";
const Copyright = () => {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-sky-300 ">
      <div className="max-w-[1440px] mx-auto border-t-2 py-5 border-gray-200 flex flex-col sm:flex-row  justify-between px-2 gap-2">
        <p className="text-white  flex justify-start px-2 mx-auto sm:mx-0">
          Made in the
          <span className="flex gap-2">
            <img
              src={phflag}
              alt="flag"
              className="w-10 mx-2"
            />
            Philippines
          </span>
        </p>
        <p className="px-2 font-semibold text-white mx-auto sm:mx-0">
          by <span className="text-slate-800">TasyoDev</span>
        </p>
      </div>
    </section>
  );
};

export default Copyright;
