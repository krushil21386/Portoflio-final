import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cloud, Layout, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-5 h-5 text-neonCyan" />,
      skills: ["JWT Authentication", "RBAC", "Rate Limiting", "Secure Architecture", "Audit Logging"]
    },
    {
      title: "Cloud Engineering",
      icon: <Cloud className="w-5 h-5 text-neonPurple" />,
      skills: ["AWS", "Azure", "Deployment", "Scalability", "Infrastructure"]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-5 h-5 text-white" />,
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "SQL"]
    },
    {
      title: "Frontend UI",
      icon: <Layout className="w-5 h-5 text-neonGreen" />,
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"]
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-5 h-5 text-yellow-400" />,
      skills: ["Neural Networks", "NLP", "Computer Vision", "Prompt Engineering"]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#050505]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">SKILL <span className="text-neonCyan">INDEX</span></h2>
          <div className="w-20 h-1 bg-neonCyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 group transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-neonCyan/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 hover:border-neonCyan/50 hover:text-neonCyan transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
