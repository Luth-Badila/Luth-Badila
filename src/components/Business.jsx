import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimRed`}>
      <img src={icon} alt="icon" className="w-[130px] h-[128px] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
);

const Business = () => {
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
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div>
      <section ref={ref} id="features" className={`${layout.section} px-10 sm:h-[74vh] h-[150vh] bg-red`}>
        <motion.div className={`${layout.sectionInfo}`} initial={{ x: "-100vw" }} animate={animation}>
          <h2 className={`${styles.heading2} capitalize`}>
            get more profit <br className="sm:block hidden" /> by creating a website
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We lead you to grow and achieve more profit by creating a website that makes your work and life easier</p>
          <Button styles="mt-10" />
        </motion.div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
