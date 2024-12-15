'use client'

import { useState } from 'react'
import Link from "next/link"
import { ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MaxWidthWrapper from './MaxWidth'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const MenuItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="block py-2 text-sm font-medium text-gray-300 hover:text-red-400 transition-colors" onClick={toggleMenu}>
      {children}
    </Link>
  )

  return (
    <header className="bg-gradient-to-r from-red-950 to-black border-b border-red-800">
      <MaxWidthWrapper maxWidth="2xl">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2 text-gray-300 hover:text-red-400 hover:bg-red-900/20" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px] bg-gradient-to-br from-red-950 to-black border-r border-red-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <MenuItem href="/pages/products">SHOP</MenuItem>
                  <MenuItem href="/about">ABOUT</MenuItem>
                  <MenuItem href="/contact">CONTACT</MenuItem>
                  <MenuItem href="/favorites">MY FAVORITES</MenuItem>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="text-xl font-bold tracking-wider bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
              byebyebunny
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/pages/shop" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">SHOP</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">ABOUT</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">CONTACT</Link>
            <Link href="/favorites" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">MY FAVORITES</Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-300 hover:text-red-400 hover:bg-red-900/20"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              1
            </span>
          </Button>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

