import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Activity, FileCheck, Eye, Terminal } from 'lucide-react'

const MedicareDeepDive = () => {
  const securityLayers = [
    {
      title: "JWT Authentication",
      desc: "Dual-token system (Access + Refresh) with rotating secrets to prevent session hijacking.",
      icon: <Lock className="w-6 h-6 text-neonCyan" />
    },
    {
      title: "RBAC (Role-Based Control)",
      desc: "Granular access levels for Doctors, Patients, and Admins. Minimal privilege principle.",
      icon: <Shield className="w-6 h-6 text-neonPurple" />
    },
    {
      title: "Rate Limiting",
      desc: "Brute-force protection on all sensitive endpoints (Login, Reset Password, RX creation).",
      icon: <Activity className="w-6 h-6 text-neonGreen" />
    },
    {
      title: "Audit Logging",
      desc: "Full traceability: recording IP, timestamp, user agent, and action for every sensitive request.",
      icon: <FileCheck className="w-6 h-6 text-yellow-400" />
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-deepDark pt-24 pb-12 px-6 overflow-hidden relative"
    >
      <div className="container mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-neonCyan transition-all mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          TERMINATE_DEEP_DIVE
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            MEDICARE<span className="text-neonCyan">+</span> SECURITY ARCHITECTURE
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            A healthcare platform built on the principle of <span className="text-neonCyan">Defense-in-Depth</span>. 
            My role as <span className="text-white font-bold italic underline decoration-neonCyan">Security Engineer</span> was to ensure zero-compromise data integrity and user privacy.
          </p>
        </div>

        {/* Security Layers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {securityLayers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/5 flex gap-6 hover:glass-active transition-all"
            >
              <div className="flex-shrink-0 p-4 bg-white/5 rounded-2xl h-fit">{layer.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Diagram Section (Simplified Visualization) */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] border border-neonCyan/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-neonCyan/5 blur-3xl opacity-30"></div>
            <h2 className="text-3xl font-bold mb-12 relative z-10">THE SECURITY FLOW</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass rounded-full border-white/20 flex items-center justify-center animate-pulse"><Eye className="text-gray-400" /></div>
                <span className="text-xs font-mono">CLIENT_REQUEST</span>
              </div>
              <motion.div animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-px w-24 bg-gradient-to-r from-neonCyan to-neonPurple hidden md:block"></motion.div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass rounded-full border-neonCyan/40 flex items-center justify-center text-neonCyan"><Terminal className="w-8 h-8" /></div>
                <span className="text-xs font-mono">BACKEND_VALIDATION</span>
              </div>
              <motion.div animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="h-px w-24 bg-gradient-to-r from-neonPurple to-neonGreen hidden md:block"></motion.div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass rounded-full border-neonPurple/40 flex items-center justify-center text-neonPurple"><Shield className="w-8 h-8" /></div>
                <span className="text-xs font-mono">AUTH_POLICIES</span>
              </div>
              <motion.div animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="h-px w-24 bg-gradient-to-r from-neonGreen to-white hidden md:block"></motion.div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass rounded-full border-white/60 flex items-center justify-center text-white"><FileCheck className="w-8 h-8" /></div>
                <span className="text-xs font-mono">SECURE_DATA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Role Highlight */}
        <div className="glass p-12 rounded-[3.5rem] border border-neonPurple/30 relative mb-12">
          <h2 className="text-3xl font-bold mb-6 text-neonPurple underline decoration-white/20">ROLE: THE SECURITY ARCHITECT</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <span className="text-neonPurple">0x01:</span> Designed and implemented a custom authentication middleware using multiple secret rotation.
            </li>
            <li className="flex gap-3">
              <span className="text-neonPurple">0x02:</span> Configured Helmet, CORS, and Express-Rate-Limit to harden the server against common OWASP Top 10 vulnerabilities.
            </li>
            <li className="flex gap-3">
              <span className="text-neonPurple">0x03:</span> Conducted threat modeling sessions to identify and mitigate potential attack vectors in the patient data flow.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default MedicareDeepDive
