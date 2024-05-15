import React from "react";
import { PiArrowBendDownRightFill } from "react-icons/pi";

function Buttom({ title = "Get Started" }) {
  return (
    <div className="min-w-40 hidden md:inline-block  px-3 py-2 bg-zinc-100 rounded-full text-black ">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <PiArrowBendDownRightFill />
      </div>
    </div>
  );
}

export default Buttom;
