import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import GridBackground from './GridBackground';

const projects = [
    {
      title: "Reels Organizer",
      description: "A comprehensive dashboard designed to categorize, save, and manage short-form video content. Built with a scalable database infrastructure to help creators streamline their video curation workflow effortlessly.",
      image: "/reels_organizer.jpg",
      link: "https://reels-organizer.vercel.app",
      tags: [
        { label: "Next.js", color: "bg-[#e4fc74]" },
        { label: "Full Stack", color: "bg-[#ffb3c6]" }
      ],
      btnColor: "bg-[#e4fc74]"
    },
    {
      title: "Mark & Read",
      description: "A distraction-free bookmarking application focused on accessibility and reading experience. Allows users to save articles, highlight text, and organize daily reading lists with a clean, neo-brutalist interface.",
      image: "/mark&read.jpg",
      link: "https://mark-read.vercel.app",
      tags: [
        { label: "Productivity", color: "bg-[#a6f4ff]" },
        { label: "UI/UX", color: "bg-[#afffa6]" }
      ],
      btnColor: "bg-[#c4a1ff]"
    },
    {
      title: "Facetime Clone",
      description: "A real-time video calling application featuring seamless peer-to-peer communication. Engineered for high performance to ensure low-latency video and audio streaming across modern web browsers.",
      image: "/facetime.jpg",
      link: "https://facetime-jet.vercel.app",
      tags: [
        { label: "WebRTC", color: "bg-[#ffb3c6]" },
        { label: "Real-time", color: "bg-[#e4fc74]" }
      ],
      btnColor: "bg-[#afffa6]"
    }
  ];

export default function FeaturedProjects() {
    return (
        <section id='work' className="w-full flex flex-col font-geist  border-black border-b-3">
            {/* Top Banner */}
            <div className="w-full border-b-3 border-black bg-[#C4A1FF] py-6 md:py-8 flex justify-center items-center gap-4 md:gap-6 lg:gap-10 text-center overflow-hidden">
                {/* Yellow Crosses */}
                <div className="flex gap-2">
                    <CrossIcon />
                </div>

                <h2 className="font-space-grotesk text-xl sm:text-3xl lg:text-4xl font-semibold">
                    Featured Projects
                </h2>

                {/* Yellow Crosses */}
                <div className="flex gap-2">
                    <CrossIcon />
                </div>
            </div>

            {/* Main Grid Container */}
            <div className='w-full relative px-2'>
                <GridBackground />
                <div className="container mx-auto w-full border-x-[3px] md:px-8 px-4 border-black bg-[#f9f5f2]">

                    {/* Dynamic Project Mapping */}
        {projects.map((project, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 min-h-75 md:min-h-100 xl:min-h-125 border-b-[3px] border-black bg-[#f9f5f2]">
              
              {/* Image Cell */}
              <div 
                className={`relative aspect-square lg:aspect-auto lg:h-full border-b-[3px] lg:border-b-0 border-black overflow-hidden bg-[#e0e0e0] ${
                  isImageLeft ? 'lg:border-r-[3px]' : 'order-1 lg:order-2'
                }`}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out" 
                />
              </div>

              {/* Text Cell */}
              <div 
                className={`flex flex-col justify-center items-start p-6 md:p-8 lg:p-12 ${
                  isImageLeft ? '' : 'lg:border-r-[3px] border-black order-2 lg:order-1'
                }`}
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 ${tag.color} border-2 border-black text-xs font-semibold py px-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h3 className="font-space-grotesk text-2xl font-medium mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-800 text-base mb-8">
                  {project.description}
                </p>

                <Button asChild variant="default" size="lg" className={`${project.btnColor} text-base font-medium border-2 border-black py-1.5 px-4`}>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Now 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}

                    {/* =========================================
            EXPLORE MORE CTA 
            ========================================= */}
                    <div className="w-full flex flex-col justify-center items-center py-8 bg-[#fdfbf7] text-center px-6">
                        <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold mb-4 text-black">
                            Want to see more of my work?
                        </h3>
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="bg-[#e4fc74] font-space-grotesk text-lg sm:text-xl md:text-2xl border-[3px] border-black py-4 sm:py-8 px-4 sm:px-10 md:px-14"
                        >
                            <Link href="/projects">
                                Explore All Projects
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="ml-3">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Reusable Cross Icon Component for the Banner
function CrossIcon() {
    return (
        <svg width="100" height="42" viewBox="0 0 100 42" fill="none" className="w-12 h-6 md:w-16 md:h-8 xl:h-auto xl:w-auto" xmlns="http://www.w3.org/2000/svg"><path d="M6.42396 5.27501e-05L0.0599976 6.36401L34.8143 41.1183L41.1782 34.7543L6.42396 5.27501e-05Z" fill="#E7F193"></path><path d="M34.7543 0.0629674L0 34.8173L6.36396 41.1812L41.1183 6.42693L34.7543 0.0629674Z" fill="#E7F193"></path><path d="M64.424 5.27501e-05L58.06 6.36401L92.8143 41.1183L99.1782 34.7543L64.424 5.27501e-05Z" fill="#E7F193"></path><path d="M92.7543 0.0629674L58 34.8173L64.364 41.1812L99.1183 6.42693L92.7543 0.0629674Z" fill="#E7F193"></path></svg>
    );
}