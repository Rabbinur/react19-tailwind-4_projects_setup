import React from "react";
import { Icon } from "@iconify/react";
import whiteLogo from "../../Assist/logo/logocolor.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-brand3 mt-20 lg:p-24 p-5 text-gray-400">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-7">
          <div className=" ">
            <div className="flex justify-center md:justify-start">
              <img src={whiteLogo} alt="" className="w-52 h-auto mb-3 -mt-5" />
            </div>
            <p className="my-5 text-gray-400 text-center md:text-start">
              A platform for finding doctors serves. A single place where find
              the best doctors and any issues we give support to our patients.
            </p>
            <div className="flex md:justify-start justify-center items-center gap-2 cursor-pointer my-3">
              <a href="#">
                <Icon
                  icon="radix-icons:linkedin-logo"
                  width={28}
                  className="text-gray-400 hover:text-brand hover:-translate-y-1 duration-300"
                />
              </a>
              <a href="#">
                <Icon
                  icon="fa-brands:twitter-square"
                  width={24}
                  className="text-gray-400 hover:text-brand hover:-translate-y-1 duration-300"
                />
              </a>
              <a href="#">
                <Icon
                  icon="uim:whatsapp"
                  width={30}
                  className="text-gray-400 hover:text-brand hover:-translate-y-1 duration-300"
                />
              </a>
            </div>
          </div>

          <div className=" ">
            <h5 className="text-[#fff] font-bold mb-5 md:text-start text-center">
              CONTACT US
            </h5>
            <hr className="border border-[#3D3D3D] mb-5" />
            <p className="flex items-center justify-center md:justify-start mb-2">
              <Icon
                icon="material-symbols:map-sharp"
                className="text-gray-400 font-bold mr-2"
              />
              183 Dhaka
            </p>
            <p className="cursor-pointer mb-1 ">
              <a
                href="tel:+8801303384414"
                className="flex items-center justify-center md:justify-start"
              >
                <Icon
                  icon="material-symbols:call"
                  className="text-gray-400 font-bold mr-2"
                />
                (+880)1800-000000
              </a>
            </p>
            <p className=" cursor-pointer">
              <a
                href="mailto:text@example.com"
                className="flex items-center justify-center md:justify-start"
              >
                <Icon
                  icon="material-symbols:mail-outline-rounded"
                  className="text-gray-400 font-bold mr-2"
                />
                text@example.com
              </a>
            </p>
          </div>
          <div className="text-center md:text-start">
            <h5 className="text-[#fff] font-bold mb-5">EXTRA LINKS</h5>
            <hr className="border border-[#3D3D3D] mb-4" />
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              <Link to="/events">Event</Link>
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              <Link to="/category1">Shop</Link>
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              <Link to="/about">About</Link>
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
          <div className=" ">
            <h5 className="text-[#fff] font-bold mb-5 text-center md:text-start">
              NEWS LETTER
            </h5>
            <hr className="border border-[#3D3D3D] mb-9" />
            <form>
              <input
                type="text"
                placeholder="Enter your email"
                className="py-3 px-5 w-full rounded"
              />
              <button
                className="bg-brand hover-effect px-10 py-4 my-5 text-sm font-bold text-white hover:-translate-x-1 duration-300 ease-out rounded w-full"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-10" />
        <p className="mt-5 text-center">
          &copy; 2023 All Rights Reserved by{" "}
          <a href="https://weepoka.com">Weepoka</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
