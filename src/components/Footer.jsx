import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="w-screen flex flex-col md:py-7 md:px-20 px-4 py-6">
      <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:justify-between md:justify-center items-start md:items-center gap-6">
        <div className="left p-2 flex flex-col items-start gap-9 ">
          <div className="flex w-full flex-col items-start gap-3">
            <p className="text-3xl font-bold leading-10">
              Easy
              <span className="text-[#004eba]">
                <br />
                ahead
              </span>
            </p>
            <p className="text-[#6d6c6c]">
              We take the work out of connecting with <br></br> others so you
              can accomplish more.
            </p>
          </div>

          <div className="relative w-full">
            <select className="w-full p-3 border appearance-none border-gray-500 rounded-lg outline-none">
              <option value="">English</option>
            </select>
            <p className="absolute right-4 top-3 pointer-events-none">
              <FontAwesomeIcon icon={faChevronDown} />
            </p>
          </div>

          <div className="flex flex-wrap w-full justify-between items-center">
            <img className="h-12" src="../public/appstore.png" alt="" />
            <img className="h-12" src="../public/playstore.png" alt="" />
          </div>

          <div className="w-full sm:w-[75%] p-3 flex gap-5 sm:justify-between text-xl pl-0 items-center flex-wrap">
            <span className="cursor-pointer hover:text-gray-600 duration-200">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="cursor-pointer hover:text-gray-600 duration-200">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="cursor-pointer hover:text-gray-600 duration-200">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="cursor-pointer hover:text-gray-600 duration-200">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="cursor-pointer hover:text-gray-600 duration-200">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 p-4">
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black ">
              About
            </li>
            <li className="cursor-pointer">About Calendly</li>
            <li className="cursor-pointer">Contact Sales</li>
            <li className="cursor-pointer">Newsroom</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Security</li>
          </ul>
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black">
              Solutions
            </li>
            <li className="cursor-pointer">Customer Success</li>
            <li className="cursor-pointer">Sales</li>
            <li className="cursor-pointer">Recruiting</li>
            <li className="cursor-pointer">Information Technology</li>
            <li className="cursor-pointer">Marketing</li>
          </ul>
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black">
              Popular Features
            </li>
            <li className="cursor-pointer">Embed Calendly</li>
            <li className="cursor-pointer">Availability</li>
            <li className="cursor-pointer">Sending Notifications</li>
            <li className="cursor-pointer">Using Calendly Mobile</li>
            <li className="cursor-pointer"></li>
          </ul>
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black">
              Support
            </li>
            <li className="cursor-pointer">Help Center</li>
            <li className="cursor-pointer">Video Tutorials</li>
            <li className="cursor-pointer">Cookie Settings</li>
          </ul>
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black">
              Add-Ons
            </li>
            <li className="cursor-pointer">Download for Chrome</li>
            <li className="cursor-pointer">Download for Firefox</li>
          </ul>
          <ul className="flex flex-col items-start gap-3 text-[#5f5f5f]">
            <li className="text-xl font-semibold cursor-pointer text-black">
              Developers
            </li>
            <li className="cursor-pointer">Developer Tools</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-center text-[#5f5f5f] py-6 px-4 sm:px-0 md:mt-5 lg:mt-0">
        <p>Copyright &copy; Calendly 2022</p>
        <p>Privacy / Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
