import Carousell from "@/components/Carousel";
import Hero from "@/components/Herosection";
import Product from "@/components/Product";
import ProductsPage from "@/components/ProductsPage";



export default function Home() {
  return (
    <div>
      <Hero />
      <Carousell />
      <ProductsPage />
      <Product />
    </div>
  );
}
