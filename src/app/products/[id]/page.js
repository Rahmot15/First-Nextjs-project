import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import products from "@/data/products.json";
import Link from "next/link";

export default function ProductDetails({ params }) {
    const productId = parseInt(params.id, 10);
    const product = products.find((p) => p.id === productId);

    if (!product) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Link href="/products" className="text-blue-600 mb-4 inline-block">
                ← Back to Products
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-800 p-12 rounded-lg shadow">
                <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain"
                />

                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <p className="text-xl font-semibold mb-4">${product.price}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
