import React from "react";
import styles from "../style";
import { robot, discount, porto1, arrowUp } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] md-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <div className="flex gap-2">
          <span className="text-white">20%</span>
          <span className="text-gray-400">Discount For</span>
          <span className="text-white">New Client</span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex gap-5 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          Build <span className="text-gradient">Your</span>
          {/* <div className="flex gap-2"></div> */}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
        Own <span className="text-gradient">Website</span> With Us
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We are experienced in creating and designing websites according to your needs at affordable prices but quality is still number 1</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={arrowUp} alt="arrowup" className="absolute top-[50%] left-[50px] bg-black rounded-full text-white/70 cursor-pointer select-none z-[100] hover:text-red-700 p-2" />
      <img src={porto1} alt="Billing" className="w-[90%] h-[90%] relative z-[5]" />
      <img src={arrowUp} alt="arrowup" className="absolute top-[50%] bg-black rounded-full right-[50px] text-white/70 cursor-pointer select-none z-[100] hover:text-red-700 p-2" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 red__gradient" />
    </div>
    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
  </section>
);

export default Hero;
