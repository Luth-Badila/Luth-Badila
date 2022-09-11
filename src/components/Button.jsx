import React from "react";

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-red outline-none ${styles} rounded-[10px] hover:scale-110`}>
      order now
    </button>
  );
};

export default Button;
