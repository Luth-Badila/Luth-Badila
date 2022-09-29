import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFileCode } from "react-icons/fa";

import { close, logoHeader, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex p-6 justify-evenly items-center navbar">
      <img src={logoHeader} alt="hoobank" className="flex items-center w-[150px] h-[80px]" />

      <ul className="list-none text-white flex mt-10 sm:mt-0 justify-end items-center flex-1 gap-6">
        <li className={`flex items-center gap-3 font-poppins font-normal cursor-pointer text-[16px]`}>
          <FaHome className="sm:flex hidden" />
          <Link to="/">Home</Link>
        </li>
        <li className={`flex items-center gap-3 font-poppins font-normal cursor-pointer text-[16px]`}>
          <FaFileCode />
          <Link to="/portofolio">Portofolio</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px]`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
