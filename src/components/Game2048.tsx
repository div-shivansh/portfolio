'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import Link from 'next/link'

const TILE_COLORS: Record<number, string> = {
  2: 'bg-white text-black',
  4: 'bg-yellow-200 text-black',
  8: 'bg-yellow-400 text-black',
  16: 'bg-rose-300 text-black',
  32: 'bg-rose-500 text-black',
  64: 'bg-cyan-300 text-black',
  128: 'bg-cyan-500 text-black',
  256: 'bg-emerald-300 text-black',
  512: 'bg-emerald-500 text-black',
  1024: 'bg-violet-400 text-white',
  2048: 'bg-black text-yellow-300',
}

// 1. TS Fix: Made boolean flags strictly required to satisfy the compiler
type Tile = {
  id: string
  val: number
  r: number
  c: number
  isNew: boolean
  isConsumed: boolean 
}

export default function Game2048() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [personalBests, setPersonalBests] = useState<number[]>([])
  
  // Mobile swipe state
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)

  // 2. React Linter Fix: Wrapped in a timeout to prevent synchronous cascading renders
  useEffect(() => {
    const savedScores = localStorage.getItem('2048-scores')
    if (savedScores) {
      setTimeout(() => {
        setPersonalBests(JSON.parse(savedScores))
      }, 0)
    }
  }, [])

  // Safely wrapped in useCallback so it can be passed as a dependency
  const saveScore = useCallback((finalScore: number) => {
    if (finalScore === 0) return
    setPersonalBests(prev => {
      const newScores = [...prev, finalScore].sort((a, b) => b - a).slice(0, 5)
      localStorage.setItem('2048-scores', JSON.stringify(newScores))
      return newScores
    })
  }, [])

  // 3. Hoisting Fix: Declaring dependencies BEFORE they are used
  const createRandomTile = useCallback((currentTiles: Tile[]): Tile | null => {
    const emptyCells = []
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (!currentTiles.find((t) => t.r === r && t.c === c && !t.isConsumed)) {
          emptyCells.push({ r, c })
        }
      }
    }
    if (emptyCells.length === 0) return null
    const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    return {
      id: Math.random().toString(36).substring(2, 9),
      val: Math.random() < 0.9 ? 2 : 4,
      r,
      c,
      isNew: true,
      isConsumed: false // Strictly defined
    }
  }, [])

  const checkGameOver = useCallback((currentTiles: Tile[], currentScore: number) => {
    const activeTiles = currentTiles.filter((t) => !t.isConsumed)
    if (activeTiles.length < 16) return

    let canMove = false
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const current = activeTiles.find((t) => t.r === r && t.c === c)
        if (!current) continue
        
        const right = activeTiles.find((t) => t.r === r && t.c === c + 1)
        const down = activeTiles.find((t) => t.r === r + 1 && t.c === c)
        if ((right && right.val === current.val) || (down && down.val === current.val)) {
          canMove = true
        }
      }
    }
    if (!canMove) {
      setGameOver(true)
      saveScore(currentScore) // Save score when game ends
    }
  }, [saveScore])

  const startNewGame = useCallback(() => {
    const t1 = createRandomTile([])
    const t2 = createRandomTile(t1 ? [t1] : [])
    setTiles([t1, t2].filter(Boolean) as Tile[])
    setScore(0)
    setGameOver(false)
    setGameWon(false)
  }, [createRandomTile])

  // Call startNewGame safely after it is declared
  useEffect(() => {
    const initTimer = setTimeout(() => {
        startNewGame()
    }, 0)
    return () => clearTimeout(initTimer)
  }, [startNewGame])

  useEffect(() => {
    if (tiles.some((t) => t.isConsumed)) {
      const timer = setTimeout(() => {
        setTiles((prev) => prev.filter((t) => !t.isConsumed))
      }, 200) 
      return () => clearTimeout(timer)
    }
  }, [tiles])

  const move = useCallback(
    (dir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
      if (gameOver || gameWon) return

      let moved = false
      const mergedIds = new Set()
      const nextTiles = tiles.map((t) => ({ ...t, isNew: false }))
      let newScore = score

      if (dir === 'LEFT') nextTiles.sort((a, b) => a.c - b.c)
      if (dir === 'RIGHT') nextTiles.sort((a, b) => b.c - a.c)
      if (dir === 'UP') nextTiles.sort((a, b) => a.r - b.r)
      if (dir === 'DOWN') nextTiles.sort((a, b) => b.r - a.r)

      nextTiles.forEach((tile) => {
        if (tile.isConsumed) return

        let nextR = tile.r
        let nextC = tile.c

        while (true) {
          let testR = nextR
          let testC = nextC
          if (dir === 'UP') testR--
          else if (dir === 'DOWN') testR++
          else if (dir === 'LEFT') testC--
          else if (dir === 'RIGHT') testC++

          if (testR < 0 || testR > 3 || testC < 0 || testC > 3) break

          const tileAtNext = nextTiles.find((t) => t.r === testR && t.c === testC && !t.isConsumed)

          if (tileAtNext) {
            if (tileAtNext.val === tile.val && !mergedIds.has(tileAtNext.id)) {
              nextR = testR
              nextC = testC
              tile.isConsumed = true 
              
              tileAtNext.val *= 2
              newScore += tileAtNext.val
              mergedIds.add(tileAtNext.id)
              moved = true
              
              if (tileAtNext.val === 2048) {
                setGameWon(true)
                saveScore(newScore + tileAtNext.val) // Save score on win
              }
            }
            break
          } else {
            nextR = testR
            nextC = testC
          }
        }

        if (tile.r !== nextR || tile.c !== nextC) {
          tile.r = nextR
          tile.c = nextC
          moved = true
        }
      })

      if (moved) {
        const newTile = createRandomTile(nextTiles)
        if (newTile) nextTiles.push(newTile)

        setTiles(nextTiles)
        setScore(newScore)
        checkGameOver(nextTiles, newScore)
      }
    },
    [tiles, score, gameOver, gameWon, checkGameOver, createRandomTile, saveScore]
  )

  // 4. Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
      }
      switch (e.key) {
        case 'ArrowUp': move('UP'); break
        case 'ArrowDown': move('DOWN'); break
        case 'ArrowLeft': move('LEFT'); break
        case 'ArrowRight': move('RIGHT'); break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [move])

  // 5. Mobile Touch Controls
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const dx = touchEndX - touchStart.x
    const dy = touchEndY - touchStart.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    // Minimum distance threshold to register as a swipe (30px)
    if (Math.max(absDx, absDy) > 30) {
      if (absDx > absDy) {
        move(dx > 0 ? 'RIGHT' : 'LEFT')
      } else {
        move(dy > 0 ? 'DOWN' : 'UP')
      }
    }
    setTouchStart(null)
  }

  return (
    <div className="min-h-screen bg-violet-400 font-space flex flex-col items-center justify-center p-4">
      <div className="flex justify-between items-end w-full max-w-md mb-8">
        <div>
          <h1 className="text-6xl font-londrina text-black leading-none drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            2048
          </h1>
          <Link href="/" className="text-black font-bold underline hover:text-white transition-colors uppercase tracking-wider text-sm">
            ← Back to Portfolio
          </Link>
        </div>

        <div className="bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center min-w-25">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60">Score</p>
          <p className="text-2xl font-bold text-black leading-none">{score}</p>
        </div>
      </div>

      <div 
        className="relative bg-black p-3 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] touch-none select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-4 grid-rows-4 gap-3 bg-stone-300">
          {Array(16).fill(0).map((_, i) => (
            <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-stone-400/30 border-4 border-black/10" />
          ))}
        </div>

        <div className="absolute inset-3 grid grid-cols-4 grid-rows-4 gap-3 pointer-events-none">
          <AnimatePresence>
            {tiles.map((tile) => (
              <motion.div
                layout 
                key={tile.id}
                initial={tile.isNew ? { scale: 0.5, opacity: 0 } : false}
                animate={{ 
                  scale: tile.isConsumed ? 0.8 : 1, 
                  opacity: tile.isConsumed ? 0 : 1 
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  opacity: { delay: tile.isConsumed ? 0.08 : 0, duration: 0.15 }, 
                }}
                className={`flex items-center justify-center text-3xl sm:text-4xl font-londrina tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  TILE_COLORS[tile.val] || 'bg-black text-white'
                }`}
                style={{
                  gridRow: tile.r + 1, 
                  gridColumn: tile.c + 1,
                  zIndex: tile.isConsumed ? 0 : 10,
                }}
              >
                {tile.val}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {(gameOver || gameWon) && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute inset-0 z-20 bg-yellow-400/90 backdrop-blur-sm flex flex-col items-center justify-center border-4 border-black"
          >
            <h2 className="text-5xl font-londrina text-black mb-6 drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
              {gameWon ? 'YOU WIN!' : 'GAME OVER'}
            </h2>
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 bg-rose-500 text-black border-4 border-black px-6 py-3 font-bold text-xl uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0 active:translate-y-0 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] cursor-pointer pointer-events-auto"
            >
              <RotateCcw size={24} strokeWidth={3} />
              Try Again
            </button>
          </motion.div>
        )}
      </div>

      <div className="mt-8 text-center bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
        <p className="font-space font-bold text-black uppercase tracking-widest text-nowrap text-xs sm:text-sm"><span className='md:inline hidden'>Use</span> <span className="bg-yellow-300 md:inline hidden px-2 py-1 border-2 border-black">Arrow Keys</span> <span className='md:inline hidden'>or</span> <span className="bg-cyan-300 px-2 py-1 border-2 border-black ">Swipe</span> to play
        </p>
      </div>

      {personalBests.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-londrina text-black mb-4 uppercase tracking-wider border-b-4 border-black pb-2">
            Local Top Scores
          </h3>
          <ul className="flex flex-col gap-2 font-space font-bold text-lg">
            {personalBests.map((s, index) => (
              <li key={index} className="flex justify-between items-center bg-cyan-100 p-2 border-2 border-black">
                <span className="text-black/50">#{index + 1}</span>
                <span className="text-black">{s} pts</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}