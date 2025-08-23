import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to <span className="text-blue-400">MyShop</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Discover amazing products at the best prices.
            Shop smart and explore our wide collection today!
          </p>
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Explore Products
          </Link>
        </div>

        {/* Right image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
