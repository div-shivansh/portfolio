'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import GridBackground from './GridBackground';

export default function HeroSection() {
  // Staggered animation configuration for the left column
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const whatsappNumber = "919999075126"
  const whatsappMessage = encodeURIComponent("Hello Shivansh, I came across your portfolio and would like to connect with you!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    // The container border-x-[3px] ensures it perfectly aligns with your Navbar borders
    <section className="relative w-full overflow-hidden font-geist border-black border-b-3">
      <GridBackground />
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto py-12">
        
        {/* LEFT COLUMN: Copy & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 order-2 lg:order-1 z-10"
        >
          <motion.p variants={itemVariants} className="font-medium text-md md:text-lg lg:xl mb-4 text-stone-800">
            Hi, my name is Shivansh
          </motion.p>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-7xl lg:text-5xl font-space-grotesk xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-black"
          >
            I Turn Ideas <br />
            Into{' '}
            {/* The rotated highlight box */}
            <span className="inline-block bg-[#e4fc74] px-4 py-1 border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] -rotate-2 mt-2">
              Realities.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-md md:text-lg lg:xl text-stone-800 mb-10 leading-relaxed font-medium">
            I build high-performance web applications and integrate AI into scalable SaaS platforms. Currently studying Data Science at IIT Madras.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap sm:flex-nowrap font-space-grotesk gap-5 font-medium">
            {/* Primary Button */}
            <Button asChild variant="default" size="lg" className="bg-[#c69dfd] text-md md:text-lg lg:xl h-auto py-3 md:py-4">
              <Link 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get In Touch 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20L17 7M17 17V7H7"/>
                </svg>
              </Link>
            </Button>

            {/* Secondary Button */}
            <Button asChild variant="neutral" size="lg" className="text-md md:text-lg lg:xl h-auto py-3 md:py-4">
              <Link href="/projects">
                View My Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Hero Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 90 }}
          className="relative flex items-center justify-center order-1 px-5 lg:order-2 overflow-hidden"
        >
          {/* Constrain the image size so it remains responsive */}
          <div className="relative w-full hover:-translate-y-2 transition-transform duration-500">
            <Image 
              src="/Hero_image.png" 
              alt="Shivansh Tiwari - Available for freelance" 
              width={1200}
              height={1200}
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}