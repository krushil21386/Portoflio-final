import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Database, Layout, Activity, Code, Laptop } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const Experience = () => {
  const experiences = [
    {
      year: "2024",
      role: "Security Engineer",
      project: "Medicare+ · Team Project",
      desc: "Architected Defense-in-Depth security system. Owned: JWT auth, RBAC, rate limiting, audit logging. Team role. Real deliverable. Production-grade thinking.",
      tags: ["JWT", "RBAC", "RATE_LIMITING", "AUDIT_LOGGING"],
      icon: <Shield size={18} className="text-acidGreen" />
    },
    {
      year: "2024",
      role: "Backend Lead",
      project: "Expenzo",
      desc: "Built a robust expense tracking engine with Node.js and MongoDB. Focused on clean data mapping and secure routing.",
      tags: ["NODE.JS", "MONGODB", "EXPRESS"],
      icon: <Database size={18} className="text-arcticIce" />
    },
    {
      year: "2023",
      role: "Frontend Developer",
      project: "StackIt & EcoTrack",
      desc: "Developed responsive UI components and interactive modules. Explored state management in React and clean CSS architectures.",
      tags: ["REACT", "TAILWIND", "JAVASCRIPT"],
      icon: <Layout size={18} className="text-plasmaViolet" />
    }
  ]

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <SectionReveal className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
             <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
                // 06_FIELD_LOG
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
                Operational_Timeline_<br />
                Deployment_History
             </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: 'easeInOut' }}
               className="absolute left-[23px] top-0 w-[1px] bg-gradient-to-b from-acidGreen via-white/5 to-white/0"
            />

            <div className="space-y-16 relative">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-10 items-start group"
                >
                  {/* Point */}
                  <div className="relative z-10 shrink-0 mt-8">
                     <div className="w-12 h-12 glass flex items-center justify-center border-white/5 group-hover:border-acidGreen/50 transition-colors">
                        {exp.icon}
                     </div>
                  </div>

                  {/* Content */}
                  <div className="glass p-8 flex-1 border-white/5 group-hover:bg-white/5 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                       <div>
                          <div className="font-mono text-xs text-acidGreen uppercase tracking-[0.3em] font-bold">[{exp.year}]</div>
                          <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{exp.role}</h3>
                       </div>
                       <div className="font-mono text-[10px] text-textSecondary uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5">
                          {exp.project}
                       </div>
                    </div>
                    
                    <p className="text-textSecondary font-body text-sm leading-relaxed uppercase mb-6 max-w-2xl">
                       {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {exp.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-mono border border-white/5 px-2 py-0.5 text-textSecondary uppercase tracking-widest">
                             {tag}
                          </span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none -z-10">
        <div className="text-[150px] font-display font-extrabold rotate-90 text-white select-none whitespace-nowrap">
           CHRONOLOGY
        </div>
      </div>
    </section>
  )
}

export default Experience
