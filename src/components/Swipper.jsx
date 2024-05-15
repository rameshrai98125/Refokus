import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "../index.css"; // Import your custom Swiper styles if needed
import Buttom from "./Buttom";
// Import Swiper core and required modules

// Initialize Swiper modules (pagination in this case)

function MySwiper() {
  var products = [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-500.webp",
      title: "Arqitel",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
    },

    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203-p-500.png",
      title: "Cula",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203-p-500.png",
      title: "Layout Land",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201-p-500.png",
      title: "Maniv",
      description:
        "lorem Ips incorrectly formatted for display in HTML without errors and HTML without errors cause",
    },
  ];

  return (
    <Swiper spaceBetween={50} className="mySwiper rounded-xl">
      {products.map((product, index) => (
        <SwiperSlide key={index} className="bg-zinc-900 ">
          <div className="bg-zinc-800 ">
            <div className="w-full bg-zinc-800 overflow-hidden p-5">
              <h1 className="text-zinc-100 text-3xl font-semibold mb-2">
                {product.title}
              </h1>
              <img src={product.url} alt="" />
            </div>
            <div className="p-5">
              <p className=" text-xl text-start">{product.description}</p>
              <div className="bg-red-200  my-4 flex ">
                <Buttom />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MySwiper;
