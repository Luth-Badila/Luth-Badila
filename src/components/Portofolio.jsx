import React from "react";
import { NavLink } from "react-router-dom";
import Slides from "./Slides";

const Portofolio = () => {
  return (
    <div className="flex justify-center items-center sm:items-start sm:h-[70vh] h-[screen] py-4 sm:py-0">
      <div class="w-[100vw] gap-4 flex-wrap flex justify-center items-center sm:items-start">
        {Slides.map((Slide, i) => {
          return (
            <div key={i} class="w-60 p-2 border-[3px] border-slate-100 rounded-xl transform transition-all hover:-translate-y-2 hover:scale-105 duration-300 shadow-lg hover:shadow-2xl">
              <img class="h-40 object-cover rounded-xl" alt="gambar" src={Slide.photo} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 text-white">{Slide.title}</h2>
                <p class="text-sm text-white">{Slide.body}</p>
              </div>
              <div class="m-2">
                <NavLink role="button" href="" className="text-white hover:bg-redHover p-2 rounded-md cursor-pointer">
                  See More
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
