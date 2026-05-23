import React from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="container mx-auto">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Philosophical Statement */}
          <div className="space-y-8">
            <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
              // 01_ABOUT_ME
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight uppercase">
              I don't just write code — <br />
              <span className="text-acidGreen">I think like an attacker</span> <br />
              to build like a defender.
            </h2>

            <div className="space-y-6 text-textSecondary font-body text-lg leading-relaxed max-w-xl">
              <p>
                As a B.Tech IT student in my 3rd semester, I've pivoted my focus from standard development
                to the intricate world of <span className="text-textPrimary font-bold">Cybersecurity</span>. 
                My philosophy is simple: you cannot protect what you do not understand.
              </p>
              <p>
                I specialize in <span className="text-arcticIce">Defense-in-Depth</span> architectures, 
                leveraging <span className="text-plasmaOrange">Cloud Engineering</span> to build systems that aren't just 
                functional, but resilient against modern threat vectors.
              </p>
              <p>
                Currently exploring the intersection of <span className="text-plasmaViolet">AI</span> and 
                automated threat detection, aiming to build the next generation of intelligent, secure platforms.
              </p>
            </div>
          </div>

          {/* Right Column: Tactical JSON System Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Terminal Header */}
            <div className="glass bg-surfaceLayer2 p-8 font-mono text-sm leading-relaxed border-l-4 border-l-acidGreen relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 hover:opacity-100 transition-opacity">
                <div className="text-[10px] text-acidGreen uppercase tracking-widest">SYSTEM_VERSION_3.0</div>
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-textSecondary opacity-50">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[10px]">KRUSHIL_PROFILE.json — RO</span>
              </div>

              <div className="space-y-1">
                <div className="text-arcticIce">{`{`}</div>
                <div className="pl-6"><span className="text-acidGreen">"name"</span>: <span className="text-plasmaOrange">"Krushil Patel"</span>,</div>
                <div className="pl-6"><span className="text-acidGreen">"role"</span>: <span className="text-plasmaOrange">"Security Engineer"</span>,</div>
                <div className="pl-6"><span className="text-acidGreen">"semester"</span>: <span className="text-plasmaOrange">3</span>,</div>
                <div className="pl-6">
                  <span className="text-acidGreen">"focus"</span>: {`[`}
                  <div className="pl-6">
                    <span className="text-plasmaOrange">"Cybersecurity"</span>, 
                    <span className="text-plasmaOrange">"Cloud"</span>, 
                    <span className="text-plasmaOrange">"AI"</span>
                  </div>
                  {`]`},
                </div>
                <div className="pl-6"><span className="text-acidGreen">"status"</span>: <span className="text-plasmaOrange">"ACTIVELY BUILDING"</span>,</div>
                <div className="pl-6"><span className="text-acidGreen">"threat_lvl"</span>: <span className="text-plasmaOrange">"MAXIMUM AMBITION"</span></div>
                <div className="text-arcticIce">{`}`}</div>
              </div>

              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-acidGreen ml-6 mt-4 align-middle"
              />
              
              {/* Scanline inside terminal */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-scanline opacity-10" />
            </div>

            {/* Decorative Corner Reticles */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-acidGreen/30 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-acidGreen/30 pointer-events-none" />
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default About
