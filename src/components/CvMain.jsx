import React from "react";
import { Link } from "react-router-dom";

const CvMain = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 lg:max-w-[700px] max-w-[300px] text-white text-xl">
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
        <div className="flex flex-col">
          <h1 className="font-bold">Web Portofolio</h1>
          <ol>
            <li>
              <Link href="">
                <p>1. Luth-Badila Portofolio</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>2. Hulu Clone</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>3. Company Profile</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>4. Blog</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>5. E-Commerce</p>
              </Link>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 text-xl">
          <div className="flex gap-2">
            <h1 className=" font-bold">Programming Language:</h1>
            <p>JavaScript Specialist</p>
          </div>
          <div className="flex gap-2">
            <h1 className=" font-bold">Other:</h1>
            <p>HTML5,</p>
            <p>CSS,</p>
            <p>Tailwind,</p>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvMain;
