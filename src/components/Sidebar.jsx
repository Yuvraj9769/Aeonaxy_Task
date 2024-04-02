import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebar, setsidebar }) => {
  return (
    <>
      <span
        className="md:hidden block text-[26px] sm:text-3xl"
        onClick={() => setsidebar(!sidebar)}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>

      <div
        className={`transition-left bg-slate-50 duration-500 flex flex-col lg:hidden items-center justify-between px-1 py-3 fixed w-screen h-screen top-0  z-20 ${
          sidebar ? "left-0" : "left-[-110%]"
        }`}
      >
        <div className="head w-full px-2 py-3 flex justify-between items-center">
          <img
            src="https://marketing-assets.calendly.com/media/logo.svg"
            className="h-10"
            alt=""
          />
          <span className="text-3xl" onClick={() => setsidebar(!sidebar)}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <nav className="flex flex-col items-center w-full justify-between">
          {/* for small screen */}
          <ul className="w-full flex text-[21px] flex-col items-center gap-4">
            <li className="border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Individuals
            </li>
            <li className="border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Teams
            </li>
            <li className="border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Enterprise
            </li>
            <li className="inline-flex items-center justify-between border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Product
              <span className="text-xl rotate-[-90deg]">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </li>
            <li className="border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Pricing
            </li>
            <li className="inline-flex items-center justify-between border-b border-b-[#5f5f5f] w-full px-2 py-4">
              Resources
              <span className="text-xl rotate-[-90deg]">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </li>
          </ul>
        </nav>
        <div className="regster flex items-center w-full lg:w-auto justify-around font-semibold">
          <p className="text-[21px]">Login</p>
          <button
            className="bg-[#004eba] px-1 py-4 text-xl w-[155px] text-slate-50 rounded-3xl 
          hover:bg-[#005eba]"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
