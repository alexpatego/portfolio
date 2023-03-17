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
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //0nkcZzTTPHszdwbyH
    //service_lvbodru
    //template_7pqgraz

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert(
        "Veuillez remplir tous les champs du formulaire avant de l'envoyer."
      );
      return;
    }

    emailjs
      .send(
        "service_lvbodru",
        "template_7pqgraz",
        {
          from_name: form.name,
          to_name: "Alexandre Patego",
          from_email: form.email,
          to_email: "alexandrepatego@gmail.com",
          message: form.message,
        },
        "0nkcZzTTPHszdwbyH"
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci pour votre email, je vous recontacte dés que possible.");

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

          <button type="submit">
            {loading ? "En cours d'envoi..." : "Envoyé"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default SectionWrap(Contact, "");
