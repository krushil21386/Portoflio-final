import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShieldCheck, Database, Layout, Code, Activity, Laptop, ArrowRight, Lock, Cpu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import { supabase } from '../lib/supabase'

// Maps icon name strings (stored in DB) → Lucide components
const iconMap = {
  Database:   (cls) => <Database   size={20} className={cls} />,
  Code:       (cls) => <Code       size={20} className={cls} />,
  Layout:     (cls) => <Layout     size={20} className={cls} />,
  Activity:   (cls) => <Activity   size={20} className={cls} />,
  ShieldCheck:(cls) => <ShieldCheck size={20} className={cls} />,
  Lock:       (cls) => <Lock       size={20} className={cls} />,
  Cpu:        (cls) => <Cpu        size={20} className={cls} />,
}

const Projects = () => {
  const [flagship, setFlagship]         = useState(null)
  const [otherProjects, setOtherProjects] = useState([])
  const [loading, setLoading]           = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index')

      if (error) {
        console.error('[SUPABASE_ERROR]', error)
        setLoading(false)
        return
      }

      setFlagship(data.find(p => p.is_flagship) || null)
      setOtherProjects(data.filter(p => !p.is_flagship))
      setLoading(false)
    }

    fetchProjects()
  }, [])

  const navigate = useNavigate()
  const handleNav = (path) => {
    window.scrollTo(0, 0)
    navigate(path)
  }

  if (loading) {
    return (
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto flex items-center justify-center h-64">
          <span className="font-mono text-xs text-acidGreen/50 uppercase tracking-[0.4em] animate-pulse">
            // LOADING_OPERATIONS...
          </span>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="container mx-auto">
        <SectionReveal className="space-y-16">

          {/* Section Header */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-acidGreen tracking-[0.4em] uppercase">
              // 04_OPERATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight">
              Project_Deployment_<br />
              Secure_Engineering
            </h2>
          </div>

          {/* Flagship Card */}
          {flagship && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group glass relative p-1 md:p-12 border-acidGreen/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-acidGreen/5 via-voidBlack to-plasmaOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Content */}
                <div className="flex-1 space-y-8 order-2 lg:order-1">
                  <div className="flex flex-wrap gap-3">
                    <span className="font-mono text-[9px] px-3 py-1 bg-acidGreen/10 border border-acidGreen/30 text-acidGreen uppercase tracking-widest">
                      FLAGSHIP_PROJECT
                    </span>
                    <span className="font-mono text-[9px] px-3 py-1 bg-plasmaOrange/10 border border-plasmaOrange/30 text-plasmaOrange uppercase tracking-widest">
                      SECURITY_ENGINEER
                    </span>
                  </div>

                  <h3 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase leading-none">
                    {flagship.title.slice(0, -1)}
                    <span className="text-acidGreen">{flagship.title.slice(-1)}</span>
                  </h3>

                  <p className="text-textSecondary font-body text-xl max-w-xl leading-relaxed">
                    {flagship.description.includes('Defense-in-Depth')
                      ? <>
                          {flagship.description.split('Defense-in-Depth')[0]}
                          <span className="text-acidGreen">Defense-in-Depth</span>
                          {flagship.description.split('Defense-in-Depth')[1]}
                        </>
                      : flagship.description
                    }
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {flagship.tags?.map(tag => (
                      <span key={tag} className="text-[9px] font-mono border border-white/10 px-3 py-1 text-textSecondary uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button onClick={() => handleNav(flagship.route)} className="btn-acid-green inline-flex items-center gap-3">
                      VIEW_ARCHITECTURE <Activity className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 order-1 lg:order-2 w-full lg:w-auto">
                  <div className="relative aspect-video glass bg-surfaceLayer2 border-white/5 overflow-hidden group/img">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover/img:scale-110 transition-transform duration-1000">
                      <Laptop size={200} className="text-acidGreen/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-voidBlack/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 font-mono text-[10px] text-acidGreen uppercase tracking-[0.4em]">
                      [ LIVE_PREVIEW_NOT_AVAILABLE ]
                    </div>
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-acidGreen opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-acidGreen opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-acidGreen opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-acidGreen opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 group hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    {iconMap[project.icon_name]?.(project.icon_color) ?? <Code size={20} className="text-acidGreen" />}
                    <div className="flex gap-2">
                      <a href="https://github.com/krushil21386/" target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="text-textSecondary hover:text-white cursor-pointer" />
                      </a>
                      <ExternalLink size={16} className="text-textSecondary hover:text-white cursor-pointer" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] font-mono text-acidGreen uppercase tracking-[0.2em]">
                      {project.type}
                    </div>
                    <h4 className="text-2xl font-display font-extrabold uppercase tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-xs font-body text-textSecondary leading-relaxed uppercase">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.stack?.map(tag => (
                      <span key={tag} className="text-[8px] font-mono border border-white/5 px-2 py-0.5 text-textSecondary uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleNav(project.route)}
                    className="text-[9px] font-mono text-acidGreen uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    DETAILS <ArrowRight size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </SectionReveal>
      </div>
    </section>
  )
}

export default Projects
