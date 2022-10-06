import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import Loading from "./loadingAnimation/Loading";

const Form = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSend(true);
    emailjs
      .sendForm(
        "service_9vbawhh",
        "template_f250sac",
        form.current,
        "HtuViRUxKuZjTGzYq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h4>Get in Touch</h4>
      <h2>Contact Me...</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ahmet.erdonmez77@gmail.com</h5>
            <a
              href="mailto:ahmet.erdonmez77@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me an email
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>I will turn you back quickly once I see your message.</h5>
            <a
              href="https://m.me/ahmet-erdonmez-085bb8141"
              target="_blank"
              rel="noreferrer"
            >
              Text me through Messenger
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+49 176 73881 902</h5>
            <a
              href="https://wa.me/+4917673881902"
              target="_blank"
              rel="noreferrer"
            >
              Text me through Whatsapp
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn ">
            {isSend ? <Loading /> : "Send Message"}
          </button>
        </form>
        <a href="#header" className="scroll__up">
          <BsArrowUpSquareFill />
        </a>
      </div>
    </section>
  );
};

export default Form;
