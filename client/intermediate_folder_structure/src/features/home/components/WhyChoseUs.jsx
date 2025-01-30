import React from "react";
import chooseUsPic from "../../../assets/images/general/whychoose1.png";
import { RiSupabaseLine, RiTeamLine } from "react-icons/ri";
import { TbGift, TbHearts } from "react-icons/tb";
import { PiThumbsUp } from "react-icons/pi";
import { CiIceCream } from "react-icons/ci";

const ChooseUs = () => {
  return (
    <div className=" py-20 lg:mt-[140px] container mx-auto">
      <div className="flex items-center justify-center flex-col text-center px-4 md:px-0">
        <h1 className="lg:text-3xl text-xl font-medium mb-">Why Choose Us</h1>
        <p className="mt-4 text-sm lg:text-base">
          Contrary to popular belief, is not simply random text. It has roots in
          a piece of classical <br /> Latin literature from 45 BC, making it
          over 2000 years old.
        </p>
      </div>
      <div className="mt-12 md:flex gap-10 justify-center items-center">
        <div className="space-y-8 my-10 md:my-10 px-4 md:px-0">
          <div className="flex gap-4">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <RiTeamLine />
            </span>
            <div>
              <h1 className="lg:text-lg text-base font-medium mb-3">
                Dedicated Team
              </h1>
              <hr className="w-20 border border-[#ccc]" />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <TbHearts />
            </span>
            <div>
              <h1 className="text-lg font-medium mb-3">Fresh is Best</h1>
              <hr className="w-20 border border-[#ccc]" />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <TbGift />
            </span>
            <div>
              <h1 className="text-lg font-medium mb-3">Gift Certificates</h1>
              <hr className="w-20 border border-[#ccc]" />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-0">
          <img
            src={chooseUsPic}
            loading="lazy"
            alt="fruit"
            className="w-full"
          />
        </div>
        <div className="space-y-8 my-10 md:my-10 px-4 md:px-0">
          <div className="flex gap-4 lg:flex-row-reverse">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <RiSupabaseLine />
            </span>
            <div className="lg:text-end">
              <h1 className="text-lg font-medium mb-3 lg:text-end">
                Integrated Supplier
              </h1>
              <hr className="w-20 border border-[#ccc] relative lg:left-[73%]" />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
          <div className="flex gap-4 lg:flex-row-reverse">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <CiIceCream />
            </span>
            <div className="lg:text-end">
              <h1 className="text-lg font-medium mb-3 lg:text-end">
                Sustainable Practice
              </h1>
              <hr className="w-20 border border-[#ccc] relative lg:left-[73%]" />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
          <div className="flex gap-4 lg:flex-row-reverse">
            <span className="w-14 h-14 text-xl rounded-lg bg-[#ddd] flex items-center justify-center">
              <PiThumbsUp />
            </span>
            <div className="lg:text-end">
              <h1 className="text-lg font-medium mb-3">The Benefits Only</h1>
              <hr className="w-20 border border-[#ccc] relative lg:left-[73%] " />
              <p className="mt-4 text-sm text-[#757575]">
                Professional employees are there for you to pick <br /> the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
