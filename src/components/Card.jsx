import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === true && "#7443ff",
        padding: "25px",
      }}
      className={`${width}  bg-zinc-800 p-5 rounded-xl md:min-h-[30rem] min-h-52 my-2 md:my-0 flex justify-between flex-col`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>one heading </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-2">Whatever Heading.</h1>
      </div>
      <div className="down ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight  leading-none">
              Start a project
            </h1>
            <button className="px-3 py-1 rounded-full border-[1px] mt-5 border-zinc-500">
              contact us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium ">
              Explore what drives our Team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
