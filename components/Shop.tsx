import { Star, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidth'
import Link from 'next/link'

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "RETINOL SERUM + GRANACTIVE + VITA A",
      price: "$45.00",
      rating: 5,
      image: "/1.jpg"
    },
    {
      id: 2,
      name: "SALICYLIC ACID BHA SERUM + ZINC",
      price: "$38.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 3,
      name: "NIACINAMIDE POWDER + VITAMIN B3",
      price: "$42.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 4,
      isLifestyle: true,
      image: "/placeholder.svg?height=400&width=400",
      alt: "Lavender in mason jar"
    },
    {
      id: 5,
      name: "FACE MASSAGE ROLLER",
      price: "$28.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 6,
      name: "DARK SPOT CORRECTOR",
      price: "$35.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 7,
      name: "PEPTIDE FACE SERUM",
      price: "$48.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 8,
      name: "VITAMIN C SERUM",
      price: "$40.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 9,
      isLifestyle: true,
      image: "/placeholder.svg?height=400&width=400",
      alt: "Citrus fruits on branch"
    },
    {
      id: 10,
      name: "ANTI-AGING SERUM",
      price: "$52.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 11,
      name: "HYALURONIC ACID",
      price: "$38.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 12,
      name: "VITAMIN E OIL",
      price: "$32.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 13,
      name: "FACIAL CREAM",
      price: "$45.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 14,
      name: "MOISTURIZING CREAM",
      price: "$48.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      id: 15,
      isLifestyle: true,
      image: "/placeholder.svg?height=400&width=400",
      alt: "White flowers"
    },
    {
      id: 16,
      name: "CLEANSING LOTION",
      price: "$35.00",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black text-gray-100">
      <MaxWidthWrapper maxWidth="2xl">
        <div className="mx-auto p-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-6 max-w-xs">
            <Input 
              type="text" 
              placeholder="Search" 
              className="h-8 text-xs bg-red-900/20 border-red-800 text-gray-200 placeholder-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400" />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-red-900/20 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <Image
                      width={1000}
                      height={1000}
                      src={product.image}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {!product.isLifestyle && (
                    <div className="p-4 space-y-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-red-500 text-red-500"
                          />
                        ))}
                      </div>
                      <h3 className="text-sm leading-tight tracking-wide text-gray-200">
                        {product.name}
                      </h3>
                      <p className="text-sm text-red-400">{product.price}</p>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="text-xs uppercase tracking-wider text-red-400 border-red-800 hover:bg-red-900/50"
            >
              Load More
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

