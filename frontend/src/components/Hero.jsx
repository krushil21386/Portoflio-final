import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Shield, Cloud, Cpu, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neonCyan/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 blur-[150px] rounded-full animate-pulse delay-1000"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-neonCyan/30 text-xs font-bold text-neonCyan tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonCyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neonCyan"></span>
          </span>
          System Status: Online
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4 leading-tight"
        >
          KRUSHIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">PATEL</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl font-light text-gray-400 mb-10 h-10"
        >
          <Typewriter
            words={['Securing Systems.', 'Scaling with Cloud.', 'Exploring AI.']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group btn-neon-cyan flex items-center gap-2 relative">
            <span className="absolute inset-0 bg-neonCyan/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
            INITIALIZE_PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-3 rounded-full text-gray-400 hover:text-white transition-all flex items-center gap-2 border border-white/5 hover:border-white/20 glass">
            ACCESS_RESUME.PDF
          </button>
        </motion.div>

        {/* Tech Stack Floating Icons */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between px-10 pointer-events-none hidden lg:flex">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="glass p-4 rounded-2xl border-neonCyan/20 mt-20">
            <Shield className="w-10 h-10 text-neonCyan opacity-50" />
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="glass p-4 rounded-2xl border-neonPurple/20 -mt-20">
            <Cloud className="w-10 h-10 text-neonPurple opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
