'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageCard from '@/components/ui/image-card'
import { Button } from '@/components/ui/button' // Adjust path based on your shadcn setup
import Link from 'next/link'
import NeoPatternBg from '@/components/NeoPatternBg'
import GridBackground from '@/components/GridBackground'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

// The roles that will cycle through
const ROLES = [
  "Full Stack Developer",
  "Generative AI Enthusiast",
  "MERN Stack Engineer",
  "React & Next.js Dev"
];

const SERVICES = [
  {
    id: 'business',
    tag: 'Most Popular',
    title: 'Business Website',
    subheading: 'Your professional presence on the internet',
    body: "Perfect for local businesses, agencies, consultants, and service providers who want to look credible online. I'll build you a clean, fast, and mobile-friendly website that tells your story and brings in customers.",
    features: [
      'Home, About, Services & Contact pages',
      'Mobile responsive design',
      'Contact form with email integration',
      'SEO-ready structure',
      'Fast loading speed'
    ],
    cta: 'Get a Free Quote →',
    icon: '/building.svg',
    bgColor: 'bg-cyan-300' // Distinct neobrutalist colors for each
  },
  {
    id: 'ecommerce',
    tag: 'High Demand',
    title: 'E-Commerce Store',
    subheading: 'Sell your products online, 24/7',
    body: "Whether you're starting a new store or moving your existing shop online, I'll build a complete e-commerce solution with everything you need to start selling from day one.",
    features: [
      'Product listings & categories',
      'Cart & checkout system',
      'Payment gateway integration',
      'Order & inventory management',
      'Admin dashboard'
    ],
    cta: 'Start Selling Online →',
    icon: '/shopping.svg',
    bgColor: 'bg-rose-300'
  },
  {
    id: 'saas',
    tag: 'Custom Built',
    title: 'SaaS & Web Apps',
    subheading: "Got an idea? Let's build it together",
    body: "Have a business idea that needs a full web application? I build custom platforms with user authentication, dashboards, subscriptions, and everything in between — using the modern MERN stack.",
    features: [
      'User auth (login/signup/roles)',
      'Custom dashboards & data views',
      'REST API development',
      'Database design & management',
      'Scalable & maintainable code'
    ],
    cta: 'Discuss Your Idea →',
    icon: '/layout.svg',
    bgColor: 'bg-violet-300'
  },
  {
    id: 'portfolio',
    tag: 'For Creators',
    title: 'Portfolio & Brand',
    subheading: 'Make the internet remember you',
    body: "Whether you're a photographer, designer, freelancer, or any creative professional — I'll build you a stunning personal website that showcases your work and makes clients come to you instead of the other way around.",
    features: [
      'Custom portfolio gallery',
      'Personal bio & skills section',
      'Blog or case study pages',
      'Social media integration',
      'Clean, aesthetic design tailored to your style'
    ],
    cta: 'Build My Brand →',
    icon: '/pallet.svg',
    bgColor: 'bg-emerald-300'
  }
]

// 2. Framer Motion container variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const whatsappNumber = "919999075126"
  const whatsappMessage = encodeURIComponent("Hello Shivansh, I came across your portfolio and would like to connect with you!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

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
    <main className='relative font-space min-h-[calc(100vh-4rem)] overflow-hidden'>
      <section className='relative w-full min-h-[calc(100vh-4rem)] overflow-hidden'>
        <GridBackground />
        <div className='container mx-auto px-4.5 grid h-[calc(100vh-4rem)] lg:grid-cols-2 gap-12 items-center'>

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
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get In Touch
                </Link>
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
        </div>
      </section >
      {/* <hr className='border-3 border-t-black' />
      <section className='relative px-4.5 min-h-[calc(100vh-4rem)] w-full overflow-hidden'>
        <NeoPatternBg pattern='dots' bgColorClass='bg-yellow-500' />
        <div className='container mx-auto'>
        <div className="grid grid-cols-4 gap-6 min-h-[calc(100vh-4rem)] items-center py-12">
            <Card className="h-full p-2">
              <Image src='/building.svg' alt="building" width={40} height={40} />
            </Card>
            <Card className="h-full p-2">
              <Image src='/shopping.svg' alt="shopping" width={40} height={40} />
            </Card>
            <Card className="h-full p-2">
              <Image src='/layout.svg' alt="layout" width={40} height={40} />
            </Card>
            <Card className="h-full p-2">
              <Image src='/character.svg' alt="character" width={40} height={40} />
            </Card>
        </div>
        </div>
      </section> */}
      <section id="services" className='relative w-full min-h-screen overflow-hidden border-t-5 border-black'>
      
      {/* Background Pattern */}
      <NeoPatternBg pattern='dots' bgColorClass='bg-yellow-400' />
      
      <div className='container mx-auto px-4 py-20 relative z-10'>
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 px-4 py-1.5 bg-black text-white font-bold text-sm uppercase tracking-widest border-2 border-black">
            WHAT I OFFER
          </span>
          <h2 className="text-5xl md:text-7xl font-londrina tracking-wide text-black mb-6 bg-white inline-block px-6 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
            Services Built Around Your Goals
          </h2>
          <p className="text-xl max-w-3xl font-space font-medium text-black bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Whether you&apos;re a local shop, an online seller, or a startup with a big idea — I build fast, modern, and fully custom web solutions using React, Node.js, and MongoDB.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              // variants={cardVariants}
              // Neobrutalist hover effect: lifts up and pushes shadow down further
              className={`flex flex-col border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ${service.bgColor}`}
            >
              
              {/* Card Header Area */}
              <div className="p-6 md:p-8 border-b-4 border-black bg-white/50">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-sm">
                    <Image src={service.icon} alt={service.title} width={32} height={32} />
                  </div>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider border-2 border-black">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-4xl font-londrina font-semibold tracking-wide text-black mb-2">
                  {service.title}
                </h3>
                <h4 className="text-xl font-space font-bold text-black opacity-90">
                  {service.subheading}
                </h4>
              </div>

              {/* Card Body Area */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between font-space text-black">
                <div>
                  <p className="text-lg font-medium mb-6 leading-relaxed">
                    {service.body}
                  </p>
                  
                  <div className="mb-8">
                    <p className="font-bold mb-3 uppercase tracking-wider text-sm">What&apos;s Included:</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center font-medium ">
                          <span className="mr-2 mt-1 border-black border-2 rounded-full p-1.5">
                            <Image src="/check.svg" alt="Check" width={24} height={24} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="default" 
                  size="lg" 
                  className={`w-full text-lg py-6 bg-white hover:bg-black/50 hover:text-white transition-colors`}
                >
                  {service.cta}
                </Button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
    </main >
  )
}

export default Hero