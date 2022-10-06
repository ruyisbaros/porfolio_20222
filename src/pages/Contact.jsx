import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactMask from "../assets/contact.jpg";
import ContactContent from "../components/ContactContent";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Header />
      <ContactContent
        contactMask={contactMask}
        ptext="Contact with me"
        head1="Let's have a chat"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
