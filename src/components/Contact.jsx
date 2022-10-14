import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { telegram1, instagram1, whatsapp1 } from "../assets";
import supabase from "../config/supabaseClient";

const Contact = () => {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");
  const [formError, setFormError] = useState(null);
  const [webType, setWebType] = useState("");
  const [backend, setBackend] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject || !message || !note || !webType || !backend) {
      setFormError("Please fill all the blank correctly");
      return;
    }

    const { data, error } = await supabase.from("porto3").insert([{ subject, message, note, webType, backend }]);

    if (error) {
      setFormError("Please fill all the blank correctly");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/success", { replace: true });
      navigate(0);
    }
  };

  return (
    <div className="sm:h-[120vh] h-[140vh] flex flex-col justify-center items-center pb-4 sm:pb-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:w-[700px] w-[350px]">
        <label htmlFor="subject" className="text-[20px] text-white">
          Subject
        </label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="h-[50px] border border-black p-2 rounded-lg" />
        <label htmlFor="message" className="text-[20px] text-white">
          Message
        </label>
        <textarea value={message} id="message" onChange={(e) => setMessage(e.target.value)} className="h-[100px] border border-black p-2 rounded-lg" />
        <label className="text-[20px] text-white">Web Type :</label>
        <select value={webType} id="webType" onChange={(e) => setWebType(e.target.value)} className="p-2 rounded-lg text-sm">
          <option>Portofolio</option>
          <option>E-Commerce</option>
          <option>Company Profile</option>
        </select>
        <label className="text-[20px] text-white">Backend :</label>
        <select value={backend} id="backend" onChange={(e) => setBackend(e.target.value)} className="p-2 rounded-lg text-sm">
          <option>Sanity</option>
          <option>MySql</option>
          <option>MongoDB</option>
          <option>JSON Server</option>
          <option>Supabase</option>
          <option>Firebase</option>
        </select>
        <label htmlFor="note" className="text-[20px] text-white">
          Note :
        </label>
        <input type="text" value={note} id="note" onChange={(e) => setNote(e.target.value)} className="h-[50px] border border-black p-2 rounded-lg" />
        <button className="bg-red-gradient text-white rounded-lg cursor-pointer w-[130px] p-3">Submit</button>
        {formError && <p className="text-white">{formError}</p>}
      </form>

      {/* Social Media */}
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
  );
};

export default Contact;
