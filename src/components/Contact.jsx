import { useState } from "react";
import { telegram1, instagram1, whatsapp1 } from "../assets";
import supabase from "../config/supabaseClient";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmit = () => {};

  return (
    <>
      <div className="sm:h-[120vh] h-[140vh] flex flex-col justify-center items-center pb-4 sm:pb-6">
        <h2 className="text-white text-4xl">Contact Us</h2>
        <form className="flex flex-col gap-3 sm:w-[700px] w-[350px]">
          <label className="text-[20px] text-white">Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required className="h-[50px] border border-black p-2 rounded-lg" />
          <label className="text-[20px] text-white">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="h-[100px] border border-black p-2 rounded-lg" />
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
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} required className="h-[50px] border border-black p-2 rounded-lg" />
          <button className="bg-red-gradient text-white rounded-lg cursor-pointer w-[130px] p-3">Send Message</button>
          {formError && <p className="error">{formError}</p>}
        </form>
        <h2 className="text-white text-2xl mb-5 mt-3">Or</h2>
        <div className="flex flex-col gap-8 sm:flex-row">
          <a href="https://www.whatsapp.com/" target="_blank">
            <div className="flex gap-2 items-center">
              <img src={whatsapp1} alt="Whatsapp" className="w-[40px] h-[30px] sm:h-[40px]" />
              <p className="text-white">Whatsapp</p>
            </div>
          </a>
          <a href="https://www.instagram.com/sebuah_kapas" target="_blank">
            <div className="flex gap-2 items-center">
              <img src={instagram1} alt="Instagram" className="w-[40px] h-[30px] sm:h-[40px]" />
              <p className="text-white">DM Instagram</p>
            </div>
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            <div className="flex gap-2 items-center">
              <img src={telegram1} alt="Telegram" className="w-[40px] h-[30px] sm:h-[40px]" />
              <p className="text-white">Telegram</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
