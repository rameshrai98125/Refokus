import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import "./index.css";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Swiper from "./components/Swipper";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-zinc-900 text-white  font-['Satoshi_variable']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <div className="md:hidden">
        <Swiper />
      </div>
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
