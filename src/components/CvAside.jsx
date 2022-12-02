import React from "react";

const CvAside = () => {
  return (
    <div className="flex flex-col text-black gap-5">
      <div className="max-w-[600px] flex flex-col gap-2">
        <div>
          <h1 className="font-bold">Hard Skill</h1>
          <ul className="ml-3 max-w-md list-disc list-inside">
            <li>Web Development</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Soft Skill</h1>
          <ul className="ml-3 max-w-md list-disc list-inside">
            <li>Communication</li>
            <li>Team Work</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="font-bold">Education</h1>
        <div className="flex gap-8">
          <div className="flex flex-col gap-5 max-w-[100px]">
            <p>SDN Bunctitan</p>
            <p>SMPN 2 Sedati</p>
            <p>SMK ITABA: Multimedia</p>
            <p>UNIVERSITAS MUHAMMADIYA SIDOARJO: Pendidikan Bahasa Inggris</p>
          </div>
          <div className="flex flex-col gap-11 max-w-[100px]">
            <p>2005-2011</p>
            <p>2011-2014</p>
            <p>2014-2017</p>
            <p>2017-now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvAside;
