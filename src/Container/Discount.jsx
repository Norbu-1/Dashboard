import React from "react";
import { HiMiniClock } from "react-icons/hi2";
const Discount = () => {
  return (
    <div className="flex items-center justify-start w-full h-[3rem] bg-orange-200 pl-[2%] gap-2 md:gap-4 font-bold ">
      <div className="bg-orange-300 py-1 px-3 rounded-full w-auto flex items-center gap-1">
        <HiMiniClock className="text-sm md:text-lg" />
        <p className="text-[0.4rem] md:text-sm duration-500">
          One-Time Offer
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <p className="text-[0.43rem] md:text-sm duration-500">
          Your AI Storyboarding Bundle Discount expires in
        </p>
        <p className="bg-orange-100  px-2 text-red-300 text-[0.45rem] md:text-sm  py-0.5 duration-500">
          5:01
        </p>
      </div>

      <button className="w-auto bg-red-300 px-3 py-1 rounded-md text-[0.45rem] md:text-sm  text-center duration-500">
        Claim Discount
      </button>
    </div>
  );
};

export default Discount;
