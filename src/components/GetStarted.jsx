import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-red-gradient p-[3px] cursor-pointer hover:scale-110 hover:p-[4px]`}>
    <div className={`${styles.flexCenter} flex-col bg-red w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <a href="https://wa.me/087856524677" target="__blank" className="font-poppins font-medium text-[18px] leading-[23px] cursor-pointer mr-2">
          <span className="text-gradient">Order</span>
        </a>
        <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain" />
      </div>
      <a href="https://wa.me/qr/EVTN2KLCPOA4J1" className="font-poppins font-medium text-[18px] leading-[23px] cursor-pointer ml-5">
        <span className="text-gradient">Now</span>
      </a>
    </div>
  </div>
);
export default GetStarted;
