import React from "react";
import { FaBox, FaClock, FaCheckCircle } from "react-icons/fa"; // Importing necessary icons

const Products = () => {
  return (
    <section id="products" className="bg-neutral-light py-32">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="font-heading text-4xl mb-6 text-teal-dark">
          Our Collection Is Coming Soon
        </h2>

        {/* Message about products */}
        <p className="text-lg text-neutral-dark mb-10 max-w-3xl mx-auto">
          We are working tirelessly to bring you the finest products. Our premium collection will soon hit the streets and stores, redefining comfort and style for legends like you. Stay tuned for the revolution in fashion.
        </p>

        {/* Icons with explanations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="flex flex-col items-center">
            <FaBox className="text-orange text-5xl mb-4" />
            <h4 className="font-body text-xl text-teal-dark mb-2">Premium Quality</h4>
            <p className="text-neutral-dark text-lg">Each product is crafted with utmost care and attention to detail.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-orange text-5xl mb-4" />
            <h4 className="font-body text-xl text-teal-dark mb-2">On Time Delivery</h4>
            <p className="text-neutral-dark text-lg">We’re committed to delivering the best, right on time.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-orange text-5xl mb-4" />
            <h4 className="font-body text-xl text-teal-dark mb-2">100% Satisfaction</h4>
            <p className="text-neutral-dark text-lg">You’ll love our products or we’ll make it right.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto">
          <h3 className="font-body text-2xl text-teal-dark mb-4">Get Ready for the Launch!</h3>
          <p className="text-neutral-dark mb-6">Our premium apparel is being crafted with precision. Soon, you’ll be able to experience the best in fashion and comfort.</p>
          <button className="bg-orange px-6 py-3 text-white text-lg rounded-lg hover:bg-orange-dark transition-colors duration-300">
            <FaCheckCircle className="inline mr-2" /> Notify Me When Available
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
