import React from "react";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className="text-white flex flex-col gap-4 justify-center items-center h-[65vh]">
      <div className="flex flex-col items-center justify-center font-raleway font-bold sm:text-4xl text-xl">
        <h2>Thanks for choosing us to make your website</h2>
        <p>Let's grow together</p>
      </div>
      <NavLink to="/" className="rounded-xl bg-red-gradient p-3 hover:scale-105">
        <button>Comeback Home</button>
      </NavLink>
    </div>
  );
};

export default Success;
