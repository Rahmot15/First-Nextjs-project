import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsFile = path.join(process.cwd(), "src/data/products.json");

export async function GET() {
  try {
    const data = fs.readFileSync(productsFile, "utf-8");
    const products = data ? JSON.parse(data) : [];
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = fs.readFileSync(productsFile, "utf-8");
    const products = data ? JSON.parse(data) : [];

    const newProduct = {
      id: products.length + 1,
      name: body.name,
      description: body.description,
      price: Number(body.price),
      image: body.image,
    };

    products.push(newProduct);

    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2), "utf-8");

    return NextResponse.json({
      message: "✅ Product added successfully!",
      product: newProduct,
    });
  } catch (err) {
    console.error(err); // check server console for exact error
    return NextResponse.json({ message: "Error saving product" }, { status: 500 });
  }
}
