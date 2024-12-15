import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from './MaxWidth'

export default function Hero() {
  return (
    <MaxWidthWrapper maxWidth="2xl">
      <div className="relative overflow-hidden">
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="text-center lg:text-left lg:flex-1">
              <h1 className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                Embrace the Dark
                <span className="block text-red-500">Stay Cute</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Where adorable meets mysterious. Join our community of night owls and coffee lovers, where every sip tells a story.
              </p>
              <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 flex-1 sm:flex-none"
                  size="lg"
                >
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-950 flex-1 sm:flex-none"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative w-full max-w-sm lg:max-w-lg lg:flex-1">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 rounded-full bg-red-500/20 blur-2xl" />
                <Image
                  src="/bbb.png"
                  alt="Cute dark themed bunny"
                  width={400}
                  height={400}
                  className="relative mx-auto animate-float w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

