'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hammer, Bell, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NeoPatternBg from '@/components/NeoPatternBg'

const ComingSoon = () => {
    const [email, setEmail] = useState('')
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setShowToast(true)
            // Hide the toast after 3 seconds
            setTimeout(() => setShowToast(false), 3000)
            setEmail('')
        }
    }

    return (
        <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center p-2 overflow-hidden">

            <NeoPatternBg pattern="stripes" bgColorClass="bg-violet-400" />

            {/* 1. Reduced p-8 md:p-16 to p-6 md:p-10 to shrink the overall height */}
            <motion.div
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative container z-10 w-full max-w-3xl bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 flex flex-col items-center text-center overflow-hidden"
            >
                <div
                    className="absolute top-0 left-0 w-full h-6 bg-yellow-400 border-b-4 border-black"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}
                />

                {/* 2. Reduced margins around the icon */}
                <div className="mt-4 mb-4 p-4 bg-yellow-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[3deg]">
                    <Hammer size={40} className="text-black" />
                </div>

                {/* 3. Shrunk text-6xl to 5xl so it fits better on small laptops */}
                <h1 className="text-5xl md:text-7xl font-londrina tracking-wide text-black mb-4 leading-none">
                    PROJECTS DROPPING <br />
                    <span className="text-rose-500 underline decoration-8 underline-offset-8">SOON</span>
                </h1>

                {/* 4. Reduced bottom margin from mb-12 to mb-8 */}
                <p className="text-lg md:text-xl font-space font-medium text-black mb-8 max-w-xl">
                    I am currently in the lab crafting some high-performance SaaS tools and web apps. Drop your email below to get early access when we go live.
                </p>

                {/* 5. Removed the bottom gap previously used for the inline message */}
                <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        required
                        placeholder="Enter your best email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 p-4 border-4 border-black bg-cyan-100 font-space text-lg text-black placeholder:text-black/60 focus:outline-none focus:bg-yellow-200 transition-colors"
                    />
                    <Button
                        type="submit"
                        variant="default"
                        className="h-auto px-8 py-4 text-xl font-bold tracking-widest flex items-center justify-center gap-3 bg-emerald-400 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all"
                    >
                        NOTIFY ME
                        <Bell size={24} />
                    </Button>
                </form>
            </motion.div>

            {/* 6. The Neobrutalist Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-yellow-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="bg-emerald-400 border-2 border-black rounded-full p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <Check size={20} className="text-black stroke-[3]" />
                        </div>
                        <span className="font-space font-bold text-lg text-black pr-4">
                            You are on the list!
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default ComingSoon