import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Button = ({ styles }) => {
  return (
    <motion.button type="button" className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`} whileHover="hover" variants={buttonVariants}>
      order now
    </motion.button>
  );
};

export default Button;
