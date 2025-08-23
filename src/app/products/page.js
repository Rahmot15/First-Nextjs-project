import React from "react";
import Link from "next/link";
import products from "@/data/products.json"; // Direct import

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="font-bold mb-4">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
