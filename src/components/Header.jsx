import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setsidebar] = useState(false);

  return (
    <header className="w-screen bg-slate-50 py-3 flex items-center justify-around sticky top-0 z-20 border-b border-[#dadada]">
      <img
        src="https://marketing-assets.calendly.com/media/logo.svg"
        className="h-10"
        alt=""
      />
      <nav className="hidden md:flex items-center w-[55%] justify-between">
        {/* for big screen */}
        <ul className="w-full hidden lg:flex items-center gap-4 bg-red-500l">
          <li className="cursor-pointer">Individuals</li>
          <li className="cursor-pointer ">Teams</li>
          <li className="cursor-pointer">Enterprise</li>
          <li className="inline-flex items-center justify-center gap-1">
            Product
            <span className="text-[12px]">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="inline-flex items-center justify-center gap-1">
            Resources
            <span className="text-[12px]">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </li>
        </ul>
      </nav>

      <div className="register md:flex items-center  md:w-auto md:gap-5 md:px-3 md:pr-4 justify-around hidden font-semibold">
        <p className="text-[21px] lg:text-base">Login</p>
        <button
          className="bg-[#004eba] px-1 py-4 text-xl w-[155px] lg:w-[120px] lg:text-base lg:py-2 text-slate-50 rounded-3xl 
          hover:bg-[#005eba]"
        >
          Get Started
        </button>
        <span
          className="md:block hidden lg:hidden text-[26px] sm:text-3xl"
          onClick={() => setsidebar(!sidebar)}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>

      {/* sidebar for smallicons */}

      <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
    </header>
  );
};

export default Header;
