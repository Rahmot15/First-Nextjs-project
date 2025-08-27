import { getServerSession } from "next-auth";
import Hero from "./Components/Hero";
import ProductHighlights from "./Components/ProductHighlights";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <Hero />
      <ProductHighlights />
    </div>
  );
}
