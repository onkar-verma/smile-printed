import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-8">
      <p className="text-lg font-semibold">Smile Printed 💝</p>
      <p className="text-sm text-gray-400 mt-1">
        Custom Gifts & Printing | Memories That Last Forever
      </p>

      <div className="flex justify-center gap-4 mt-4 text-xl">
        <a
          href="https://www.instagram.com/smileprinted/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/919670010404"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Smile Printed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
