import React from "react";

const CvMain = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 lg:max-w-[700px] max-w-[300px] text-white">
        <div className="flex flex-col">
          <h1 className="font-bold">About Me</h1>
          <p>I am a junior frontend developer, have the ability to make responsive web using html5, css, tailwind, bootstrap and using the next.js framework and react js library.</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Experience:</h1>
          <ul>
            <li>2021: SDGs Kemendes</li>
            <li>2022: PPL REGSOSEK BPS SIDOARJO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CvMain;
