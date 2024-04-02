import React from "react";

const Booking = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-screen bg-[#092640] py-8">
      <div className="flex flex-col items-center gap-6 p-3 w-full sm:w-auto">
        <h1 className="text-4xl text-slate-50 font-bold">
          Easy access for easy bookings
        </h1>
        <p className="text-[#a8a4a4] text-center text-lg">
          Share your Calendly link right from your browser, so you can schedule
          meetings <br /> without the back-and-forth
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          <button
            className="bg-[#004eba] px-1 py-4 text-xl border-2 border-transparent w-[165px] lg:w-[170px] lg:text-lg lg:py-2 text-slate-50 rounded-3xl 
          hover:bg-transparent hover:border-2 hover:border-[#dadada] duration-300"
          >
            Start for free
          </button>
          <button
            className="bg-transparent border-2 border-[#dadada] px-1 py-4 text-xl w-[165px] lg:w-[170px] lg:text-lg lg:py-2 text-slate-50 rounded-3xl 
          hover:bg-[#005eba] duration-300"
          >
            Talk with Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
