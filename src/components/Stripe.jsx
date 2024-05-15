import React from "react";

function Stripe({ elem }) {
  return (
    <div className="md:w-72  w-full px-4 py-3 border-t-[1px] text-zinc-200 border-b-[1px] border-r-[1px] flex-shrink-0  border-zinc-600   flex justify-between items-center">
      <img src={elem.url} alt="" />
      <span className="font-semibold">{elem.number}</span>
    </div>
  );
}

export default Stripe;
