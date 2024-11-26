import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from React Icons

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl mb-8">Get in Touch</h2>
        <p className="text-lg text-neutral-dark">
          Follow us on Instagram{" "}
          <a
            href="https://www.instagram.com/tee_culture69/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange flex items-center justify-center"
          >
            <FaInstagram className="mr-2 text-2xl" /> 
            @tee_culture69
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
