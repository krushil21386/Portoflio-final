import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShieldCheck, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      title: "Medicare+",
      category: "Cybersecurity / Flagship",
      desc: "Healthcare platform secured with Defense-in-Depth architecture. Role: Security Engineer.",
      tags: ["JWT", "RBAC", "Rate Limiting", "Audit Logging"],
      color: "border-neonCyan/40",
      featured: true,
      link: "/medicare-deep-dive"
    },
    {
      title: "Expenzo",
      category: "Full Stack",
      desc: "Comprehensive expense tracking system with robust backend and seamless data persistence.",
      tags: ["Node.js", "Express", "MongoDB", "Auth"],
      color: "border-neonPurple/40",
      featured: false,
      link: "#"
    },
    {
      title: "StackIt",
      category: "Frontend",
      desc: "Interactive Q&A platform focused on developer collaboration and high-speed data retrieval.",
      tags: ["React", "State Management", "API"],
      color: "border-neonGreen/40",
      featured: false,
      link: "#"
    },
    {
      title: "EcoTrack",
      category: "Frontend",
      desc: "Sustainability UI project visualizing environmental impact and tracking footprint goals.",
      tags: ["Tailwind", "Framer Motion", "UI/UX"],
      color: "border-yellow-400/40",
      featured: false,
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">PROJECT <span className="text-neonCyan">VAULT</span></h2>
          <div className="w-20 h-1 bg-neonCyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group glass border rounded-3xl overflow-hidden ${proj.color} p-8 hover:glass-active transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-mono text-neonCyan mb-2 block">{proj.category}</span>
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                </div>
                <div className="flex gap-3">
                  <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                  <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] uppercase tracking-wider font-bold border border-white/10 group-hover:border-neonCyan/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {proj.featured ? (
                <Link 
                  to={proj.link}
                  className="flex items-center gap-2 text-neonCyan font-bold text-sm tracking-widest group/btn"
                >
                  <ShieldCheck className="w-5 h-5 group-hover/btn:animate-pulse" />
                  INITIALIZE_DEEP_DIVE <ArrowRight className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              ) : (
                <button className="text-gray-500 font-bold text-sm tracking-widest cursor-not-available">
                  LOGS_ENCRYPTED
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
export default Projects
