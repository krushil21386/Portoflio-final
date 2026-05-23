import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Cpu, Activity, Globe, Zap, Shield, Database, Layout, RefreshCcw, MousePointer2, Terminal, BarChart3, Binary, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

const HydromapWorkflow = () => {
  const layers = [
    {
      id: "LAYER 1",
      title: "CLIENT REQUEST",
      env: "BROWSER / REACT",
      desc: "The system begins when the user interacts. React Router activates components and useEffect() triggers the initial data fetch.",
      trigger: "User intent → UI event → Data request initialized",
      icon: <MousePointer2 className="text-acidGreen" size={20} />
    },
    {
      id: "LAYER 2",
      title: "REQUEST DISPATCH ENGINE",
      env: "PARALLEL API EXECUTION",
      desc: "Speed is achieved through concurrency. Multiple API calls (/dashboard, /infrastructure, /investments) are fired simultaneously via Promise.all.",
      trigger: "Reduce latency & Avoid sequential delays",
      icon: <Zap className="text-plasmaOrange" size={20} />
    },
    {
      id: "LAYER 3",
      title: "API GATEWAY",
      env: "EXPRESS BACKEND SERVER",
      desc: "All requests converge into a single processing layer. Express routes them to respective handlers and applies middleware (JSON, CORS).",
      trigger: "Centralized routing & Security middleware",
      icon: <Shield className="text-arcticIce" size={20} />
    },
    {
      id: "LAYER 4",
      title: "DATA RESOLUTION",
      env: "IN-MEMORY DATA ENGINE",
      desc: "Backend accesses mock JSON datasets (Infrastructure, Investments, Metrics) to format a structured response.",
      trigger: "Simulated data, real architecture",
      icon: <Database className="text-plasmaViolet" size={20} />
    },
    {
      id: "LAYER 5",
      title: "RESPONSE RETURN",
      env: "JSON RESPONSE STREAM",
      desc: "Processed data flows back to the client over REST with HTTP 200 OK status.",
      trigger: "Data transmitted over REST",
      icon: <RefreshCcw className="text-acidGreen" size={20} />
    },
    {
      id: "LAYER 6",
      title: "STATE SYNCHRONIZATION",
      env: "REACT STATE ENGINE",
      desc: "Data becomes state — state becomes UI. useState() updates trigger React to re-render components with fresh data.",
      trigger: "setInfrastructure(data) → Render",
      icon: <Cpu className="text-plasmaOrange" size={20} />
    },
    {
      id: "LAYER 7",
      title: "VISUAL RENDER ENGINE",
      env: "UI + CHART + MAP",
      desc: "Raw data transforms into visual intelligence. Dashboard KPI cards, Recharts, and Leaflet markers materialize.",
      trigger: "Charts + Maps + Intelligence",
      icon: <Layout className="text-arcticIce" size={20} />
    },
    {
      id: "LAYER 8",
      title: "INTERACTION LOOP",
      env: "USER FEEDBACK SYSTEM",
      desc: "The system evolves with every interaction. Filters, marker clicks, and detail views trigger further state updates.",
      trigger: "Continuous UI Evolution",
      icon: <Globe className="text-acidGreen" size={20} />
    }
  ]

  const executionLogs = [
    { tag: "[INIT]", msg: "User interaction detected" },
    { tag: "[TRIGGER]", msg: "React lifecycle activated (useEffect)" },
    { tag: "[DISPATCH]", msg: "Concurrent API calls initiated (Promise.all)" },
    { tag: "[ROUTE]", msg: "Express server resolving endpoints" },
    { tag: "[FETCH]", msg: "Data retrieved from in-memory structures" },
    { tag: "[RETURN]", msg: "Structured JSON response transmitted" },
    { tag: "[SYNC]", msg: "State updated via React hooks" },
    { tag: "[RENDER]", msg: "UI components re-render dynamically" },
    { tag: "[LOOP]", msg: "System awaits next interaction" }
  ]

  const metrics = [
    { label: "API LATENCY", val: "~120ms", sub: "simulated" },
    { label: "CONCURRENT CALLS", val: "3–5", sub: "parallel requests" },
    { label: "RENDER TIME", val: "< 50ms", sub: "v-dom optimized" },
    { label: "DATA NODES", val: "100+", sub: "infra points" },
    { label: "STATE UPDATES", val: "REACTIVE", sub: "hook-based" }
  ]

  return (
    <div className="min-h-screen bg-voidBlack pt-32 pb-20 px-6">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-8 mb-16 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-acidGreen/50 hover:text-acidGreen transition-colors uppercase tracking-[0.4em]">
              <ArrowLeft size={12} /> RETURN_TO_GLOBAL_SOC
            </Link>
            <div className="space-y-4">
              <h1 className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-display font-extrabold uppercase tracking-tighter leading-[1.1] break-words">
                HYDROMAP<span className="text-acidGreen">_</span><br />
                SYSTEM_WORKFLOW
              </h1>
              <p className="text-textSecondary font-mono text-xs uppercase tracking-widest max-w-2xl leading-relaxed">
                "Every interaction triggers a chain reaction — from user intent to visual intelligence."
              </p>
            </div>
          </div>
          
          <div className="glass p-6 border-l-2 border-l-acidGreen flex items-center gap-6 max-w-sm">
            <Activity size={32} className="text-acidGreen animate-pulse" />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-acidGreen uppercase font-bold tracking-widest">SYSTEM_READY</div>
              <p className="text-[9px] font-mono text-textSecondary uppercase leading-relaxed">
                "Verified credential. Accessing full architecture specifications for Hydromap parallel pipeline."
              </p>
            </div>
          </div>
        </div>

        {/* 8-Layer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {layers.map((layer, index) => (
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
                  {layer.icon}
                </div>
                <div>
                   <div className="text-[8px] font-mono text-acidGreen uppercase tracking-widest opacity-70 mb-1">{layer.env}</div>
                   <h3 className="text-lg font-display font-extrabold uppercase tracking-tighter">{layer.title}</h3>
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

        {/* PRO LAYER: EXECUTION LOG & METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 h-full">
           {/* System Execution Log */}
           <div className="lg:col-span-2 glass border-white/5 bg-voidBlack/40 p-1 md:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                 <Terminal size={18} className="text-acidGreen" />
                 <h2 className="text-sm font-mono font-bold text-acidGreen uppercase tracking-widest">SYSTEM_EXECUTION_LOG</h2>
                 <div className="flex gap-1 ml-auto">
                    <div className="w-2 h-2 rounded-full bg-plasmaOrange/20 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-acidGreen" />
                 </div>
              </div>
              
              <div className="space-y-3 font-mono text-[10px] md:text-xs">
                <div className="text-textSecondary/50 uppercase italic mb-4">“Every frame you see is the result of multiple synchronized processes running underneath.”</div>
                {executionLogs.map((log, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={log.tag} 
                    className="flex gap-4 items-start"
                  >
                    <span className="text-acidGreen/60 shrink-0 w-20">{log.tag}</span>
                    <span className="text-textSecondary uppercase">{log.msg}</span>
                  </motion.div>
                ))}
              </div>
           </div>

           {/* Metrics Panel */}
           <div className="glass border-acidGreen/10 bg-voidBlack p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                 <BarChart3 size={18} className="text-plasmaOrange" />
                 <h2 className="text-sm font-mono font-bold text-plasmaOrange uppercase tracking-widest">SYSTEM_METRICS</h2>
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                 {metrics.map( m => (
                    <div key={m.label} className="border-b border-white/5 pb-4">
                       <div className="flex justify-between items-end mb-1">
                          <span className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">{m.label}</span>
                          <span className="text-lg font-display font-extrabold text-acidGreen">{m.val}</span>
                       </div>
                       <div className="text-[8px] font-mono text-white/20 uppercase text-right">{m.sub}</div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* PRO LAYER: DEPTH & COMPLEXITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
           {/* Depth Layer */}
           <div className="glass p-10 border-white/10 bg-surfaceLayer1/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Binary size={200} />
              </div>
              <div className="space-y-6 relative z-10">
                 <div className="flex items-center gap-3">
                    <Layers size={24} className="text-acidGreen" />
                    <h3 className="text-xl font-display font-bold uppercase">WHAT’S ACTUALLY HAPPENING_</h3>
                 </div>
                 <p className="text-xs font-mono text-textSecondary/60 uppercase leading-relaxed italic mb-6">
                    “This is not just a request-response cycle. It’s a reactive system.”
                 </p>
                 <ul className="space-y-4">
                    {[
                      { l: "UI does NOT wait", v: "It reacts instantly via optimistic updates" },
                      { l: "Data does NOT reload", v: "It syncs silently with the persistent engine" },
                      { l: "Components do NOT refresh", v: "They re-render intelligently via memoization" }
                    ].map( (item, i) => (
                      <li key={i} className="flex gap-4 border-l-2 border-acidGreen/20 pl-4 py-1">
                        <span className="text-acidGreen font-mono text-xs uppercase w-32 shrink-0">{item.l}</span>
                        <span className="text-textSecondary font-mono text-[10px] uppercase">→ {item.v}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Hidden Complexity */}
           <div className="glass p-10 border-white/10 bg-surfaceLayer1/10 relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                 <Binary size={200} />
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                   <Zap size={24} className="text-plasmaOrange" />
                   <h3 className="text-xl font-display font-bold uppercase">HIDDEN_COMPLEXITY_</h3>
                </div>
                <p className="text-xs font-mono text-textSecondary/60 uppercase leading-relaxed italic mb-6">
                    “What looks simple is actually optimized underneath.”
                 </p>
                <div className="grid grid-cols-1 gap-3">
                   {[
                     "Parallel execution prevents main-thread blocking",
                     "State isolation ensures component efficiency",
                     "Map + charts update without full DOM reload",
                     "Architecture allows instant scaling to real APIs"
                   ].map( txt => (
                     <div key={txt} className="flex items-center gap-3 text-[10px] font-mono text-textSecondary uppercase">
                        <div className="w-1 h-1 bg-plasmaOrange rounded-full" />
                        {txt}
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* Enhanced Final Flow Summary */}
        <div className="flex flex-col items-center gap-8 py-12 border-t border-white/5">
           <h2 className="text-sm font-mono font-bold text-acidGreen uppercase tracking-[0.5em]">BRAIN_FLOW_SUMMARY</h2>
           <div className="flex flex-wrap justify-center gap-2 text-[8px] md:text-[10px] font-mono text-white/40 overflow-hidden">
              {[
                "USER ACTION", "REACT TRIGGER", "PARALLEL API", "EXPRESS CORE", 
                "DATA ENGINE", "RESPONSE STREAM", "STATE SYNC", "UI RENDER", "INTERACTION LOOP"
              ].map((step, i) => (
                <React.Fragment key={step}>
                   <span className="text-white hover:text-acidGreen cursor-default transition-colors">{step}</span>
                   {i < 8 && <span className="opacity-20 mx-1">→</span>}
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

      {/* Background Decor */}
      <div className="fixed top-0 right-0 p-20 opacity-[0.02] pointer-events-none -z-10 rotate-90">
         <div className="text-[300px] font-display font-extrabold text-white leading-none overflow-hidden select-none whitespace-nowrap">
            ARCH_V2.0
         </div>
      </div>
    </div>
  )
}

export default HydromapWorkflow
