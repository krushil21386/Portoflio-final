import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hexagon, Terminal, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const handleNav = (href) => {
    setIsOpen(false) // Close mobile menu if open
    
    if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home first, then scroll (using a small delay or state)
        navigate('/', { state: { scrollTo: href } })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      navigate(href)
    }
  }

  // Handle cross-page scrolling after navigation
  useEffect(() => {
    if (isHomePage && location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        // Clear state to prevent scrolling on every re-render
        window.history.replaceState({}, document.title)
      }, 100)
    }
  }, [location, isHomePage])

  const navLinks = [
    { name: 'ABOUT', href: '#hero' }, // About takes to top/homepage
    { name: 'SKILLS', href: '#arsenal' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact-footer' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-[5000] transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Monolith */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Hexagon className="w-full h-full text-acidGreen group-hover:rotate-90 transition-transform duration-700" />
            <span className="absolute font-mono text-xs font-bold text-white uppercase">KP_</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono text-acidGreen leading-none tracking-widest">KRUSHIL_OS</div>
            <div className="text-[10px] font-mono text-textSecondary leading-none uppercase">v3.0.Neural_Breach</div>
          </div>
        </motion.div>

        {/* Desktop Interface */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => handleNav(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="relative group text-xs font-mono tracking-[0.2em] text-textSecondary hover:text-acidGreen transition-colors"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-4 text-acidGreen">_</span>
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-acidGreen group-hover:w-full transition-all duration-300" 
              />
            </motion.button>
          ))}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-acid-green text-[10px] py-1.5 px-5"
          >
            RESUME.EXE
          </motion.button>
        </div>

        {/* Tactical Menu Control */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-acidGreen p-2 relative corner-reticle">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Tactical Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-voidBlack/95 backdrop-blur-xl z-[4999] flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link, i) => (
              <motion.button 
                key={link.name} 
                onClick={() => handleNav(link.href)} 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-2xl font-display text-textPrimary hover:text-acidGreen tracking-widest"
              >
                {link.name}
              </motion.button>
            ))}
            <button className="btn-acid-green mt-8">RESUME.EXE</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
