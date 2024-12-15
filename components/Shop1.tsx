// 'use client';

// import { Star, Search } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { fetchProducts, type Product } from '@/lib/productService';

// export default function Shop() {
//   const router = useRouter();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const { products: fetchedProducts, error } = await fetchProducts();
//       if (error) {
//         setError(error);
//       } else {
//         setProducts(fetchedProducts);
//       }
//       setLoading(false);
//     };
//     loadProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen ">
//       <div className="max-w-[1200px] mx-auto p-4">
//         {/* Search Bar */}
//         <div className="flex items-center gap-2 mb-6 max-w-xs">
//           <Input
//             type="text"
//             placeholder="Search"
//             className="h-8 text-xs border-gray-200"
//           />
//           <Search className="w-4 h-4 text-gray-400" />
//         </div>
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] bg-[#e0e0e0]">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className="bg-white p-4"
//               onClick={() => router.push(`/products/${product.id}`)}
//             >
//               <div className="aspect-square overflow-hidden">
//                 <img
//                   src={product.asset}
//                   alt={product.itemName}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="mt-3 space-y-1">
//                 <div className="flex gap-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={12}
//                       className="fill-black text-black"
//                     />
//                   ))}
//                 </div>
//                 <h3 className="text-[11px] leading-tight tracking-wide">
//                   {product.itemName}
//                 </h3>
//                 <p className="text-[11px] text-gray-500">${product.itemPrice}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Load More */}
//         <div className="text-center mt-8">
//           <button className="text-xs uppercase tracking-wider text-gray-600">
//             Load More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
