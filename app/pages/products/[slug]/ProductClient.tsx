// app/products/[slug]/ProductClient.tsx
'use client';

import { type Product } from '@/lib/productService';
import Image from 'next/image';

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
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
          {/* Add interactive elements here */}
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              // Add to cart functionality
              console.log('Adding to cart:', product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}