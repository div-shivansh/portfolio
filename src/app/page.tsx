'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Send, MapPin, } from 'lucide-react'
import NeoPatternBg from '@/components/NeoPatternBg'
import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/ServiceSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactSection from '@/components/ContactSection'

// The roles that will cycle through
const ROLES = [
  "Full Stack Developer",
  "Generative AI Enthusiast",
  "MERN Stack Engineer",
  "React & Next.js Dev"
];

  const whatsappNumber = "919999075126"
  const whatsappMessage = encodeURIComponent("Hello Shivansh, I came across your portfolio and would like to connect with you!")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`


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

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  // console.log(ROLES[roleIndex]);

  return (
    // font-sans maps to Space Grotesk based on our previous layout setup
    <main className='relative font-space min-h-[calc(100vh-4rem)] overflow-hidden'>
      <HeroSection />
      <ServiceSection />
      <FeaturedProjects />
      <ContactSection />
      {/* <section id="services" className='relative w-full min-h-screen overflow-hidden'>

        <NeoPatternBg pattern='dots' bgColorClass='bg-yellow-400' />

        <div className='container mx-auto px-4 py-20 relative z-10'>

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
      </section> */}
    </main >
  )
}

export default Hero