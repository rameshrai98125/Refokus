import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import img1 from "../assets/64cc29f414c45ee4f46aa3ba_01.jpg";
import img2 from "../assets/650c5f12d26da475b2fd6b88_15.webp";
import img3 from "../assets/64cc2f1484100f8f5bcf07e5_9.jpg";
import video4 from "../assets/Maniv-Compressed.mp4";
// import img5 from "../assets/64cc29f414c45ee4f46aa3ba_01.jpg";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
      live: true,
      case: true,
    },

    {
      title: "Cula",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(23 * val);
  };

  return (
    <div className="relative hidden md:block">
      {products.map((product, index) => (
        <Product key={index} index={index} mover={mover} product={product} />
      ))}
      <div className="w-full h-full  top-0 pointer-events-none absolute">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          className="window w-[30rem] h-[23rem]  bg-white absolute left-[44%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-full h-full "
          >
            <img src={img1} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-full h-full"
          >
            <img src={img2} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-full h-full"
          >
            <img src={img3} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-full h-full"
          >
            <video autoPlay loop muted src={video4}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
