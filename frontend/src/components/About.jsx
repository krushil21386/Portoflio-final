import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, CloudLightning, BrainCircuit } from 'lucide-react'

const About = () => {
  const cards = [
    {
      title: "Cybersecurity Mindset",
      desc: "Thinking like an attacker to build unbreakable defenses. Focused on Defense-in-Depth and Zero Trust architectures.",
      icon: <ShieldAlert className="w-8 h-8 text-neonCyan" />,
      color: "border-neonCyan/30"
    },
    {
      title: "Cloud Journey",
      desc: "Scaling systems using AWS/Azure. Building resilient, highly available cloud-native environments.",
      icon: <CloudLightning className="w-8 h-8 text-neonPurple" />,
      color: "border-neonPurple/30"
    },
    {
      title: "AI Curiosity",
      desc: "Exploring the intersection of AI and Security. Leveraging machine learning for intelligent threat detection.",
      icon: <BrainCircuit className="w-8 h-8 text-neonGreen" />,
      color: "border-neonGreen/30"
    }
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">THE CORE <span className="text-neonCyan">STACK</span></h2>
          <div className="w-20 h-1 bg-neonCyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`glass p-8 rounded-3xl border ${card.color} hover:glass-active transition-all group`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
