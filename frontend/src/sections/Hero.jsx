import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Shield, Cloud, Cpu, ArrowRight, Lock, Satellite, Database, Github, Linkedin } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Plasma Aurora Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-acidGreen/5 via-plasmaViolet/5 to-voidBlack blur-[120px] rounded-full animate-pulse-slow -z-10 opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Tactical Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 glass border-acidGreen/20 text-[10px] font-mono font-bold text-acidGreen tracking-[0.3em] uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acidGreen opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-acidGreen"></span>
          </span>
          [ SECURITY_ENGINEER / CLOUD_EXPLORER / AI_CURIOUS ]
        </motion.div>

        {/* Glitch Identity */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter mb-6 leading-[0.9] uppercase"
        >
          <motion.span 
             animate={{ x: [-2, 2, -1, 0], opacity: [0.8, 1, 0.9, 1] }} 
             transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
             className="block"
          >
            KRUSHIL
          </motion.span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-acidGreen to-arcticIce animate-glitch block">
            PATEL
          </span>
        </motion.h1>

        {/* Mission Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-2xl font-mono text-textSecondary mb-12 h-8 tracking-widest uppercase"
        >
          <Typewriter
            words={['Securing Systems.', 'Scaling with Cloud.', 'Exploring AI.','Building what matters.']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.div>

        {/* Action Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="group btn-acid-green flex items-center gap-3 relative corner-reticle py-4 px-10">
            INITIALIZE_PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="font-mono text-xs text-textSecondary hover:text-textPrimary tracking-[0.2em] transition-all flex items-center gap-2 px-8 py-3 glass hover:border-white/20 uppercase">
            ACCESS_RESUME.PDF
          </button>
        </motion.div>

        {/* Global Social Uplink */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2 }}
           className="mt-16 flex items-center justify-center gap-12 pt-8 border-t border-white/5 w-fit mx-auto"
        >
           <a href="https://github.com/krushil21386/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[10px] font-mono text-textSecondary hover:text-acidGreen transition-all tracking-[0.3em]">
              <Github size={14} className="group-hover:rotate-12 transition-transform" /> [ GITHUB_SRC ]
           </a>
           <a href="https://linkedin.com/in/krushil-patel" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[10px] font-mono text-textSecondary hover:text-arcticIce transition-all tracking-[0.3em]">
              <Linkedin size={14} className="group-hover:rotate-12 transition-transform" /> [ LINKEDIN_PROF ]
           </a>
        </motion.div>

        {/* Orbiting Badge Chips (Drifting Upward) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
          {[
            { Icon: Shield, label: 'JWT', top: '20%', left: '15%' },
            { Icon: Lock, label: 'RBAC', top: '70%', left: '10%' },
            { Icon: Cpu, label: 'Node.js', top: '15%', left: '80%' },
            { Icon: Satellite, label: 'Cloud', top: '65%', left: '85%' },
            { Icon: Database, label: 'MongoDB', top: '40%', left: '5%' },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: [100, -100], x: [0, Math.sin(i) * 30, 0] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1 }}
              className="absolute flex items-center gap-2 px-3 py-1 glass border-white/10"
              style={{ top: chip.top, left: chip.left }}
            >
              <chip.Icon size={12} className="text-acidGreen" />
              <span className="text-[10px] font-mono text-white/50">{chip.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vertical Stat Strip (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden lg:block font-mono text-[10px] text-textSecondary/50 space-y-2 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="text-acidGreen">04</span> PROJECTS
        </div>
        <div className="flex items-center gap-2">
          <span className="text-acidGreen">01</span> TEAM ROLE
        </div>
        <div className="flex items-center gap-2">
          <span className="text-acidGreen">∞</span> THINGS TO BUILD
        </div>
      </div>

      {/* Decorative Rotating Wireframe (Icosahedron) */}
      <div className="absolute top-1/4 right-1/4 opacity-5 select-none pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-96 h-96 border border-acidGreen animate-pulse-slow"
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
        />
      </div>
      
      {/* Scroll indicator rotated */}
      <div className="absolute bottom-32 right-10 hidden xl:block">
        <div className="rotate-90 origin-right flex items-center gap-4">
          <div className="h-[1px] w-20 bg-acidGreen/30" />
          <span className="font-mono text-[10px] text-acidGreen/50 uppercase tracking-[0.3em] overflow-hidden whitespace-nowrap">
            SCROLL_TO_EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
