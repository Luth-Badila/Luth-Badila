import React from "react";
import { NavLink } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useEffect } from "react";

import { web1 } from "../assets";
import { web2 } from "../assets";
import { runFireworks } from "../lib/utils";

const Success = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div className="text-white mt-10 flex flex-col gap-1 justify-center items-center h-[65vh]">
      <div className="flex flex-col items-center justify-center font-raleway font-bold sm:text-4xl text-xl gap-1">
        <IoCheckmarkSharp className="p-2 w-[60px] h-[60px] bg-green-500 rounded-full text-white" />
        <div className="flex flex-col justify-center items-center">
          <h2>Thanks for choosing us to make your</h2>
          <h2>own website</h2>
        </div>
        <p>Let's grow together</p>
        <img src={web2} alt="website" className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] text-white" />
      </div>
      <NavLink to="/" className="rounded-xl bg-red-gradient p-3 hover:scale-105">
        <button>Comeback Home</button>
      </NavLink>
    </div>
  );
};

export default Success;
