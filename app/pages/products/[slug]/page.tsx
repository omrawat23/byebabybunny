// pages/products/[slug].tsx
import { fetchProducts, fetchProductBySlug, Product } from '@/lib/productService';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';
import Image from 'next/image';


interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { product, error } = await fetchProductBySlug(params.slug);

  if (error || !product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.itemName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image 
            src={product.asset.imageUrl} 
            alt={product.itemName} 
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <p className="text-xl mb-4">${product.itemPrice}</p>
          <p className="text-gray-600 mb-4">{product.itemDescription}</p>
          <div className="mb-4">
            <span className="font-semibold">Category: </span>
            {product.itemCategory}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Size: </span>
            {product.itemSize}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params using the fetchProducts function
export async function generateStaticParams() {
  const { products } = await fetchProducts();
  
  return products.map((product) => ({
    slug: product.id,
  }));
}