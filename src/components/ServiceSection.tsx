import React from 'react'
import { Button } from './ui/button'
import GridBackground from './GridBackground'

export default function ServiceSection() {
    return (
        <section id='services' className="relative flex flex-col items-start justify-center border-black border-b-3 w-full font-geist">
            <GridBackground />
            <div className="w-full bg-white">
                <div className="container mx-auto w-full flex flex-col items-start justify-center py-8 px-1 font-space-grotesk">
                    <h3 className='font-space-grotesk text-base sm:text-lg mb-2'>Passion led us here</h3>
                    <h1 className='font-space-grotesk text-3xl sm:text-4xl'>What can I do for you</h1>
                </div>
            </div>
            <hr className='w-full border-black border-t-3' />
            <div className='px-2 w-full flex items-center justify-center'>
                <div className="container sm:mx-auto w-full grid grid-cols-1 lg:grid-cols-3 bg-[#f9f5f2] border-black border-x-3">
                    <div className='flex flex-col items-start justify-start p-6 md:p-8 border-black lg:border-r-3 not-lg:border-b-3'>
                        <Button asChild size={'icon'} className='bg-[#C4A1FF] rounded-full size-15 md:size-20 flex items-center justify-center md:mb-8 mb-4'>
                            <svg width="98" height="96" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.9998 73.1926C58.9743 73.1926 75.1669 57.4254 75.1669 37.9755C75.1669 18.5256 58.9743 2.75836 38.9998 2.75836C19.0252 2.75836 2.83266 18.5256 2.83266 37.9755C2.83266 57.4254 19.0252 73.1926 38.9998 73.1926Z" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path><path d="M39.0001 73.1926C52.4297 73.1926 63.3166 57.4254 63.3166 37.9755C63.3166 18.5256 52.4297 2.75836 39.0001 2.75836C25.5705 2.75836 14.6836 18.5256 14.6836 37.9755C14.6836 57.4254 25.5705 73.1926 39.0001 73.1926Z" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path><path d="M39 73.1926C43.9886 73.1926 48.0325 57.4254 48.0325 37.9755C48.0325 18.5256 43.9886 2.75836 39 2.75836C34.0115 2.75836 29.9675 18.5256 29.9675 37.9755C29.9675 57.4254 34.0115 73.1926 39 73.1926Z" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path><path d="M2.83266 37.9754L75.1669 37.9754" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path><path d="M64.7731 13.2731C57.1559 17.001 48.3638 19.1273 39.0002 19.1273C29.6366 19.1273 20.8445 17.001 13.2272 13.2731" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path><path d="M12.7211 62.1704C20.454 58.2874 29.4285 56.0656 38.9997 56.0656C48.5711 56.0656 57.5455 58.2874 65.2783 62.1704" stroke="black" strokeWidth="1" strokeMiterlimit="10"></path></svg>
                        </Button>
                        <h2 className='font-space-grotesk text-2xl mb-4'>Web Development</h2>
                        <p className='text-base font-normal'>From concept to code, I build responsive, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.</p>
                    </div>
                    <div className='flex flex-col items-start justify-start p-6 md:p-8 border-black lg:border-r-3 not-lg:border-b-3'>
                        <Button asChild size={'icon'} className='bg-[#E7F193] rounded-full size-15 md:size-20 flex items-center justify-center md:mb-8 mb-4'>
                            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.2477 14.0118H28.7533C26.4672 14.0118 24.6136 15.8654 24.6136 18.1515V59.8494C24.6136 62.1355 26.4672 63.9891 28.7533 63.9891H49.2477C51.5337 63.9891 53.3874 62.1355 53.3874 59.8494V18.1515C53.3874 15.8654 51.5337 14.0118 49.2477 14.0118ZM32.893 16.939C33.03 16.802 33.2182 16.7172 33.4261 16.7172H44.5749C44.9905 16.7172 45.3288 17.0546 45.3288 17.4712C45.3288 17.679 45.244 17.8663 45.108 18.0033C44.971 18.1394 44.7827 18.2242 44.5749 18.2242H33.4261C33.0104 18.2242 32.6721 17.8868 32.6721 17.4712C32.6721 17.2633 32.7569 17.0751 32.893 16.939ZM41.4986 61.348C41.3206 61.5251 41.0755 61.6351 40.8043 61.6351H37.1967C36.6543 61.6351 36.2154 61.1952 36.2154 60.6547C36.2154 60.3844 36.3253 60.1384 36.5024 59.9613C36.6804 59.7833 36.9255 59.6742 37.1967 59.6742H40.8043C41.3466 59.6742 41.7856 60.1132 41.7856 60.6547C41.7856 60.9249 41.6756 61.17 41.4986 61.348ZM51.3967 55.1627C51.3967 56.2941 50.4788 57.2102 49.3493 57.2102H28.6508C27.5203 57.2102 26.6033 56.2931 26.6033 55.1627V22.8373C26.6033 21.7059 27.5213 20.7898 28.6508 20.7898H49.3493C50.4797 20.7898 51.3967 21.7068 51.3967 22.8373V55.1627Z" fill="black"></path></svg>
                        </Button>
                        <h2 className='font-space-grotesk text-2xl mb-4'>Mobile Development</h2>
                        <p className='text-base font-normal'>Create native and cross-platform mobile applications with seamless user experiences using React Native and Flutter frameworks.</p>
                    </div>
                    <div className='flex flex-col items-start justify-start p-6 md:p-8'>
                        <Button asChild size={'icon'} className='bg-[#AFFFA6] rounded-full size-15 md:size-20 flex items-center justify-center md:mb-8 mb-4'>
                            <svg width="84" height="78" viewBox="0 0 84 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.53 38.26L46.06 54.58H34.47L29 38.26C29 38.26 39.65 33.1 40.25 18.76C40.26 18.35 40.27 17.93 40.27 17.51C40.27 17.94 40.27 18.37 40.29 18.79C40.9 33.11 51.54 38.26 51.54 38.26H51.53Z" stroke="black" strokeWidth="2.07" strokeMiterlimit="10"></path><path d="M48.8 54.58H31.72V62.07H48.8V54.58Z" stroke="black" strokeWidth="2.07" strokeMiterlimit="10"></path><path d="M40.26 17.51V36.52" stroke="black" strokeWidth="2.07" strokeMiterlimit="10"></path><path d="M42.89 39.31C42.89 40.76 41.71 41.94 40.26 41.94C38.81 41.94 37.63 40.76 37.63 39.31C37.63 37.86 38.81 36.6801 40.26 36.6801C41.71 36.6801 42.89 37.86 42.89 39.31Z" stroke="black" strokeWidth="2.07" strokeMiterlimit="10"></path><path d="M61.46 17.28C61.46 17.28 57.92 12.15 51.81 17.28C45.7 22.41 40.21 18.75 40.21 18.75" stroke="black" strokeWidth="2.07" strokeMiterlimit="10"></path></svg>
                        </Button>
                        <h2 className='font-space-grotesk text-2xl mb-4'>UI/UX Design</h2>
                        <p className='text-base font-normal'>Design intuitive and engaging user interfaces with focus on user experience, accessibility, and modern design principles.</p>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}