import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Lock, Eye, Zap, Database, Globe, Cpu, ArrowDown, ChevronRight, Activity } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const SecurityArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState(null)

  const architectureLayers = [
    {
      id: 1,
      title: "LAYER 1: CLIENT REQUEST",
      subtitle: "Browser / Mobile App",
      color: "text-arcticIce",
      borderColor: "border-arcticIce/30",
      icon: <Globe size={18} />,
      details: "The entry point. Requests are initiated from the client-side. Sanitization begins here with frontend input validation."
    },
    {
      id: 2,
      title: "LAYER 2: RATE LIMITER",
      subtitle: "Brute-force protection / IP throttling",
      color: "text-plasmaOrange",
      borderColor: "border-plasmaOrange/30",
      icon: <Zap size={18} />,
      details: "Express-rate-limit prevents brute-force attacks by capping requests per IP (5 submissions per 15 mins). Blocks suspicious spikes instantly."
    },
    {
      id: 3,
      title: "LAYER 3: AUTH GATEWAY",
      subtitle: "JWT Verification / Access + Refresh logic",
      color: "text-acidGreen",
      borderColor: "border-acidGreen/30",
      icon: <Lock size={18} />,
      details: "The core gatekeeper. Validates short-lived Access Tokens. Securely handles Refresh Tokens stored in HttpOnly cookies."
    },
    {
      id: 4,
      title: "LAYER 4: RBAC ENGINE",
      subtitle: "Role-Based Access Control",
      color: "text-acidGreen",
      borderColor: "border-acidGreen/30",
      icon: <Shield size={18} />,
      details: "Dynamic role checks: [PATIENT, DOCTOR, ADMIN]. Ensures users can only access endpoints authorized for their specific role level."
    },
    {
      id: 5,
      title: "LAYER 5: BUSINESS LOGIC",
      subtitle: "RX Validation / Secure Data Sharing",
      color: "text-glowGold",
      borderColor: "border-glowGold/30",
      icon: <Activity size={18} />,
      details: "Application-tier security. Prescription validation logic and the expiring-link mechanism for secure, temporary medical record sharing."
    },
    {
      id: 6,
      title: "LAYER 6: AUDIT LOG",
      subtitle: "IP · Timestamp · User Agent",
      color: "text-plasmaViolet",
      borderColor: "border-plasmaViolet/30",
      icon: <Eye size={18} />,
      details: "Immutable logging of every sensitive action. Tracks who, when, and where. Critical for post-incident forensics and compliance."
    },
    {
      id: 7,
      title: "LAYER 7: DATABASE",
      subtitle: "MongoDB · Encrypted at rest",
      color: "text-arcticIce",
      borderColor: "border-arcticIce/30",
      icon: <Database size={18} />,
      details: "Final persistent layer. Data sanitized one final time before insertion. Encrypted at rest to prevent physical data breaches."
    }
  ]

  return (
    <section id="security" className="relative py-32 px-6 bg-surfaceLayer1/30">
      <div className="container mx-auto">
        <SectionReveal className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
             <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
                // 05_SECURITY_ARCHITECTURE
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
                Medicare+_<br />
                Defense_in_Depth
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Interactive Diagram */}
            <div className="space-y-4">
              <div className="font-mono text-[10px] text-textSecondary uppercase tracking-widest mb-6">
                 [ INTERACTIVE_DIAGRAM: CLICK_LAYER_TO_DECRYPT ]
              </div>
              
              <div className="space-y-2 relative">
                {/* Flow Animation Dot */}
                <motion.div
                  animate={{ 
                    top: ["0%", "100%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-acidGreen rounded-full blur-sm z-30"
                />

                {architectureLayers.map((layer, idx) => (
                  <React.Fragment key={layer.id}>
                    <motion.div
                      onClick={() => setActiveLayer(layer)}
                      className={`glass p-5 cursor-pointer group transition-all duration-300 border-l-4 ${layer.borderColor} 
                      ${activeLayer?.id === layer.id ? 'bg-white/10 translate-x-2' : 'hover:bg-white/5 hover:translate-x-1'}`}
                    >
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-4">
                            <span className={layer.color}>{layer.icon}</span>
                            <div>
                               <div className={`font-mono text-[11px] font-bold ${layer.color}`}>{layer.title}</div>
                               <div className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">{layer.subtitle}</div>
                            </div>
                         </div>
                         <ChevronRight size={14} className={`transition-transform duration-300 ${activeLayer?.id === layer.id ? 'rotate-90 text-acidGreen' : 'text-textSecondary/30'}`} />
                      </div>
                    </motion.div>
                    {idx < architectureLayers.length - 1 && (
                       <div className="h-4 flex justify-center opacity-20">
                          <div className="w-[1px] h-full bg-white" />
                       </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right: Layer Detail Panel */}
            <div className="lg:sticky lg:top-32 h-fit">
               <AnimatePresence mode="wait">
                  {activeLayer ? (
                    <motion.div
                      key={activeLayer.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="glass p-10 border-l-4 border-l-acidGreen space-y-8"
                    >
                        <div className="space-y-2">
                           <div className="font-mono text-xs text-acidGreen uppercase tracking-widest">LAYER_{activeLayer.id}_SPECIFICATIONS</div>
                           <h3 className="text-3xl font-display font-extrabold uppercase tracking-tight">{activeLayer.title.split(': ')[1]}</h3>
                        </div>

                        <p className="text-textSecondary font-body text-lg leading-relaxed uppercase">
                           {activeLayer.details}
                        </p>

                        <div className="pt-8 border-t border-white/5">
                           <div className="text-[10px] font-mono text-textSecondary uppercase tracking-widest mb-4">SECURITY_ENGINEER_COMPLIANCE_NOTE</div>
                           <div className="p-4 bg-acidGreen/5 border border-acidGreen/20 text-acidGreen font-mono text-[10px] leading-relaxed uppercase">
                              "I implemented this layer using production-grade logic (JWT v3.x, IP-throttling modules, role-based middleware) to ensure end-to-end data integrity."
                           </div>
                        </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="glass p-10 border-white/5 space-y-8 h-[500px] flex flex-col justify-center items-center text-center"
                    >
                        <Shield size={64} className="text-acidGreen opacity-20 animate-pulse-slow" />
                        <div className="space-y-4 max-w-sm">
                           <h3 className="text-2xl font-display font-bold uppercase">System_Overview</h3>
                           <p className="text-xs font-mono text-textSecondary uppercase leading-relaxed">
                              Hover or click any layer on the left to decrypt the security architecture specifications. 
                              The diagram simulates the live "Defense-in-Depth" request flow engineered for Medicare+.
                           </p>
                        </div>
                    </motion.div>
                  )}
               </AnimatePresence>

               {/* Role Callout (Standalone card below) */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mt-8 glass p-6 border-l-2 border-l-acidGreen bg-acidGreen/5 group overflow-hidden"
               >
                  <div className="relative z-10 flex gap-4">
                     <Cpu size={24} className="text-acidGreen shrink-0" />
                     <div className="space-y-2">
                        <div className="text-[10px] font-mono text-acidGreen uppercase font-bold tracking-widest">MY_ROLE_AS_SECURITY_ENGINEER</div>
                        <p className="text-[10px] font-mono text-white/70 uppercase leading-relaxed">
                           "I designed and implemented the complete security layer for Medicare+. This includes the JWT token strategy, RBAC role matrix, audit trail schema, and the expiring-link mechanism for secure data sharing."
                        </p>
                     </div>
                  </div>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-white/5 -skew-x-12"
                  />
               </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default SecurityArchitecture
