import React from "react";

const Herocompo = () => {
  return (
    <div className="w-screen h-auto py-4 px-1 mt-10">
      <div className="px-2 py-3 flex flex-col gap-6 sm:gap-8 text-center items-center">
        <p className="text-xl text-[#004eba] sm:text-[16px] font-semibold uppercase">
          Solutions
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="text-[#004eba]">Calendly</span> for the work you do
        </h1>
        <p className="text-[22px] text-[#5f5f5f] sm:text-2xl">
          Across a range of uses, Calendly helps people and teams build <br />
          efficiency, professionalism, and result into the work they do.
        </p>
        <button
          className="bg-[#004eba] px-1 py-4 text-xl w-[165px] lg:w-[170px] lg:text-lg lg:py-2 text-slate-50 rounded-3xl 
          hover:bg-[#005eba]"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Herocompo;
