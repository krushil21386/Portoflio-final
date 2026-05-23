import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Shield, Cloud, Cpu, Terminal, Database, Lock, Eye, Globe } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: <Terminal className="w-6 h-6 text-acidGreen" />,
      skills: ["React", "Tailwind CSS", "JavaScript", "Vite", "Framer Motion"],
      color: "border-acidGreen",
      accent: "text-acidGreen",
      description: "Building immersive security-focused interfaces."
    },
    {
      title: "BACKEND",
      icon: <Database className="w-6 h-6 text-arcticIce" />,
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "C++"],
      color: "border-arcticIce",
      accent: "text-arcticIce",
      description: "Robust, scalable server-side systems."
    },
    {
      title: "CYBERSECURITY",
      icon: <Shield className="w-8 h-8 text-plasmaOrange" />,
      skills: ["JWT Auth", "RBAC", "Rate Limiting", "Audit Logging", "Secure Arch", "Input Validation"],
      color: "border-plasmaOrange",
      accent: "text-plasmaOrange",
      description: "My primary focus: building unbreakable systems.",
      highlight: true
    },
    {
      title: "CLOUD",
      icon: <Cloud className="w-6 h-6 text-arcticIce" />,
      skills: ["Deployment", "Scalability", "Infrastructure", "Container Concepts"],
      color: "border-arcticIce",
      accent: "text-arcticIce",
      description: "Modern distributed systems architecture."
    },
    {
      title: "AI",
      icon: <Cpu className="w-6 h-6 text-plasmaViolet" />,
      skills: ["LLM Exploration", "Intelligent Apps", "AI Security", "Future Tech"],
      color: "border-plasmaViolet",
      accent: "text-plasmaViolet",
      description: "Exploring the next frontier of secure AI."
    }
  ]

  return (
    <section id="arsenal" className="relative py-32 px-6">
      <div className="container mx-auto">
        <SectionReveal className="space-y-16">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
            <div className="space-y-4">
              <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
                // 03_ARSENAL
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
                Neural_Capabilities_<br />
                Stack_Optimization
              </h2>
            </div>
            <div className="text-[10px] font-mono text-textSecondary uppercase tracking-widest max-w-[200px] leading-relaxed">
              [ STATUS: ACTIVELY_UPGRADING ] <br />
              PRIMARY_FOCUS: CYBERSECURITY
            </div>
          </div>

          {/* Grid Interface */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`glass p-8 flex flex-col justify-between group h-full transition-all duration-500 overflow-hidden relative ${category.highlight ? 'lg:scale-105 border-plasmaOrange/40 z-20' : 'hover:border-white/20'}`}
              >
                {/* Visual Flair */}
                {category.highlight && (
                   <div className="absolute top-0 right-0 w-24 h-24 bg-plasmaOrange/5 blur-3xl rounded-full" />
                )}
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    {category.icon}
                    <div className="text-[8px] font-mono text-textSecondary/30 uppercase tracking-widest">
                      CHIP_SET_REV_3.0
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`text-xl font-display font-bold uppercase tracking-normal ${category.accent}`}>
                      {category.title}
                    </h3>
                    <p className="text-[10px] font-mono text-textSecondary/80 leading-tight uppercase">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.skills.map(skill => (
                      <span 
                        key={skill} 
                        className={`text-[9px] font-mono px-3 py-1 border ${category.color} bg-white/5 text-white/70 hover:text-white transition-colors uppercase`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bars (Visual only as requested) */}
                <div className="mt-8 space-y-3">
                    <div className="flex justify-between text-[8px] font-mono text-textSecondary uppercase">
                        <span>Optimization_Level</span>
                        <span className={category.accent}>OK</span>
                    </div>
                    <div className="h-[1px] bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: category.highlight ? "90%" : "70%" }}
                          transition={{ duration: 1.5, delay: idx * 0.2 }}
                          className={`absolute top-0 left-0 h-full ${category.highlight ? 'bg-plasmaOrange shadow-[0_0_8px_rgba(255,107,53,0.5)]' : 'bg-acidGreen/30'}`}
                        />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default Skills
