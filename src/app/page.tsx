'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageCard from '@/components/ui/image-card'
import { Button } from '@/components/ui/button' // Adjust path based on your shadcn setup
import Link from 'next/link'

// The roles that will cycle through
const ROLES = [
  "Full Stack Developer",
  "Generative AI Enthusiast",
  "MERN Stack Engineer",
  "React & Next.js Dev"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Cycle through the roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  console.log(ROLES[roleIndex]);

  return (
    // font-sans maps to Space Grotesk based on our previous layout setup
    <main className='relative font-space min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-12 pb-24'>
      <section className='container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center'>
        
        {/* LEFT COLUMN: Text & CTAs */}
        <div className='flex flex-col items-start z-10'>
          
          {/* Small intro badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-1.5 bg-yellow-300 border-2 border-black font-bold text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Available for Work
          </motion.div>

          {/* Main Heading (Londrina Shadow) */}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-7xl md:text-8xl font-londrina tracking-wide text-stone-900 leading-none mb-4'
          >
            Hi, I&apos;m <span className="text-cyan-800">Shivansh</span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='h-12 flex items-center mb-6 text-2xl md:text-3xl font-bold text-stone-800'
          >
            <span className="mr-2 whitespace-nowrap">I am a</span>
            
            {/* THE FIX: Changed to grid, removed absolute positioning */}
            <div className="grid overflow-hidden h-full items-center flex-1">
              {/* Removed mode="wait" so they slide simultaneously like a slot machine */}
              <AnimatePresence>
                <motion.span
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  // col-start-1 and row-start-1 stack them in the same grid cell
                  // whitespace-nowrap ensures longer titles don't break onto two lines
                  className="col-start-1 row-start-1 whitespace-nowrap text-red-800 underline decoration-4 underline-offset-4"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description (Space Grotesk) */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-medium text-stone-700'
          >
            I build high-performance web applications and integrate AI into scalable SaaS platforms. Currently studying Data Science at IIT Madras.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant="default" size="lg" className="text-lg">
              <Link href="#projects" className='font-semibold'>View My Projects</Link>
            </Button>
            <Button asChild variant="neutral" size="lg" className="text-lg bg-white">
              <Link href="mailto:your-email@example.com">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3, 
            type: "spring", 
            stiffness: 100 
          }}
          className='flex justify-center lg:justify-end z-10'
        >
          {/* Wrapping the ImageCard in a div to add a secondary rotation for maximum Neobrutalism */}
          <div className="rotate-3 hover:rotate-0 transition-transform duration-300">
            <ImageCard 
              imageUrl='/Shivansh_portrait.jpeg' 
              caption='Coding the future.' 
              className='size-80 md:size-96 p-2 bg-red-800 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
            />
          </div>
        </motion.div>
        
      </section>
    </main>
  )
}

export default Hero