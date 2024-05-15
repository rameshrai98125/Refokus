import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImmages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "49%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImmages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 2:
        imagesShow([0]);
        break;
      case 4:
        imagesShow([0, 1]);
        break;
      case 6:
        imagesShow([0, 1, 2]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3]);
        break;
      case 10:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 12:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full  overflow-hidden">
      <div className="relative  max-w-screen-xl mx-auto">
        <h1 className="text-[35vw] hidden md:flex  font-['satoshi_variable'] font-semibold select-none tracking-tight leading-none text-center">
          work
        </h1>
        <div className="mobile -rotate-90 md:hidden w-screen h-96 ">
          <h1 className="text-9xl my-0 leading-[170px] font-semibold tracking-tight">
            work
          </h1>
          <h1 className="text-9xl leading-[90px] font-semibold tracking-tight">
            work
          </h1>
          <h1 className="text-9xl leading-none font-semibold tracking-tight">
            work
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                style={{ top: elem.top, left: elem.left }}
                className="md:w-60 w-40 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                alt=""
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
