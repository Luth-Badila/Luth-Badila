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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject || !message || !note) {
      setFormError("Please fill in all the field correctly");
      return;
    }

    const { data, error } = await supabase.from("porto3").insert([{ subject, message, note }]);

    if (error) {
      setFormError("Please fill in all the field correctly");
    }
    if (data) {
      setFormError(null);
      console.log(data);
    }
  };

  return (
    <>
      <div className="sm:h-[120vh] h-[140vh] flex flex-col justify-center items-center pb-4 sm:pb-6">
        <h2 className="text-white text-4xl">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:w-[700px] w-[350px]">
          <label htmlFor="subject" className="text-[20px] text-white">
            Subject
          </label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="h-[50px] border border-black p-2 rounded-lg" />
          <label htmlFor="message" className="text-[20px] text-white">
            Message
          </label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="h-[100px] border border-black p-2 rounded-lg" />
          <label htmlFor="note" className="text-[20px] text-white">
            Note :
          </label>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="h-[50px] border border-black p-2 rounded-lg" />
          <button className="bg-red-gradient text-white rounded-lg cursor-pointer w-[130px] p-3">Submit</button>
          {formError && <p className="text-white">{formError}</p>}
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
