import React, { useEffect } from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardDeal = () => {
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
    <section ref={ref} className={`${layout.section}`}>
      <motion.div className={`${layout.sectionInfo}`} initial={{ x: "-100vw" }} animate={animation}>
        <h2 className={styles.heading2}>
          Lorem ipsum dolor sit <br className="sm:block hidden" /> amet consectetur.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit possimus soluta laudantium, deleniti sunt atque assumenda excepturi reiciendis est.</p>
        <Button className={`mt-10`} />
      </motion.div>
      <div className={`${layout.sectionImg}`}>
        <img src="" alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
