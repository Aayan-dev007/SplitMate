"use client";
import React from 'react'
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Unauthenticated,Authenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboardIcon } from 'lucide-react';
const Header = () => {
  const { isLoaded } = useUser();
  const path = usePathname(); 
  return (
     <header className="fixed top-0 w-full h-16 border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2"> 
          <Image 
            src="/logos/full.png" 
            alt="SplitMate" 
            width={200} 
            height={60} 
            className="h-16 w-auto object-contain"
          />
        </Link>
        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-green-600 transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-green-600 transition"
            >
              How It Works
            </Link>
          </div>
        )}
        <div className='flex items-center gap-4'>
          <Authenticated>
            <Link href="/dashboard">
              <Button 
                variant={"outline"}
                className="hidden md:inline-flex items-center gap-2 hover:text-green-600 hover:border-green-600 transition">
                  <LayoutDashboardIcon className="w-4 h-4" />
                  Dashboard
              </Button>
              <Button variant={"ghost"} className="md:hidden w-10 h-10 p-0">
                <LayoutDashboardIcon className="w-4 h-4" />
              </Button>

            </Link>
            <UserButton />
          </Authenticated>
          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"}>Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-green-600 hover:bg-green-700 border-none">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>

        </div>
      </nav>

      
      {!isLoaded && (
        <BarLoader
          width={"100%"}
          color="#36d7b7"
          cssOverride={{
            position: 'absolute',
            bottom: '-1px',
            left: 0
          }}
        />
      )}
    </header>
  )
}

export default Header
