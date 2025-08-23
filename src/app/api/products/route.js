import Products from "@/app/products/page";


export async function GET() {
  return Response.json(Products);
}
