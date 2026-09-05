import type { Metadata } from 'next'
import Game2048 from '@/components/Game2048'

export const metadata: Metadata = {
  title: '2048 Neobrutalist Edition | Built by Shivansh Tiwari',
  description: 'Play a custom, Neobrutalist-styled version of 2048. Built from scratch with React, Next.js, and Framer Motion by Full Stack Developer Shivansh Tiwari.',
  keywords: [
    '2048 game', 
    'React 2048 clone', 
    'Next.js web game', 
    'Framer Motion animation', 
    'Neobrutalist web design', 
    'Shivansh Tiwari'
  ],
  openGraph: {
    title: '2048 Neobrutalist Edition | Shivansh Tiwari',
    description: 'Play a custom, Neobrutalist-styled version of 2048. Built from scratch with React, Next.js, and Framer Motion.',
    url: 'https://shivanshtiwari.in/play/2048',
  },
  alternates: {
    canonical: 'https://shivanshtiwari.in/play/2048',
  }
}

export default function PlayPage() {
  return <Game2048 />
}