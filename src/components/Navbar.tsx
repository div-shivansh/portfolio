"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="flex items-stretch justify-between border-y-3 border-black bg-[#fdfbf7] h-16 md:h20 font-geist px-2 sticky top-0 z-50">
      <div className="flex items-stretch justify-between w-full h-full container mx-auto border-black border-x-3">


        {/* Left: Logo Section */}
        <div className="flex items-center justify-center border-r-3 border-black px-4 lg:px-10 shrink-0">
          <Link
            href="/"
            // Uses font-bold to trigger font-2.woff2
            className="text-xl md:text-2xl font-semibold tracking-tight text-black"
          >
            Shivansh
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          {/* Uses font-medium to trigger font-3.woff2 */}
          <div className="flex gap-10 font-normal text-lg text-black">
            <Link href="/#work" className="hover:underline underline-offset-1 decoration-1">My work</Link>
            <Link href="/#services" className="hover:underline underline-offset-1 decoration-1">Services</Link>
            <Link href="/#about" className="hover:underline underline-offset-1 decoration-1">About</Link>
            <Link href="/#contact" className="hover:underline underline-offset-1 decoration-1">Contact</Link>
          </div>
        </div>

        {/* Right: CTA Text */}
        <div className="hidden md:flex items-center justify-center border-l-3 border-black px-4 lg:px-8 shrink-0 hover:bg-gray-100 transition-colors">
          <Link
            href="/#hire"
            // Uses font-bold to trigger font-2.woff2
            className="font-medium text-lg text-black"
          >
            Hire Me
          </Link>
        </div>

        {/* Far Right: Isolated Icon Block */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center bg-[#e4fc74] w-16 h-full border-l-3 md:w-20 shrink-0">
            {/* You can replace this inner div with an <Image> tag for your 3D cup/character icon */}
            <Button asChild variant={'default'} size="icon" className="rounded-full bg-black flex items-center justify-center pt-2 pr-0.5">
              <Link href="https://github.com/div-shivansh" target="_blank" rel="noopener noreferrer">
                <Image src="/Github.png" width={40} height={40} alt='Github' className='invert' />
              </Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center justify-center border-black border-l-3 w-16 h-full md:w-20 shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden items-center justify-center h-full w-16 shrink-0 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top Line */}
                <motion.path
                  animate={{ d: isMenuOpen ? "M 6 6 L 18 18" : "M 3 6 L 21 6" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                {/* Middle Line */}
                <motion.path
                  d="M 3 12 L 21 12"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                {/* Bottom Line */}
                <motion.path
                  animate={{ d: isMenuOpen ? "M 6 18 L 18 6" : "M 3 18 L 21 18" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              </motion.svg>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute md:hidden top-full right-0 left-0 bg-[#fdfbf7] border-y-3 border-black flex flex-col overflow-hidden z-50"
                >
                  <Link
                    href="/#work"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 border-b-3 border-black font-medium text-lg text-black hover:bg-gray-100 transition-colors"
                  >
                    My work
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 border-b-3 border-black font-medium text-lg text-black hover:bg-gray-100 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 border-b-3 border-black font-medium text-lg text-black hover:bg-gray-100 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 border-b-3 border-black font-medium text-lg text-black hover:bg-gray-100 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/#hire"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 bg-[#e4fc74] hover:bg-[#cce35a] font-bold text-lg text-black transition-colors"
                  >
                    Hire Me
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>


      </div>
    </nav>
  );
}