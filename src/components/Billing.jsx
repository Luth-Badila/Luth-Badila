import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src="" alt="slider" className="w-[100%] h-[100%] relative z-5" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Lorem ipsum dolor sit amet. <br className="sm:block hidden" /> Lorem, ipsum dolor.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis excepturi ad numquam eveniet deserunt molestiae expedita voluptas rerum porro!</p>
    </div>
    <div></div>
  </section>
);

export default Billing;
