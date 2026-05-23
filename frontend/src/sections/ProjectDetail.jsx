import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShieldAlert, Cpu, Activity, Lock, Database, Code, Layout, Terminal, BarChart3, Binary, Layers } from 'lucide-react'
import * as Lucide from 'lucide-react'
import { supabase } from '../lib/supabase'

// Dynamic Lucide Icon Resolver
const DynamicIcon = ({ name, className, size = 20 }) => {
  const IconComponent = Lucide[name] || Lucide.Code
  return <IconComponent className={className} size={size} />
}

// Maps icon name strings (stored in DB) → Lucide components for standard view fallback
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
          details: [],
          workflow: null
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

  // Check if project has an interactive workflow payload
  const hasWorkflow = project.workflow && typeof project.workflow === 'object'

  return (
    <div className="min-h-screen bg-voidBlack pt-32 pb-20 px-6">
      <div className="container mx-auto">
        
        {/* Unified Cyber Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-acidGreen/50 hover:text-acidGreen transition-colors uppercase tracking-[0.4em]">
              <ArrowLeft size={12} /> RETURN_TO_GLOBAL_SOC
            </Link>
            <div className="space-y-4">
              <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-display font-extrabold uppercase tracking-tighter leading-[1.1] break-words">
                {project.title.slice(0, -1)}
                <span className="text-acidGreen">{project.title.slice(-1)}</span> <br />
                {hasWorkflow ? 'SYSTEM_WORKFLOW' : 'DEEP_DIVE'}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-textSecondary font-mono text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <ShieldAlert size={14} className="text-plasmaOrange" /> STATUS: DECLASSIFIED
                </span>
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span>SEC_LEVEL: ALPHA_4</span>
                {hasWorkflow && (
                  <>
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span className="text-acidGreen">ACTIVE_PIPELINE: PRO_V2.0</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="glass p-6 border-l-2 border-l-acidGreen flex items-center gap-6 max-w-md w-full md:w-auto">
            <Activity size={32} className="text-acidGreen animate-pulse shrink-0" />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-acidGreen uppercase font-bold tracking-widest">SYSTEM_READY</div>
              <p className="text-[9px] font-mono text-textSecondary uppercase leading-relaxed">
                "Accessing {project.subtitle} specifications. Verified source."
              </p>
            </div>
          </div>
        </div>

        {/* WORKSPACE AREA: Dynamic Workflow or Default Specs Fallback */}
        {hasWorkflow ? (
          /* ====================================================
             DYNAMIC WORKFLOW SCHEMATIC RENDERER
             ==================================================== */
          <div className="space-y-16">
            {/* 8-Layer Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.workflow.layers?.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass p-6 border-white/5 hover:border-acidGreen/20 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-40 transition-opacity">
                    <span className="font-mono text-[8px] text-white tracking-widest">{layer.id}</span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-2 bg-white/5 w-fit rounded group-hover:bg-acidGreen/10 transition-colors">
                      <DynamicIcon name={layer.icon} className="text-acidGreen" size={20} />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-acidGreen uppercase tracking-widest opacity-70 mb-1">{layer.env}</div>
                      <h3 className="text-lg font-display font-extrabold uppercase tracking-tighter text-white">{layer.title}</h3>
                    </div>
                    <p className="text-[10px] font-mono text-textSecondary uppercase leading-relaxed h-12 overflow-hidden">
                      {layer.desc}
                    </p>
                    <div className="pt-3 border-t border-white/5">
                      <div className="text-[9px] font-mono text-acidGreen/60 uppercase">{layer.trigger}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Retro Logs & Metrics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Terminal Logs */}
              {project.workflow.execution_logs?.length > 0 && (
                <div className="lg:col-span-2 glass border-white/5 bg-voidBlack/40 p-6 md:p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <Terminal size={18} className="text-acidGreen animate-pulse" />
                    <h2 className="text-sm font-mono font-bold text-acidGreen uppercase tracking-widest">SYSTEM_EXECUTION_LOG</h2>
                    <div className="flex gap-1 ml-auto">
                      <div className="w-2 h-2 rounded-full bg-plasmaOrange/20 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-acidGreen" />
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-[10px] md:text-xs">
                    <div className="text-textSecondary/50 uppercase italic mb-4">“Every frame you see is the result of multiple synchronized processes running underneath.”</div>
                    {project.workflow.execution_logs.map((log, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i}
                        className="flex gap-4 items-start"
                      >
                        <span className="text-acidGreen/60 shrink-0 w-20">{log.tag}</span>
                        <span className="text-textSecondary uppercase">{log.msg}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics Panel */}
              {project.workflow.metrics?.length > 0 && (
                <div className="glass border-acidGreen/10 bg-voidBlack p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <BarChart3 size={18} className="text-plasmaOrange" />
                    <h2 className="text-sm font-mono font-bold text-plasmaOrange uppercase tracking-widest">SYSTEM_METRICS</h2>
                  </div>
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    {project.workflow.metrics.map((m, i) => (
                      <div key={i} className="border-b border-white/5 pb-4">
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">{m.label}</span>
                          <span className="text-lg font-display font-extrabold text-acidGreen">{m.val}</span>
                        </div>
                        <div className="text-[8px] font-mono text-white/20 uppercase text-right">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Depth & Complexity Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Whats happening */}
              {project.workflow.whats_happening?.length > 0 && (
                <div className="glass p-10 border-white/10 bg-surfaceLayer1/10 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Binary size={200} />
                  </div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <Layers size={24} className="text-acidGreen" />
                      <h3 className="text-xl font-display font-bold uppercase text-white">WHAT’S ACTUALLY HAPPENING_</h3>
                    </div>
                    <p className="text-xs font-mono text-textSecondary/60 uppercase leading-relaxed italic mb-6">
                      “This is not just a request-response cycle. It’s a reactive system.”
                    </p>
                    <ul className="space-y-4">
                      {project.workflow.whats_happening.map((item, i) => (
                        <li key={i} className="flex gap-4 border-l-2 border-acidGreen/20 pl-4 py-1">
                          <span className="text-acidGreen font-mono text-xs uppercase w-32 shrink-0">{item.label}</span>
                          <span className="text-textSecondary font-mono text-[10px] uppercase">→ {item.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Hidden complexity */}
              {project.workflow.hidden_complexity?.length > 0 && (
                <div className="glass p-10 border-white/10 bg-surfaceLayer1/10 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                    <Binary size={200} />
                  </div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <Zap size={24} className="text-plasmaOrange" />
                      <h3 className="text-xl font-display font-bold uppercase text-white">HIDDEN_COMPLEXITY_</h3>
                    </div>
                    <p className="text-xs font-mono text-textSecondary/60 uppercase leading-relaxed italic mb-6">
                      “What looks simple is actually optimized underneath.”
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {project.workflow.hidden_complexity.map((txt, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-textSecondary uppercase">
                          <div className="w-1.5 h-1.5 bg-plasmaOrange rounded-full shrink-0" />
                          {txt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Brain Flow Summary */}
            <div className="flex flex-col items-center gap-8 py-12 border-t border-white/5">
              <h2 className="text-sm font-mono font-bold text-acidGreen uppercase tracking-[0.5em]">BRAIN_FLOW_SUMMARY</h2>
              <div className="flex flex-wrap justify-center gap-2 text-[8px] md:text-[10px] font-mono text-white/40 overflow-hidden">
                {project.workflow.layers?.map((layer, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white hover:text-acidGreen cursor-default transition-colors">{layer.title}</span>
                    {i < project.workflow.layers.length - 1 && <span className="opacity-20 mx-1">→</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="pt-8 text-center space-y-4 max-w-4xl">
                <p className="text-xs font-mono text-acidGreen uppercase tracking-widest animate-pulse">
                  “Input → Processing → Visualization → Interaction → Repeat”
                </p>
                <h4 className="text-[11px] md:text-sm font-mono text-textSecondary uppercase leading-loose tracking-[0.1em]">
                  Engineered as a reactive, scalable system capable of transitioning from simulated data to real-time infrastructure intelligence with minimal architectural changes.
                </h4>
              </div>
            </div>
          </div>
        ) : (
          /* ====================================================
             DEFAULT SUMMARY/SPECS TEMPLATE (FALLBACK)
             ==================================================== */
          <section className="relative glass p-8 md:p-12 border-white/5 bg-surfaceLayer1/10 overflow-hidden">
            <div className="space-y-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">Executive Summary</h3>
                <p className="text-textSecondary font-mono text-sm uppercase leading-loose">
                  {project.description} Developed with focus on{' '}
                  <span className="text-white">{project.stack?.join(', ')}</span>.
                </p>
              </div>

              {project.details?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                  {project.details.map((meta, i) => (
                    <div key={i} className="space-y-4">
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
        )}

      </div>

      <div className="fixed bottom-0 left-0 p-10 opacity-[0.02] pointer-events-none -z-10">
        <div className="text-[200px] font-display font-extrabold text-white leading-none overflow-hidden select-none whitespace-nowrap">
          PROJECT_ARCHIVE_2026
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
