import { NavLink } from "react-router-dom";
import { FaHome, FaFileCode } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";

import { logoHeader } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex sm:p-6 px-4 gap-4 justify-between items-center bg-red">
      <img src={logoHeader} alt="Luth-Badila" className="mb-2 flex items-center sm:w-[170px] sm:h-[80px] w-[80px]" />
      <ul className="list-none text-white flex mt-8 sm:mt-0 justify-end items-center gap-6">
        <li className={`font-poppins font-normal cursor-pointer hover:text-redHover`}>
          <NavLink to="/" className="flex flex-col items-center gap-1 sm:text-md text-xs sm:mb-0 mb-11">
            <FaHome className="w-[40px] h-[30px] sm:h-[40px]" />
            <p className="sm:flex hidden">Home</p>
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer hover:text-redHover`}>
          <NavLink to="/portofolio" className="flex flex-col gap-1 sm:text-md text-xs items-center sm:mb-0 mb-11">
            <FaFileCode className="w-[40px] h-[30px] sm:h-[40px]" />
            <p className="sm:flex hidden">Portofolio</p>
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer  hover:text-redHover`}>
          <NavLink to="/contact" className="sm:text-md text-xs sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <MdContacts className="w-[40px] h-[30px] sm:h-[40px]" />
            <p className="sm:flex hidden">Contact</p>
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer hover:text-redHover`}>
          <NavLink to="/whymakewebsite" className="sm:text-md text-xs sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <RiQuestionnaireFill className="w-[40px] h-[30px] sm:h-[40px]" />
            <p className="sm:flex hidden">Why Make Website ?</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
