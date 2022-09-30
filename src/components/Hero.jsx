import React from "react";
import styles from "../style";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { discount } from "../assets";
import GetStarted from "./GetStarted";
import ImageSlider from "./ImageSlider";
import Slides from "./Slides";

const Hero = () => (
  <section className={`flex md:flex-row flex-col h-[64.2vh]`}>
    <motion.div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] md-2">
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
    </motion.div>

    <ImageSlider Slides={Slides} />
  </section>
);

export default Hero;
