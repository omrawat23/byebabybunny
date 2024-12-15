'use client'

import { useState } from 'react'
import { Heart, Minus, Plus, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from '@/components/MaxWidth'

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('100ML')
  const [selectedImage, setSelectedImage] = useState('/1.jpg')

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const images = [
    '/1.jpg',
    '/placeholder.svg?height=600&width=600&text=Image 2',
    '/placeholder.svg?height=600&width=600&text=Image 3',
    '/placeholder.svg?height=600&width=600&text=Image 4'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black text-gray-100">
      <MaxWidthWrapper maxWidth="2xl">
        {/* Breadcrumb - Responsive with wrapping and smaller text on mobile */}
        <div className="px-4 py-4 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 text-gray-400">
            <Link href="/shop" className="hover:text-red-400 transition-colors">Shop</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/shop/skincare" className="hover:text-red-400 transition-colors">Skincare</Link>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-200 w-full sm:w-auto text-center sm:text-left">Skin saviour body oil</span>
          </div>
        </div>

        {/* Product Detail - Responsive Grid */}
        <div className="px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Images - Responsive Layout */}
          <div className="flex flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Thumbnail Column - Horizontal on mobile, vertical on desktop */}
            <div className='flex flex-row lg:flex-col space-x-4 space-y-4 lg:space-x-0 lg:space-y-4  pb-4 lg:pb-0'>
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`relative flex-shrink-0 bg-red-900/20 border 
                    ${selectedImage === image ? 'border-red-500' : 'border-red-800'} 
                    rounded-md overflow-hidden transition-colors 
                    w-16 h-16 sm:w-24 sm:h-24`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Skin Saviour Body Oil Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image - Full width on mobile, standard size on desktop */}
            <div className="aspect-square relative bg-red-900/20 border border-red-800 rounded-lg overflow-hidden w-full">
              <Image
                src={selectedImage}
                alt="Skin Saviour Body Oil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Product Info - Responsive Typography and Spacing */}
          <div className="space-y-4 sm:space-y-6">
            <div className="pb-4 sm:pb-6 border-b border-red-800">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                SKIN SAVIOUR BODY OIL
              </h1>
              <div className="text-xl sm:text-2xl text-red-500">$58</div>
            </div>

            <div className="flex items-center gap-2 pb-4 sm:pb-6 border-b border-red-800">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-red-400 hover:underline cursor-pointer">(52 reviews)</span>
            </div>

            <div className="space-y-2 sm:space-y-4 pb-4 sm:pb-6 border-b border-red-800">
              <h2 className="font-medium text-gray-200 text-sm sm:text-base">DESCRIPTION</h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                This revitalizing body oil has been formulated to revive mature skin and 
                skin prone to scars and stretch marks. It contains Chilean Organic 
                Rosehip oil, bio retinol, to improve the appearance of scarred skin.
              </p>
            </div>

            <div className="space-y-2 pb-4 sm:pb-6 border-b border-red-800">
              <h2 className="font-medium text-gray-200 text-sm sm:text-base">FOR</h2>
              <p className="text-xs sm:text-sm text-gray-300">Scars & Stretch marks</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-200 text-sm sm:text-base">QTY:</span>
                <div className="flex items-center border border-red-800 rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-red-900/50 transition-colors"
                  >
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <span className="w-8 sm:w-12 text-center text-sm sm:text-base">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-red-900/50 transition-colors"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              <RadioGroup 
                value={selectedSize} 
                onValueChange={setSelectedSize} 
                className="flex flex-wrap gap-2 sm:gap-4"
              >
                {['100ML', '250ML', '300ML'].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={size} className="peer sr-only" />
                    <Label
                      htmlFor={size}
                      className="flex-1 border border-red-800 px-2 sm:px-4 py-1 sm:py-2 
                        text-xs sm:text-sm
                        peer-checked:border-red-500 cursor-pointer rounded-md transition-colors"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-2">
                <Button className="flex-1 h-10 sm:h-12 bg-red-500 text-white hover:bg-red-600 text-xs sm:text-base">
                  ADD TO CART
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-10 w-10 sm:h-12 sm:w-12 border-red-800 hover:bg-red-900/50"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}