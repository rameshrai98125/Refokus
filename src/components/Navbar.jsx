import React from "react";
import Buttom from "./Buttom";
import { CgMenuRound } from "react-icons/cg";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex justify-between items-center  border-b-[1px] border-zinc-700">
      <div className="flex w-full gap-14 items-center">
        <img
          className="px-5 md:0"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links hidden  md:flex gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-8 bg-zinc-800"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="text-sm flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div>
        <Buttom />
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mx-2 md:hidden text-2xl cursor-pointer"
      >
        <CgMenuRound />
      </motion.div>
    </div>
  );
}

export default Navbar;
