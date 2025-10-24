import React from "react";
import logo from "../assets/logo.svg";

const HeroSection = () => {
  return (
    <section className="text-center py-16 px-6">
      <img
        src={logo}
        alt="Smile Printed Logo"
        className="mx-auto w-24 h-24 mb-4"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">
        Smile Printed
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        We specialize in <strong>Custom Gifts & Printing</strong> — from
        personalized <strong>Fridge Magnets</strong>, <strong>Polaroids</strong>
        , and <strong>Keychains</strong> to <strong>Badges</strong>,{" "}
        <strong>Stickers</strong>, and <strong>Photo Frames</strong>. Perfect
        for gifts, events, and memories!
      </p>

      <div className="mt-8">
        <a
          href="#products"
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
