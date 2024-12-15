'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from './MaxWidth'
import { Star } from 'lucide-react'

export default function ProductCarousel() {
  const products = [
    {
      id: 1,
      name: "CANDLE PEAR IN CARAMEL",
      price: 59.00,
      image: "/1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "SET OF FAVORITE CANDLES",
      price: 149.00,
      image: "/placeholder.svg?height=400&width=400",
      rating: 5
    },
    {
      id: 3,
      name: "CANDLE PINE RIVER AND LOTUS",
      price: 59.00,
      image: "/placeholder.svg?height=400&width=400",
      rating: 5
    },
    {
      id: 4,
      name: "SEA SALT AMBER YOGA",
      price: 59.00,
      image: "/placeholder.svg?height=400&width=400",
      rating: 5
    },
    {
      id: 5,
      name: "CANDLE LOTUS FLOWER",
      price: 59.00,
      image: "/placeholder.svg?height=400&width=400",
      rating: 5
    }
  ]

  return (
    <MaxWidthWrapper maxWidth="2xl">
      <section className="py-12 text-gray-100">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">YOU MAY LIKE</h2>
                <div className="flex lg:ml-auto gap-2 relative">
                  <CarouselPrevious className=" static translate-y-0 h-8 w-8 bg-red-500 hover:bg-red-600 text-white" />
                  <CarouselNext className=" static translate-y-0 h-8 w-8 bg-red-500 hover:bg-red-600 text-white" />
                </div>
              </div>
            </div>
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="border-0 bg-red-900/20 hover:bg-red-900/30 transition-colors">
                    <CardContent className="p-4">
                      <Link href={`/products/${product.id}`} className="space-y-3 block">
                        <div className="aspect-square overflow-hidden rounded-md">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-3 space-y-1">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className="fill-red-500 text-red-500"
                              />
                            ))}
                          </div>
                          <h3 className="text-sm font-semibold leading-tight tracking-wide text-gray-200">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-8">
            <Link
              href="/products"
              className="text-sm uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors"
            >
              Shop All
            </Link>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}

