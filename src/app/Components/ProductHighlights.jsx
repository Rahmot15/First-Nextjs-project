import React from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for work and gaming.",
    price: 1200,
    image:
      "https://i.ibb.co.com/FL4QD9Nw/Pngtree-modern-laptop-computer-with-screen-21059292.png",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with 5G connectivity.",
    price: 800,
    image:
      "https://i.ibb.co.com/JjLchF3V/Pngtree-modern-smartphone-with-large-screen-21183194.png",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 200,
    image:
      "https://i.ibb.co.com/7xSnj5Kb/vecteezy-headphone-audio-3d-concept-45051174.png",
  },
  {
    id: 4,
    name: "Watch",
    description: "Smartwatch with multiple features.",
    price: 150,
    image: "https://i.ibb.co.com/GvC7XznB/pngwing-com.png",
  },
  {
    id: 5,
    name: "Camera",
    description: "DSLR camera for photography lovers.",
    price: 500,
    image:
      "https://i.ibb.co.com/67xn6Bfv/vecteezy-plain-black-dslr-camera-14527495.png",
  },
  {
    id: 6,
    name: "Backpack",
    description: "Durable backpack for everyday use.",
    price: 80,
    image:
      "https://i.ibb.co.com/pBb4S00n/vecteezy-school-backpack-cutout-23522766.png",
  },
];

const ProductHighlights = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Product Highlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-700 p-6 rounded-lg flex flex-col items-center text-center hover:bg-gray-600 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="font-bold mb-4">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
