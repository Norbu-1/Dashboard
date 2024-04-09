import React from "react";
import { CgSpinner } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { PiLightningBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-white w-full h-[5rem] flex justify-between pl-[2%] shadow-sm items-center duration-500">
      <div className="flex gap-[3%] text-black w-full items-center kanit-medium">
        <p className="border bg-black text-white rounded-full px-3.5 py-1.5 text-2xl lg:text-3xl font-bold">
          B
        </p>
        <p className=" text-2xl lg:text-3xl font-bold duration-500">
          Project Dashboard
        </p>
      </div>
      <div className=" flex w-auto gap-3 justify-center items-center duration-500">
        <div className=" relative hidden md:block duration-500">
          <input
            className="w-[9rem] md:w-[13rem] lg:w-[16rem] border-[0.2rem] border-gray-300 px-2 rounded text-sm py-2 pl-8 "
            placeholder="Search my storyboards"
            type="text"
            name=""
            id=""
          />
          <i className=" absolute left-3 top-3 text-gray-400 text-lg">
            <IoIosSearch />
          </i>
        </div>
        <button className="lg:flex gap-1 w-36 h-10 bg-blue-100 lg:items-center lg:justify-center font-bold rounded px-2 border-[0.2rem] border-blue-200 py-[0.2rem] hidden ">
          <div className=" relative ">
            <CgSpinner className="text-3xl text-blue-500" />
            <p className=" absolute top-1.5 left-3 text-[0.75rem]">4</p>
          </div>
          <div className="">Quick Start</div>
        </button>
        <p className="font-bold border-[0.2rem] border-black bg-orange-300  rounded-full text-center px-[0.7rem] text-lg py-1 hidden lg:block">
          A
        </p>
        <p className="bg-black w-10 rounded-l-full text-lg py-2 hidden lg:block pl-2">
          <PiLightningBold className="text-white text-2xl " />
        </p>
      </div>
      <p>
        <IoIosSearch className="text-3xl ml-3 md:hidden text-gray-500 cursor-pointer" />
      </p>
      <p>
        <IoMenu className="text-4xl mx-4 lg:hidden cursor-pointer" />
      </p>
    </div>
  );
};

export default Navbar;
