"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchProducts, type Product } from '@/lib/productService';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidth';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const { products, categories, error } = await fetchProducts();
      
      if (error) {
        setError(error);
      } else {
        setProducts(products);
        setCategories(categories);
      }
      
      setLoading(false);
    };

    loadProducts();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.itemCategory === selectedCategory);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-950 to-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-950 to-black">
        <div className="text-red-500 text-center p-4 bg-red-950 rounded-lg max-w-lg">
          <h2 className="font-bold mb-2">Error Loading Products</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black text-gray-100">
      <MaxWidthWrapper maxWidth="2xl">
        <div className="px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">Our Products</h1>
            
            {categories.length > 0 && (
              <Select 
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48 bg-red-900/20 border-red-800 text-gray-200">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-red-950 border-red-800">
                  <SelectItem value="all" className="text-gray-200">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-gray-200">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="flex flex-col bg-red-900/20 border-red-800">
                  <CardHeader className="p-0">
                    <Image
                      src={product.asset?.imageUrl || '/fallback-image.jpg'}
                      alt={product.itemName || 'Product image'}
                      width={1000}
                      height={1000}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-200">{product.itemName}</h2>
                    <p className="text-gray-300 mb-2">{product.itemDescription}</p>
                    <p className="text-sm text-gray-400">Size: {product.itemSize}</p>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-red-800">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg font-bold text-red-500">
                        ${Number(product.itemPrice).toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400">
                        {product.itemCategory}
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">No products found in this category.</p>
              <p className="text-sm text-gray-500">
                Try selecting a different category or check if products have been added to the database.
              </p>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductsPage;

