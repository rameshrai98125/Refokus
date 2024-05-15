import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 md:gap-40 gap-20 md:py-10 md:pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 md:gap-40 gap-20 md:py-10 py-5 md:pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
