import React from "react";
import Buttom from "./Buttom";

function Product({ product, mover, index }) {
  return (
    <div className="w-full h-[23rem] py-20">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="max-w-screen-xl mx-auto flex justify-between items-center"
      >
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-8">{product.description}</p>
          <div className="flex items-center gap-5">
            {product.live && <Buttom title={"Live Website"} />}
            {product.case && <Buttom title={"Case study  "} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
