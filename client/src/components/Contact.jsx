import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-teal-200 to-teal-400">
      <div className="container mx-auto text-center text-teal-900">
        <h2 className="font-heading text-4xl mb-8">Get in Touch with Us!</h2>
        <p className="text-lg mb-6">
          We’re always here to help and hear from you! Whether it’s a question about our products, feedback, or just a hello, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="text-4xl mb-4 text-orange-500" />
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <a
              href="https://www.instagram.com/tee_culture69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-orange-600 hover:text-orange-800 transition-all duration-300"
            >
              @tee_culture69
            </a>
            <p className="text-sm text-neutral-dark mt-2">
              Stay updated with our latest collections, offers, and style inspiration!
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl mb-4 text-teal-800" />
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <a
              href="mailto:support@teeculture69.com"
              className="text-lg text-teal-600 hover:text-teal-800 transition-all duration-300"
            >
              support@teeculture69.com
            </a>
            <p className="text-sm text-neutral-dark mt-2">
              Have questions? Drop us an email, and we’ll get back to you soon!
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-4xl mb-4 text-teal-700" />
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg text-teal-600">+91-9876543210</p>
            <p className="text-sm text-neutral-dark mt-2">
              Call us Monday to Saturday, 10:00 AM - 6:00 PM.
            </p>
          </div>
        </div>

        <p className="text-sm mt-12">
          We’re here to make your experience with TeeCulture69 truly legendary. Let’s stay connected!
        </p>
      </div>
    </section>
  );
};

export default Contact;
