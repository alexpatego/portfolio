import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
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
    // Add honeypot field to the form state
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // API keys
  const emailjsUserId = import.meta.env.VITE_REACT_APP_EMAILJS_USERID;
  const emailjsTemplateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID;
  const emailjsServiceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if honeypot field has a value
    if (form.honeypot) {
      // Assume the form was submitted by a bot
      setLoading(false);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert(
        "Veuillez remplir tous les champs du formulaire avant de l'envoyer."
      );
      return;
    }
    // Validate email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(form.email)) {
      setLoading(false);
      alert("L'adresse email n'est pas valide.");
      return;
    }

    // Validate name
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(form.name)) {
      setLoading(false);
      alert("Le nom n'est pas valide.");
      return;
    }

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
          alert("Merci pour votre email, je vous recontacte dès que possible.");
          setSent(true);
          setForm({
            name: "",
            email: "",
            message: "",
            honeypot: "", // Reset honeypot field after successful submission
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
  };

  // Hide honeypot field from users with CSS
  const honeypotStyle = {
    position: "absolute",
    left: "-9999px",
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

          {/* Add honeypot field to the form */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={honeypotStyle}
          />

          <button type="submit" name="Envoyer">
            {loading ? "En cours d'envoi..." : sent ? "Envoyé !" : "Envoyer"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default SectionWrap(Contact, "");
