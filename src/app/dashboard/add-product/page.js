"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
        }
    }, [status, router]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "unauthenticated") return null;

    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                user: session.user.email,
            }),
        });

        const data = await res.json();

        if (res.ok) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: data.message || "Product added successfully",
                showConfirmButton: false,
                timer: 1500,
            });


            setFormData({ name: "", description: "", price: "", image: "" });


            setTimeout(() => {
                router.push("/products");
            }, 1500);
        } else {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.message || "Something went wrong!",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded"
                    rows={3}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <input
                    type="url"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Save Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
