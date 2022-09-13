import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles }) => {
  return (
    <motion.button type="button" className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`} whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
      order now
    </motion.button>
  );
};

export default Button;
