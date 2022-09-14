import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { desktop, hp, tablet, size } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "100vw",
      });
    }
  }, [inView]);

  return (
    <section ref={ref} id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={size} alt="responsiveness" className="w-[100%] h-[100%] relative z-5" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <motion.div className={`${layout.sectionInfo}`} initial={{ x: "100vw" }} animate={animation}>
        <h2 className={`${styles.heading2}`}>
          Responsive Web <br className="sm:block hidden" /> Design
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We always create responsive web, which can be accessed by various devices with different screen sizes which will make users more comfortable when visiting your web</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={desktop} alt="desktop" className="w-[150px] h-[60px] object-contain mr-5 cursor-pointer" />
          <img src={tablet} alt="tablet" className="w-[150px] h-[60px] object-contain cursor-pointer" />
          <img src={hp} alt="handphone" className="w-[150px] h-[60px] object-contain cursor-pointer" />
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
