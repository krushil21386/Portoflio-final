import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BootSequence = ({ onComplete }) => {
  const [logs, setLogs] = useState([])
  const [isFinished, setIsFinished] = useState(false)

  const bootLogs = [
    { text: "INITIALIZING KRUSHIL_OS v3.0", delay: 100 },
    { text: "LOADING SECURITY MODULES", delay: 400 },
    { text: "CONNECTING TO CLOUD INFRASTRUCTURE", delay: 700 },
    { text: "AI SUBSYSTEMS ONLINE", delay: 1000 },
    { text: "BREACH DETECTED: TALENT OVERFLOW", delay: 1300, color: "text-plasmaOrange" },
    { text: "WARNING: EXCEPTIONAL AMBITION DETECTED", delay: 1600, color: "text-glowGold" },
    { text: "DECRYPTING PORTFOLIO DATA...", delay: 1900 },
    { text: "ACCESS GRANTED. WELCOME, OPERATOR.", delay: 2200, color: "text-acidGreen" },
  ]

  useEffect(() => {
    bootLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log])
        if (index === bootLogs.length - 1) {
          setTimeout(() => {
            setIsFinished(true)
            setTimeout(onComplete, 300)
          }, 500)
        }
      }, log.delay)
    })
  }, [])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[10000] bg-voidBlack flex items-center justify-center p-6 font-mono"
        >
          <div className="max-w-2xl w-full">
            <div className="space-y-1">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm md:text-base ${log.color || 'text-acidGreen/70'}`}
                >
                  <span className="opacity-50 mr-2">&gt;</span>
                  {log.text}
                  {i === logs.length - 1 && !isFinished && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-acidGreen ml-1 align-middle"
                    />
                  )}
                  <span className="float-right opacity-50">OK</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "linear" }}
              className="h-[1px] bg-acidGreen/30 mt-8 relative"
            >
              <div className="absolute right-0 top-[-20px] text-[10px] text-acidGreen/50 uppercase tracking-widest">
                System_Boot_Sequence_Progress
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BootSequence
