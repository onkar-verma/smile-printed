import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ComingSoonAlert from "./components/ComingSoonAlert";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to from-white to-gray-50 text-gray-900 min-h-screen flex flex-col justify-between">
      <main>
        <ComingSoonAlert />
        <HeroSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
