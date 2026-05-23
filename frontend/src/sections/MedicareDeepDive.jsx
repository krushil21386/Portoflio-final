import React from 'react'
import SecurityArchitecture from './SecurityArchitecture'
import { motion } from 'framer-motion'
import { ArrowLeft, ShieldAlert, Cpu, Activity, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const MedicareDeepDive = () => {
  return (
    <div className="min-h-screen bg-voidBlack pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-acidGreen/50 hover:text-acidGreen transition-colors uppercase tracking-[0.4em]">
              <ArrowLeft size={12} /> RETURN_TO_GLOBAL_SOC
            </Link>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter">
                MEDICARE<span className="text-acidGreen">+</span> <br />
                DEEP_DIVE
              </h1>
              <div className="flex items-center gap-4 text-textSecondary font-mono text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2"><ShieldAlert size={14} className="text-plasmaOrange" /> STATUS: DECLASSIFIED</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>SEC_LEVEL: ALPHA_7</span>
              </div>
            </div>
          </div>
          
          <div className="glass p-6 border-l-2 border-l-acidGreen flex items-center gap-6 max-w-md">
            <Activity size={32} className="text-acidGreen animate-pulse" />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-acidGreen uppercase font-bold tracking-widest">ENGINEER_ACCESS_TOKEN</div>
              <p className="text-[9px] font-mono text-textSecondary uppercase leading-relaxed">
                "Verified credential. Accessing full architecture specifications for Medicare+ Defense-in-Depth layer."
              </p>
            </div>
          </div>
        </div>

        {/* Reuse the Security Architecture visual component */}
        <section className="relative glass p-4 md:p-12 border-white/5 bg-surfaceLayer1/10 overflow-hidden">
           <SecurityArchitecture />
           
           {/* Additional Detail Layer for Deep Dive */}
           <div className="mt-20 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: 'TOKEN_STRATEGY', value: 'Double JWT (Access + Rotateable Refresh) with HttpOnly Cookie storage.', icon: <Lock size={20} className="text-arcticIce" /> },
                { label: 'THREAT_MODEL', value: 'Mitigates: CSRF, XSS (Sanitized payloads), Brute-force (Rate limited).', icon: <ShieldAlert size={20} className="text-plasmaOrange" /> },
                { label: 'RELIABILITY', value: 'Zero Trust approach — no data is trusted without multiple validation points.', icon: <Cpu size={20} className="text-acidGreen" /> },
              ].map(meta => (
                <div key={meta.label} className="space-y-4">
                   <div className="flex items-center gap-3">
                      {meta.icon}
                      <span className="font-mono text-xs text-acidGreen uppercase tracking-widest">{meta.label}</span>
                   </div>
                   <p className="text-[11px] font-mono text-textSecondary uppercase leading-relaxed">
                      {meta.value}
                   </p>
                </div>
              ))}
           </div>
        </section>
      </div>

      {/* Decorative BG element */}
      <div className="fixed bottom-0 left-0 p-10 opacity-5 pointer-events-none -z-10">
         <div className="text-[200px] font-display font-extrabold text-white leading-none overflow-hidden select-none whitespace-nowrap">
            SOC_V3.0_DEEP_DIVE
         </div>
      </div>
    </div>
  )
}

export default MedicareDeepDive
