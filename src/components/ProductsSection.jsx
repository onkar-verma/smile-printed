import React from "react";

const products = [
  "Custom Fridge Magnets",
  "Polaroid",
  "Photo Keychains",
  "Custom Pin Badges",
  "Custom Stickers",
  "Photo Frames",
  "Acrylic Fridge Magnets",
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Our Custom Products
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md py-6 px-4 hover:shadow-lg transition-all"
          >
            <p className="font-semibold text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
