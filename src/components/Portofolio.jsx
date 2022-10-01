import React from "react";
import { NavLink } from "react-router-dom";
import Slides from "./Slides";

const Portofolio = () => {
  return (
    <div className="flex justify-center items-center sm:h-[90vh] h-[screen] sm:py-0 py-5">
      <div class="w-[80vw] min-h-screen gap-4 flex-wrap flex justify-center items-center">
        {Slides.map((Slide, i) => {
          return (
            <div key={i} class="w-60 p-2 border-[3px] border-slate-100 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              <img class="h-40 object-cover rounded-xl" alt="gambar" src={Slide.photo} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 text-white">{Slide.title}</h2>
                <p class="text-sm text-white">{Slide.body}</p>
              </div>
              <div class="m-2">
                <NavLink role="button" href="" className="text-white hover:bg-redHover p-2 rounded-md">
                  Learn More
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
