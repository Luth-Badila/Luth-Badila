import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl">Contact Us</h2>
        <form className="flex flex-col gap-3 w-[700px]">
          <label className="text-[20px] text-white">Subject</label>
          <input type="text" required className="h-[50px] border border-black p-2 rounded-lg" />
          <label className="text-[20px] text-white">Message</label>
          <textarea required className="h-[100px] border border-black p-2 rounded-lg" />
          <label className="text-[20px] text-white">Web Type :</label>
          <select className="p-2 rounded-lg">
            <option>Portofolio</option>
            <option>E-Commerce</option>
            <option>Company Profile</option>
          </select>
          <label className="text-[20px] text-white">Backend :</label>
          <select className="p-2 rounded-lg">
            <option>Sanity</option>
            <option>MySql</option>
            <option>MongoDB</option>
            <option>JSON Server</option>
          </select>
          <label className="text-[20px] text-white">Note :</label>
          <input type="text" required className="h-[50px] border border-black p-2 rounded-lg" />
          <button className="bg-red-gradient text-white rounded-lg cursor-pointer w-[130px] p-3">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
