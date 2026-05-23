import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Mail, AlertTriangle, Terminal, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [bootStage, setBootStage] = useState(0) // For styling text loading sequences
  const navigate = useNavigate()

  useEffect(() => {
    // Check if operator is already authenticated
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        navigate('/admin')
      }
    }
    checkUser()
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setBootStage(1) // Stage 1: Authenticating

    // Mimic cyber console stages
    setTimeout(() => setBootStage(2), 600) // Stage 2: Decrypting

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      setBootStage(3) // Stage 3: Access Granted
      setTimeout(() => {
        navigate('/admin')
      }, 800)

    } catch (err) {
      setErrorMsg(err.message || 'ACCESS_DENIED: CREDENTIALS_INVALID')
      setLoading(false)
      setBootStage(0)
    }
  }

  return (
    <div className="min-h-screen bg-voidBlack flex items-center justify-center px-6 relative py-20">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid-bg h-full w-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md glass p-8 md:p-12 border-white/5 relative overflow-hidden group"
      >
        {/* Cyber-Tactical corner reticles */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-acidGreen" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-acidGreen" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-acidGreen" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-acidGreen" />

        <div className="space-y-8 relative z-10">
          {/* Header */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-acidGreen uppercase tracking-[0.3em] justify-center md:justify-start">
              <Terminal size={14} className="animate-pulse" /> // GATEKEEPER_UPLINK
            </div>
            <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight">
              Admin_<span className="text-acidGreen">Login</span>
            </h2>
            <p className="text-[10px] font-mono text-textSecondary uppercase tracking-widest leading-relaxed">
              "INPUT SECURITY KEYS TO ACCESS CORE INFRASTRUCTURE WORKSPACE"
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest flex items-center gap-2">
                  <Mail size={10} className="text-acidGreen" /> OPERATOR_ID_EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="OPERATOR@SYSTEM.IO"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest flex items-center gap-2">
                  <Lock size={10} className="text-acidGreen" /> SECURITY_PASSPHRASE
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-plasmaOrange/10 border border-plasmaOrange/30 text-plasmaOrange font-mono text-[9px] uppercase tracking-wider flex items-start gap-3"
              >
                <AlertTriangle size={16} className="shrink-0 animate-bounce" />
                <div>
                  <div className="font-bold">CRITICAL_AUTH_FAILURE:</div>
                  <div className="opacity-80">{errorMsg}</div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-acid-green flex items-center justify-center gap-3 py-4 uppercase font-bold text-xs"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  {bootStage === 1 && 'VERIFYING_IDENTITY...'}
                  {bootStage === 2 && 'DECRYPTING_SIGNATURES...'}
                  {bootStage === 3 && 'ACCESS_GRANTED...'}
                </>
              ) : (
                <>
                  <ShieldCheck size={16} /> INITIALIZE_UPLINK
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
