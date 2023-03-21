import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";
import SectionWrap from "../hoc/SectionWrap";
import { slideIn } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  // API keys
  const emailjsUserId = import.meta.env.VITE_REACT_APP_EMAILJS_USERID;
  const emailjsTemplateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID;
  const emailjsServiceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID;
  const zeroBounceApiKey = import.meta.env.VITE_REACT_APP_ZEROBOUNCE_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const verifyEmail = async (email) => {
    try {
      const response = await axios.get(
        `https://api.zerobounce.net/v2/validate?api_key=${zeroBounceApiKey}&email=${email}`
      );
      const { status } = response.data;
      if (status === "Valid") {
        setVerificationResult("valid");
      } else if (status === "Invalid") {
        setVerificationResult("invalid");
      } else {
        setVerificationResult("unknown");
      }
    } catch (error) {
      console.error(error);
      setVerificationResult("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert(
        "Veuillez remplir tous les champs du formulaire avant de l'envoyer."
      );
      return;
    }

    verifyEmail(form.email).then(() => {
      if (verificationResult === "valid") {
        emailjs
          .send(
            emailjsServiceId,
            emailjsTemplateId,
            {
              from_name: form.name,
              to_name: "Alexandre Patego",
              from_email: form.email,
              to_email: "alexandrepatego@gmail.com",
              message: form.message,
            },
            emailjsUserId
          )
          .then(
            () => {
              setLoading(false);
              alert(
                "Merci pour votre email, je vous recontacte dès que possible."
              );
              setSent(true);
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);

              alert(
                "Il semblerait qu'une erreur se soit glissé dans votre formulaiure..."
              );
            }
          );
      } else if (verificationResult === "invalid") {
        setLoading(false);
        alert("L'adresse email n'existe pas.");
      } else {
        setLoading(false);
        alert("Impossible de vérifier l'adresse email.");
      }
    });
  };

  return (
    <div className={`text contact `} id="contact">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`contact__container ${
          theme === "dark" ? "contact--dark" : "contact--light"
        }`}
      >
        <h3>Me contacter</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <label htmlFor="">
            <span>Votre nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
            />
          </label>
          <label htmlFor="">
            <span>Votre adresse email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre email ?"
            />
          </label>
          <label htmlFor="">
            <span>Votre message</span>
            <textarea
              rows="8"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Quel est votre message ?"
            />
          </label>

          <button type="submit" name="Envoyer">
            {loading ? "En cours d'envoi..." : sent ? "Envoyé !" : "Envoyer"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default SectionWrap(Contact, "");
