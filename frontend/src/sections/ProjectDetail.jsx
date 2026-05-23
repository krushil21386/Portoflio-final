import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShieldAlert, Cpu, Activity, Lock, Database, Code, Layout } from 'lucide-react'
import { supabase } from '../lib/supabase'

// Maps icon name strings (stored in DB) → Lucide components
const iconMap = {
  Database: (cls) => <Database size={20} className={cls} />,
  Code:     (cls) => <Code     size={20} className={cls} />,
  Layout:   (cls) => <Layout   size={20} className={cls} />,
  Activity: (cls) => <Activity size={20} className={cls} />,
  Lock:     (cls) => <Lock     size={20} className={cls} />,
  Cpu:      (cls) => <Cpu      size={20} className={cls} />,
}

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id.toLowerCase())
        .single()

      if (error || !data) {
        setProject({
          title: 'PROJECT_NOT_FOUND',
          subtitle: 'ERROR_404',
          description: 'The requested project intelligence is classified or unavailable.',
          stack: ['UNKNOWN'],
          details: []
        })
      } else {
        setProject(data)
      }
      setLoading(false)
    }

    fetchProject()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-voidBlack flex items-center justify-center">
        <span className="font-mono text-xs text-acidGreen/50 uppercase tracking-[0.4em] animate-pulse">
          // ACCESSING_INTEL...
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-voidBlack pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-acidGreen/50 hover:text-acidGreen transition-colors uppercase tracking-[0.4em]">
              <ArrowLeft size={12} /> RETURN_TO_GLOBAL_SOC
            </Link>
            <div className="space-y-4">
              <h1 className="text-[clamp(2rem,6vw,5rem)] font-display font-extrabold uppercase tracking-tighter leading-[1.1] break-words">
                {project.title.slice(0, -1)}
                <span className="text-acidGreen">{project.title.slice(-1)}</span> <br />
                DEEP_DIVE
              </h1>
              <div className="flex items-center gap-4 text-textSecondary font-mono text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <ShieldAlert size={14} className="text-plasmaOrange" /> STATUS: DECLASSIFIED
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>SEC_LEVEL: ALPHA_4</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 border-l-2 border-l-acidGreen flex items-center gap-6 max-w-md">
            <Activity size={32} className="text-acidGreen animate-pulse" />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-acidGreen uppercase font-bold tracking-widest">SYSTEM_READY</div>
              <p className="text-[9px] font-mono text-textSecondary uppercase leading-relaxed">
                "Accessing {project.subtitle} specifications. Verified source."
              </p>
            </div>
          </div>
        </div>

        <section className="relative glass p-4 md:p-12 border-white/5 bg-surfaceLayer1/10 overflow-hidden">
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-display font-bold uppercase mb-4">Executive Summary</h3>
              <p className="text-textSecondary font-mono text-sm uppercase leading-loose">
                {project.description} Developed with focus on{' '}
                <span className="text-white">{project.stack?.join(', ')}</span>.
              </p>
            </div>

            {project.details?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                {project.details.map(meta => (
                  <div key={meta.label} className="space-y-4">
                    <div className="flex items-center gap-3">
                      {iconMap[meta.icon]?.(meta.color) ?? <Code size={20} className="text-acidGreen" />}
                      <span className="font-mono text-xs text-acidGreen uppercase tracking-widest">{meta.label}</span>
                    </div>
                    <p className="text-[11px] font-mono text-textSecondary uppercase leading-relaxed">
                      {meta.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 p-10 opacity-5 pointer-events-none -z-10">
        <div className="text-[200px] font-display font-extrabold text-white leading-none overflow-hidden select-none whitespace-nowrap">
          PROJECT_ARCHIVE_2024
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
