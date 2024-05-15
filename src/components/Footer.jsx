import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-5 flex justify-between flex-wrap  items-center">
        <div className="links flex flex-wrap justify-center md:justify-start items-center gap-6">
          {[
            "Privacy Policy",
            "Cookie Policy",
            "Impressum",
            " Terms",
            "Webflow Agency",
          ].map((elem, i) => (
            <h3
              key={i}
              className="text-sm text-zinc-400 hover:text-zinc-300 hover:ml-[0.5px] cursor-pointer"
            >
              {elem}
            </h3>
          ))}
        </div>
        <div className="right  mx-auto md:mx-0 my-5 md:my-0 inline-block">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
