import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON')
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-acidGreen rounded-full z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-acidGreen/50 rounded-full z-[9998] pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: 0.5
        }}
      />
    </>
  )
}

export default Cursor
