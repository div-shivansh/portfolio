'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageCard from '@/components/ui/image-card'
import { Button } from '@/components/ui/button' // Adjust path based on your shadcn setup
import Link from 'next/link'
import { Send, MapPin, } from 'lucide-react'
import NeoPatternBg from '@/components/NeoPatternBg'
import GridBackground from '@/components/GridBackground'
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
    bgColor: 'bg-cyan-300',
    message: "Hi Shivansh! I am interested in getting a custom Business Website built. Can we discuss the details and get a quote?"
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
    bgColor: 'bg-rose-300',
    message: "Hi Shivansh! I need an E-Commerce Store to sell my products online. Let's chat about the requirements."
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
    bgColor: 'bg-violet-300',
    message: "Hi Shivansh! I have an idea for a custom SaaS / Web App and need a full-stack developer to build it. When are you available to talk?"
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
    bgColor: 'bg-emerald-300',
    message: "Hi Shivansh! I'm looking to build a personal Portfolio/Brand website to showcase my work. Can you help me out?"
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

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 12 }
//   }
// }

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "919999075126"
  const whatsappMessage = encodeURIComponent("Hello Shivansh, I came across your portfolio and would like to connect with you!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "8835ab1d-43f6-4fad-be6c-a2af2e62b770");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      
      const data = await response.json()

      if (data.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        console.error("Form submission error:", data);
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className='flex flex-col items-center lg:items-start z-10'>

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
              className='text-6xl sm:text-7xl md:text-8xl text-wrap font-londrina tracking-wide text-stone-900 leading-none mb-4'
            >
              Hi, I&apos;m <span className="text-cyan-800">Shivansh</span>
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // 1. Changed to flex-col on mobile, flex-row on md screens
            // 2. Added a gap for mobile stacking
            // 3. Removed fixed h-12 from the parent container
            className='flex flex-col md:flex-row items-start md:items-center mb-6 text-2xl md:text-3xl font-bold text-stone-800 gap-2 md:gap-0'
          >
            <span className="md:mr-2 whitespace-nowrap">I am a</span>
            
            {/* 4. Added a fixed height specifically to the grid (h-10 md:h-12) 
                   so the vertical slide animation doesn't clip or jump */}
            <div className="grid overflow-hidden h-10 md:h-12 items-center w-full md:flex-1">
              <AnimatePresence>
                <motion.span
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
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
                <Link href="/projects" className='font-semibold'>View My Projects</Link>
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
            className='lg:flex hidden justify-end z-10'
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
            <span className="mb-4 px-4 py-1.5 bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-widest border-2 border-black">
              WHAT I OFFER
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-londrina tracking-wide text-black mb-6 bg-white inline-block px-6 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              Services Built Around Your Goals
            </h2>
            <p className="text-sm sm:text-xl max-w-3xl font-space font-medium text-black bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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
                  <h3 className="text-3xl sm:text-4xl font-londrina font-semibold tracking-wide text-black mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-base sm:text-xl font-space font-bold text-black opacity-90">
                    {service.subheading}
                  </h4>
                </div>

                {/* Card Body Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between font-space text-black">
                  <div>
                    <p className="text-sm sm:text-lg font-medium mb-6 leading-relaxed">
                      {service.body}
                    </p>

                    <div className="mb-8">
                      <p className="font-bold mb-3 uppercase tracking-wider text-xs sm:text-sm">What&apos;s Included:</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center font-medium text-xs sm:text-base">
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
                    asChild
                    variant="default"
                    size="lg"
                    className={`w-full text-sm sm:text-lg py-6 bg-white hover:bg-black/50 hover:text-white transition-colors`}
                  >
                    <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                    target="_blank" rel="noopener noreferrer"
                    >
                    {service.cta}
                    </Link>
                  </Button>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      <section id="contact" className="relative w-full min-h-screen overflow-hidden border-t-8 border-black flex items-center px-1 py-20">

        {/* Background: Thick polka dots on a bright pink background */}
        <NeoPatternBg pattern="dots" bgColorClass="bg-pink-400" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT COLUMN: Billboard & Info */}
            <div className="flex flex-col lg:items-start items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 px-4 py-1.5 bg-yellow-300 border-4 border-black font-bold text-base sm:text-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2"
              >
                Get In Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-7xl md:text-8xl font-londrina tracking-wide text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-8 leading-none"
              >
                LET&apos;S BUILD <br />
                <span className="text-black bg-white px-2 mt-2 inline-block border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  SOMETHING.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sm:text-xl text-sm font-space font-bold text-black bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md mb-12"
              >
                Whether it is a full-stack SaaS MVP, an e-commerce platform, or just a quick chat about web tech, I am always ready to connect.
              </motion.p>

              {/* Social & Contact Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 w-full max-w-md"
              >
                {/* Location Tag */}
                <div className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="text-rose-500" size={28} />
                  <span className="font-space font-bold text-base sm:text-xl uppercase">Delhi, India</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/div-shivansh" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-2 bg-black text-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <svg className='group-hover:invert' fill="#ffffff" width="30px" height="30px" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" /></svg>
                    <span className="font-space font-bold sm:text-base text-xs">GitHub</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-400 text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000" />
                    </svg>
                    <span className="font-space font-bold sm:text-base text-xs">WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] px-2 py-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-space font-bold text-xl uppercase tracking-wider text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 border-4 border-black bg-cyan-100 font-space text-lg text-black placeholder:text-black/50 focus:outline-none focus:bg-yellow-200 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-space font-bold text-xl uppercase tracking-wider text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 border-4 border-black bg-cyan-100 font-space text-lg text-black placeholder:text-black/50 focus:outline-none focus:bg-yellow-200 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-space font-bold text-xl uppercase tracking-wider text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full p-4 border-4 border-black bg-cyan-100 font-space text-lg text-black placeholder:text-black/50 focus:outline-none focus:bg-yellow-200 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  className="w-full mt-4 h-16 text-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-4 bg-rose-500 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-700 hover:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND IT'}
                  {!isSubmitting && <Send size={24} />}
                </Button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main >
  )
}

export default Hero