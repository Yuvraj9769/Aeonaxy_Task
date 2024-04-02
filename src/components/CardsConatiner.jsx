import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardsConatiner = () => {
  let cardData = [
    {
      imgsrc: "../public/1.png",
      title: "Sales",
      desc: "Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they're in peak buying mode.",
    },
    {
      imgsrc: "../public/2.png",
      title: "Recruiting",
      desc: "Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.",
    },
    {
      imgsrc: "../public/3.png",
      title: "Education",
      desc: "Control your office hours, and empower students and parents to schedule appointments easily.",
    },
    {
      imgsrc: "../public/4.png",
      title: "Revenue Operations",
      desc: "Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting.",
    },
    {
      imgsrc: "../public/5.png",
      title: "Marketing",
      desc: "Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.",
    },
    {
      imgsrc: "../public/6.png",
      title: "Customer Success",
      desc: "Offer exceptional support: Your clients will be delighted with one- click scheduling and increased responsiveness.",
    },
  ];

  return (
    <div className="w-screen py-2 flex items-center justify-center mt-10">
      <div className="text-center flex flex-col w-full px-3 py-2 gap-8 md:gap-7 items-center">
        <p className="text-xl text-[#004eba] sm:text-[16px] uppercase font-semibold">
          Solutions
        </p>
        <h3 className="font-bold text-3xl mb-4">
          Calendly can solve your specific pain paints
        </h3>
        <div className="cards flex flex-col md:flex-row md:flex-wrap gap-5 items-center p-2 lg:w-[75%] justify-center md:gap-x-[12px]">
          {cardData.map((e, ind) => {
            return (
              <div
                className="card bg-slate-50 shadow-md shadow-gray-300 p-4 rounded-lg w-full max-w-[300px] sm:w-[300px] flex flex-col items-start min-h-[303px] justify-between"
                key={ind}
              >
                <div className="flex flex-col items-start gap-3 text-start">
                  <img src={e.imgsrc} className="h-[45px]" alt="" />
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <p className="text-[#5f5f5f]">{e.desc}</p>
                </div>
                <div className="flex gap-4 items-center text-[#004eba] border border-transparent hover:cursor-pointer hover:border hover:border-gray-400 duration-300 rounded-lg px-3 py-2">
                  <p>Learn more </p>
                  <span className="text-xl">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsConatiner;
