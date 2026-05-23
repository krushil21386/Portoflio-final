import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Cloud, Cpu, ArrowRight } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const FutureGoals = () => {
  const goals = [
    {
      title: "SECURITY ENGINEER",
      desc: "Deepen expertise in penetration testing, cloud security, and secure architecture design. Crack top placements.",
      timeline: "NEAR-TERM",
      icon: <Shield className="w-8 h-8 text-acidGreen" />,
      color: "border-acidGreen/30",
      accent: "text-acidGreen"
    },
    {
      title: "CLOUD + SECURITY",
      desc: "Build cloud-native systems with security baked in from day zero. Infrastructure that scales and doesn't break.",
      timeline: "MID-TERM",
      icon: <Cloud className="w-8 h-8 text-arcticIce" />,
      color: "border-arcticIce/30",
      accent: "text-arcticIce"
    },
    {
      title: "AI-INTEGRATED SECURITY",
      desc: "Use intelligent systems to detect threats, automate defense, and build the next generation of secure platforms.",
      timeline: "LONG-TERM",
      icon: <Cpu className="w-8 h-8 text-plasmaViolet" />,
      color: "border-plasmaViolet/30",
      accent: "text-plasmaViolet"
    }
  ]

  return (
    <section id="trajectory" className="relative py-32 px-6">
      <div className="container mx-auto">
        <SectionReveal className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
             <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
                // 07_TRAJECTORY
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
                Neural_Expansion_<br />
                Future_Deployment
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Dashed Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-white/5 -translate-y-1/2 pointer-events-none hidden md:block" />

            {goals.map((goal, idx) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`glass p-10 flex flex-col items-center text-center space-y-6 group hover:translate-y-[-8px] transition-all duration-500 border-b-4 ${goal.color}`}
              >
                  <div className={`p-4 bg-white/5 rounded-full mb-2 group-hover:scale-110 transition-transform ${goal.accent}`}>
                     {goal.icon}
                  </div>
                  
                  <div className="space-y-2">
                     <div className={`font-mono text-[10px] tracking-[0.4em] uppercase font-bold ${goal.accent}`}>
                        [{goal.timeline}]
                     </div>
                     <h3 className="text-2xl font-display font-extrabold uppercase tracking-tighter leading-none">
                        {goal.title}
                     </h3>
                  </div>

                  <p className="text-[11px] font-mono text-textSecondary uppercase leading-relaxed max-w-[200px]">
                     {goal.desc}
                  </p>

                  <div className="pt-4 border-t border-white/5 w-full flex justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                     <div className="animate-pulse flex items-center gap-2">
                        <span className="text-[8px] font-mono uppercase tracking-[0.3em]">INITIALIZING</span>
                        <div className="w-1 h-1 bg-current rounded-full" />
                        <div className="w-1 h-1 bg-current rounded-full opacity-50" />
                        <div className="w-1 h-1 bg-current rounded-full opacity-20" />
                     </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 text-[200px] font-display font-extrabold text-white leading-none overflow-hidden select-none whitespace-nowrap">
          EXPANSION
        </div>
      </div>
    </section>
  )
}

export default FutureGoals
