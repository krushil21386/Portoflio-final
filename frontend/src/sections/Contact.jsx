import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Github, Linkedin, Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { supabase } from '../lib/supabase'
import SectionReveal from '../components/SectionReveal'

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      // Connect directly to Supabase contacts table
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          }
        ])

      if (error) throw error

      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Contact Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-surfaceLayer1/20 border-t border-white/5">
      <div className="container mx-auto">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Tactical Connection Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
                // 08_ESTABLISH_CONNECTION
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tight leading-none">
                Let's_Build_<br />
                The_Future
              </h2>
            </div>

            <p className="text-textSecondary font-body text-xl max-w-md leading-relaxed uppercase">
              Open to internships, collaborations, and conversations about security, cloud, or AI. 
              Let's build something that actually matters.
            </p>

            <div className="flex flex-col gap-6">
               {[
                 { icon: <Github size={18} />, label: "GITHUB", href: "https://github.com/krushil21386/", color: "text-acidGreen" },
                 { icon: <Linkedin size={18} />, label: "LINKEDIN", href: "https://linkedin.com/in/krushil-patel", color: "text-arcticIce" },
                 { icon: <Mail size={18} />, label: "EMAIL", href: "mailto:krushilpatel69@email.com", color: "text-plasmaOrange" },
               ].map((social) => (
                 <a
                   key={social.label}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex items-center gap-4 text-sm font-mono text-textSecondary hover:text-white transition-all w-fit"
                 >
                   <span className={`p-4 glass border-white/5 group-hover:border-acidGreen/30 transition-all ${social.color}`}>
                     {social.icon}
                   </span>
                   <span className="tracking-[0.2em] font-bold uppercase">[ {social.label} → ]</span>
                 </a>
               ))}
            </div>
          </div>

          {/* Right: Tactical Contact Form */}
          <div className="relative">
            <div className="glass p-10 border-white/5 relative overflow-hidden group">
               {/* Decorative corner brackets */}
               <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-acidGreen/20" />
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-acidGreen/20" />

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">USER_ID_NAME</label>
                        <input 
                           {...register("name", { required: true })}
                           placeholder="ENTER_NAME"
                           className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                        />
                        {errors.name && <span className="text-[8px] font-mono text-plasmaOrange uppercase">ERROR: NAME_REQUIRED</span>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">COMMS_ADDRESS_EMAIL</label>
                        <input 
                           {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                           placeholder="OPERATOR@SYSTEM.IO"
                           className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                        />
                        {errors.email && <span className="text-[8px] font-mono text-plasmaOrange uppercase">ERROR: INVALID_EMAIL_PROTOCOL</span>}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">TRANSMISSION_PROTOCOL</label>
                     <select 
                        {...register("subject", { required: true })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all appearance-none"
                     >
                        <option value="INTERNSHIP">INTERNSHIP_REQUEST</option>
                        <option value="COLLABORATION">COLLABORATION_PROPOSAL</option>
                        <option value="JUST_HI">GENERAL_COMMUNICATION</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">ENCRYPTED_MESSAGE_PAYLOAD</label>
                     <textarea 
                        {...register("message", { required: true })}
                        rows={5}
                        placeholder="TYPE_TRANSMISSION_HERE..."
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all resize-none"
                     />
                     {errors.message && <span className="text-[8px] font-mono text-plasmaOrange uppercase">ERROR: PAYLOAD_EMPTY</span>}
                  </div>

                  <button 
                     disabled={status === 'loading'}
                     className="w-full btn-acid-green flex items-center justify-center gap-3 py-4 uppercase"
                  >
                     {status === 'loading' ? (
                       <> <Loader2 className="animate-spin" size={18} /> INITIALIZING_TRANSPORT... </>
                     ) : status === 'success' ? (
                       <> <CheckCircle size={18} /> TRANSMISSION_RECEIVED_SUCCESSFULLY </>
                     ) : status === 'error' ? (
                       <> <AlertCircle size={18} /> ERROR: UPLINK_FAILURE_TRY_AGAIN </>
                     ) : (
                       <> <Send size={18} /> SEND_TRANSMISSION </>
                     )}
                  </button>
               </form>

               {/* Tactical Grid Background on Form */}
               <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="grid-bg h-full w-full" />
               </div>
            </div>
               
            {/* Status Metadata Strip */}
            <div className="mt-4 flex justify-between font-mono text-[9px] text-textSecondary uppercase tracking-widest px-2">
               <span>UPLINK_STATUS: {status === 'idle' ? 'STANDBY' : status.toUpperCase()}</span>
               <span>ENCRYPTION: AES-256_ACTIVE</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default Contact
