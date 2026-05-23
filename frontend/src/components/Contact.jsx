import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Globe } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('http://localhost:5000/api/contact', formData)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-deepDark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">ESTABLISH <span className="text-neonCyan">CONNECTION</span></h2>
          <div className="w-20 h-1 bg-neonCyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">KRUSHIL_PATEL <span className="text-gray-600 block text-sm tracking-widest mt-2 uppercase font-mono">ENCRYPTED_PORTAL</span></h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl border-neonCyan/20 group-hover:neon-glow transition-all">
                  <Mail className="w-6 h-6 text-neonCyan" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block">ENVELOPE_ADDR</span>
                  <span className="text-lg font-bold">krushil.patel@email.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl border-neonPurple/20 group-hover:neon-glow transition-all">
                  <Globe className="w-6 h-6 text-neonPurple" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block">DIGITAL_PRESENCE</span>
                  <span className="text-lg font-bold">linkedin.com/in/krushil-patel</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl border-neonGreen/20 group-hover:neon-glow transition-all">
                  <MapPin className="w-6 h-6 text-neonGreen" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 block">GEOLOCATION</span>
                  <span className="text-lg font-bold">Gujarat, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neonCyan/5 blur-3xl -z-10"></div>
            
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <CheckCircle className="w-20 h-20 text-neonGreen mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-2">TRANSMISSION_COMPLETE</h4>
                <p className="text-gray-400">Response protocol initiated.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-neonCyan font-bold text-sm tracking-widest underline decoration-white/10">RESEND_PACKET</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-gray-500 mb-2 block tracking-widest uppercase">Identity</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="NAME.LOG"
                    className="w-full bg-[#0a0a0a] border border-white/5 p-4 rounded-xl focus:outline-none focus:border-neonCyan transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-500 mb-2 block tracking-widest uppercase">Packet Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="EMAIL.HEX"
                    className="w-full bg-[#0a0a0a] border border-white/5 p-4 rounded-xl focus:outline-none focus:border-neonPurple transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-500 mb-2 block tracking-widest uppercase">Payload Data</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="MESSAGE_CONTENT.BIN"
                    className="w-full bg-[#0a0a0a] border border-white/5 p-4 rounded-xl focus:outline-none focus:border-neonGreen transition-all font-mono resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full btn-neon-cyan flex items-center justify-center gap-3 py-4 text-xs tracking-widest uppercase font-bold"
                >
                  {status === 'loading' ? 'ENCRYPTING...' : (
                    <>
                      TRANSMIT_PACKET <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-mono">
                    <AlertCircle className="w-4 h-4" /> TRANSMISSION_FAILED. RE-INITIALIZE.
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
