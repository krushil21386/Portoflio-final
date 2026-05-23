import React from 'react'
import { Github, Linkedin, Mail, ShieldAlert } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact-footer" className="relative bg-voidBlack pt-20 pb-10 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand Visual */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <ShieldAlert className="w-5 h-5 text-acidGreen group-hover:rotate-12 transition-transform" />
              <span className="font-display text-xl font-bold tracking-widest text-textPrimary uppercase tracking-tighter">
                KRUSHIL_PATEL
              </span>
            </div>
            <p className="text-sm font-mono text-textSecondary max-w-xs leading-relaxed uppercase">
              // SECURING SYSTEMS. SCALING CLOUD. BUILDING INFRASTRUCTURE.
            </p>
          </div>

          {/* Tactical Socials */}
          <div className="flex items-center gap-6">
            {[
              { icon: <Github size={18} />, href: "https://github.com/krushil21386/", name: "GITHUB" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/krushil-patel", name: "LINKEDIN" },
              { icon: <Mail size={18} />, href: "mailto:krushil.patel@email.com", name: "EMAIL" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-mono text-textSecondary hover:text-acidGreen transition-all"
              >
                <span className="p-2 border border-white/5 group-hover:border-acidGreen/30 transition-colors">
                  {social.icon}
                </span>
                <span className="hidden sm:inline opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Global Footer Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-[10px] font-mono text-textSecondary tracking-widest uppercase">
            © {currentYear} KRUSHIL_OS v3.0 // ALL_SYSTEMS_OPERATIONAL
          </div>
          <div className="flex items-center gap-4 text-[9px] font-mono text-textSecondary/50 uppercase tracking-[0.2em]">
            <span>DESIGNED BY KRUSHIL PATEL</span>
            <span className="w-1 h-1 bg-acidGreen rounded-full" />
            <span>BUILT WITH REACT + VITE</span>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
        <div className="text-[120px] font-display font-extrabold text-white leading-none overflow-hidden select-none">
          DEFENDER
        </div>
      </div>
    </footer>
  )
}

export default Footer
