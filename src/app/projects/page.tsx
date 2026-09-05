'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hammer, Bell, Check, Gamepad2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NeoPatternBg from '@/components/NeoPatternBg'
import Link from 'next/link'

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

                <div className="mt-4 mb-4 p-4 bg-yellow-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
                    <Hammer size={40} className="text-black" />
                </div>

                <h1 className="text-5xl md:text-7xl font-londrina tracking-wide text-black mb-4 leading-none">
                    PROJECTS DROPPING <br />
                    <span className="text-rose-500 underline decoration-8 underline-offset-8">SOON</span>
                </h1>

                <p className="text-lg md:text-xl font-space font-medium text-black mb-8 max-w-xl">
                    I am currently in the lab crafting some high-performance SaaS tools and web apps. Drop your email below to get early access when we go live.
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row gap-4 mb-8">
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

                {/* The Arcade Cross-Link to fix the Orphan Page issue */}
                <div className="w-full max-w-xl pt-8 border-t-4 border-dashed border-black/30 flex flex-col items-center gap-4">
                    <p className="font-space font-bold text-black/60 uppercase tracking-widest text-sm">
                        Bored waiting? Kill some time.
                    </p>
                    <Link 
                        href="/play/2048"
                        className="flex items-center gap-3 bg-rose-400 text-black border-4 border-black px-8 py-4 font-bold text-xl uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0 active:translate-y-0 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] -rotate-1"
                    >
                        <Gamepad2 size={28} strokeWidth={2.5} />
                        Play 2048
                    </Link>
                </div>
            </motion.div>

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
                            <Check size={20} className="text-black stroke-3" />
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