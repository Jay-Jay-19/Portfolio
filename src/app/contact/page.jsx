"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello 😊";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 md:h-full md:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1, }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* CONTACT FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 md:h-full md:w-1/2 mb-8 bg-red-50 rounded-xl text-xl md:text-sm xl:text-xl flex flex-col gap-8 justify-center p-12 md:p-18 xl:p-24"
        >
          <span>Cher Jay,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b border-b-gray-400 outline-none resize-none"
            name="user_message"
          />
          <span>Mon adresse email est :</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b border-b-gray-400 outline-none"
          />
          <span>Cordialement,</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3 text-lg">
            Envoyer 🚀
          </button>
          { success && <span className="text-green-600 font-semibold text-center ">🆗 Votre message a bien été envoyé !</span> }
          { error && <span className="text-red-600 font-semibold text-center">🤔 Echec de {`l'envoi`}, un problème est survenu...</span> }
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;