import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, LogOut, Plus, ShieldCheck, Mail, Database, Eye, CheckCircle, AlertTriangle, Code, Play } from 'lucide-react'
import { supabase } from '../lib/supabase'

const AdminDashboard = () => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('deploy') // deploy, inbox

  // Project Form States
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('DEVELOPMENT')
  const [tags, setTags] = useState('')
  const [stack, setStack] = useState('')
  const [route, setRoute] = useState('')
  const [iconName, setIconName] = useState('Code')
  const [iconColor, setIconColor] = useState('text-acidGreen')
  const [isFlagship, setIsFlagship] = useState(false)
  const [orderIndex, setOrderIndex] = useState(1)
  const [workflowJson, setWorkflowJson] = useState('')

  // Inbox State
  const [messages, setMessages] = useState([])
  const [loadingMsg, setLoadingMsg] = useState(false)

  // Status logs
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [statusText, setStatusText] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // 1. Guard check for active session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        navigate('/gatekeeper')
      } else {
        setSession(session)
        fetchInboxMessages()
      }
      setLoading(false)
    }
    getSession()
  }, [navigate])

  // Automatically update route as ID changes
  useEffect(() => {
    if (id) {
      setRoute(`/project/${id.trim().toLowerCase()}`)
    } else {
      setRoute('')
    }
  }, [id])

  const fetchInboxMessages = async () => {
    setLoadingMsg(true)
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[INBOX_ERR]', error)
    } else {
      setMessages(data || [])
    }
    setLoadingMsg(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  const loadWorkflowTemplate = () => {
    const template = {
      layers: [
        {
          id: "LAYER 1",
          title: "TRIGGER EVENT",
          env: "CLIENT RUNTIME",
          desc: "Description of first layer in user journey...",
          trigger: "Uplink sequence started",
          icon: "MousePointer2"
        },
        {
          id: "LAYER 2",
          title: "SYSTEM PROCESSING",
          env: "DATABASE RESOLUTION",
          desc: "Description of final processing sequence...",
          trigger: "Operational dispatch finished",
          icon: "Cpu"
        }
      ],
      execution_logs: [
        { tag: "[INIT]", msg: "User execution initialized" },
        { tag: "[SUCCESS]", msg: "Process ran successfully" }
      ],
      metrics: [
        { label: "LATENCY", val: "10ms", sub: "average speed" }
      ],
      whats_happening: [
        { label: "OPTIMISTIC_SYNC", val: "UI updates silently" }
      ],
      hidden_complexity: [
        "Fully reactive states isolate components dynamically"
      ]
    }
    setWorkflowJson(JSON.stringify(template, null, 2))
  }

  const handleDeployProject = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setStatusText('PACKETIZING_PROJECT_DATA...')

    let parsedWorkflow = null
    if (workflowJson.trim()) {
      try {
        parsedWorkflow = JSON.parse(workflowJson)
      } catch (err) {
        setStatus('error')
        setStatusText(`JSON_PARSE_ERROR: ${err.message}`)
        setTimeout(() => setStatus('idle'), 6000)
        return
      }
    }

    // Split arrays
    const formattedTags = tags.split(',').map(t => t.trim().toUpperCase()).filter(Boolean)
    const formattedStack = stack.split(',').map(s => s.trim()).filter(Boolean)

    const projectPayload = {
      id: id.trim().toLowerCase(),
      title: title.trim(),
      subtitle: subtitle.trim(),
      description: description.trim(),
      type: type.trim().toUpperCase(),
      tags: formattedTags,
      stack: formattedStack,
      route: route.trim(),
      icon_name: iconName,
      icon_color: iconColor,
      is_flagship: isFlagship,
      order_index: parseInt(orderIndex) || 1,
      workflow: parsedWorkflow
    }

    try {
      setStatusText('TRANSMITTING_UPLINK_TO_SUPABASE...')
      const { error } = await supabase
        .from('projects')
        .insert([projectPayload])

      if (error) throw error

      setStatus('success')
      setStatusText('DEPLOYMENT_COMPLETE: PROJECT_UPLINKED_SUCCESSFULLY.')

      // Clear Form Fields
      setId('')
      setTitle('')
      setSubtitle('')
      setDescription('')
      setTags('')
      setStack('')
      setIsFlagship(false)
      setWorkflowJson('')

      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('[DEPLOY_ERR]', err)
      setStatus('error')
      setStatusText(`UPLINK_FAILED: ${err.message}`)
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-voidBlack flex items-center justify-center">
        <span className="font-mono text-xs text-acidGreen/50 uppercase tracking-[0.4em] animate-pulse">
          // ACCESSING_CONTROL_DECK...
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-voidBlack pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl space-y-12">

        {/* Master Control Deck Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs text-acidGreen tracking-[0.3em] uppercase">
              <Terminal size={14} className="animate-pulse" /> [ OPERATOR_CONTROL_DECK_ACTIVE ]
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-none">
              SOC_Core_<br />
              <span className="text-acidGreen">Dashboard</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-white/10 hover:border-white/30 font-mono text-[10px] uppercase text-textSecondary hover:text-white transition-colors"
            >
              GO_HOME
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-plasmaOrange/20 hover:border-plasmaOrange/50 bg-plasmaOrange/5 font-mono text-[10px] uppercase text-plasmaOrange transition-colors"
            >
              <LogOut size={12} /> TERMINATE_SESSION
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 border-b border-white/5 pb-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-6 py-2 border-b-2 transition-all uppercase tracking-widest ${activeTab === 'deploy' ? 'border-acidGreen text-acidGreen' : 'border-transparent text-textSecondary hover:text-white'}`}
          >
            [ DEPLOY_NEW_PROJECT ]
          </button>
          <button
            onClick={() => { setActiveTab('inbox'); fetchInboxMessages() }}
            className={`px-6 py-2 border-b-2 transition-all uppercase tracking-widest flex items-center gap-2 ${activeTab === 'inbox' ? 'border-acidGreen text-acidGreen' : 'border-transparent text-textSecondary hover:text-white'}`}
          >
            [ CONTACT_INBOX ] 
            {messages.length > 0 && (
              <span className="bg-acidGreen/20 border border-acidGreen text-acidGreen text-[9px] px-2 py-0.5 font-bold rounded-full">
                {messages.length}
              </span>
            )}
          </button>
        </div>

        {/* Dynamic Workspace Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'deploy' && (
            <motion.div
              key="deploy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Form Input Deck */}
              <form onSubmit={handleDeployProject} className="lg:col-span-2 space-y-6 glass p-8 border-white/5 relative">
                <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-white border-b border-white/5 pb-3 flex items-center gap-2">
                  <Plus size={18} className="text-acidGreen" /> SPECIFICATION_INPUT_PAYLOAD
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project ID */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">PROJECT_ID (URL slug)</label>
                    <input
                      type="text"
                      required
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      placeholder="e.g. medical-diagnostics"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>

                  {/* Project Title */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">PROJECT_TITLE</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Medicare Diagnostics"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>

                  {/* Project Subtitle */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">SUBTITLE / SEC_LOG</label>
                    <input
                      type="text"
                      required
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="e.g. SEC_MED_SCANNER"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">DOMAIN_CATEGORY</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all appearance-none"
                    >
                      <option value="DEVELOPMENT">DEVELOPMENT</option>
                      <option value="CYBERSECURITY">CYBERSECURITY</option>
                      <option value="AI / MACHINE LEARNING">AI / MACHINE LEARNING</option>
                      <option value="CLOUD SECURITY">CLOUD SECURITY</option>
                    </select>
                  </div>

                  {/* Route (Auto-Calculated) */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">ROUTE_PATH (READ-ONLY)</label>
                    <input
                      type="text"
                      readOnly
                      value={route}
                      placeholder="/project/..."
                      className="w-full bg-white/5 border border-white/5 px-4 py-3 font-mono text-xs uppercase text-white/40 focus:outline-none"
                    />
                  </div>

                  {/* Order Index */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">ORDER_INDEX (Sorting position)</label>
                    <input
                      type="number"
                      required
                      value={orderIndex}
                      onChange={(e) => setOrderIndex(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">PROJECT_SUMMARY_DESCRIPTION</label>
                  <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Provide a high-density description of the system architecture..."
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tags */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">TAGS (COMMA SEPARATED)</label>
                    <input
                      type="text"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="e.g. PARALLEL_API, OPTIMISTIC_SYNC"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>

                  {/* Stack */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">TECH_STACK (COMMA SEPARATED)</label>
                    <input
                      type="text"
                      value={stack}
                      onChange={(e) => setStack(e.target.value)}
                      placeholder="e.g. React, Supabase, Tailwind, Recharts"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all"
                    />
                  </div>

                  {/* Icon Name Selection */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">LUCIDE_ICON_NAME</label>
                    <select
                      value={iconName}
                      onChange={(e) => setIconName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs uppercase text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all appearance-none"
                    >
                      <option value="Code">Code (Default)</option>
                      <option value="Database">Database</option>
                      <option value="ShieldCheck">ShieldCheck</option>
                      <option value="Lock">Lock</option>
                      <option value="Cpu">Cpu</option>
                      <option value="Activity">Activity</option>
                      <option value="Layout">Layout</option>
                    </select>
                  </div>

                  {/* Icon Color Selection */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest">ICON_THEME_COLOR</label>
                    <select
                      value={iconColor}
                      onChange={(e) => setIconColor(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all appearance-none"
                    >
                      <option value="text-acidGreen">text-acidGreen</option>
                      <option value="text-plasmaOrange">text-plasmaOrange</option>
                      <option value="text-arcticIce">text-arcticIce</option>
                      <option value="text-plasmaViolet">text-plasmaViolet</option>
                    </select>
                  </div>
                </div>

                {/* Flagship Toggle */}
                <div className="flex items-center gap-3 p-4 border border-white/5 bg-white/5 w-fit">
                  <input
                    type="checkbox"
                    id="flagship"
                    checked={isFlagship}
                    onChange={(e) => setIsFlagship(e.target.checked)}
                    className="accent-acidGreen w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="flagship" className="font-mono text-xs text-textSecondary uppercase tracking-wider cursor-pointer">
                    SET_AS_FLAGSHIP_PROJECT (Large Hero Display Slot)
                  </label>
                </div>

                {/* Interactive Workflow JSON Block */}
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <label className="text-[9px] font-mono text-textSecondary uppercase tracking-widest block">
                      DYNAMIC_8_LAYER_WORKFLOW_JSON (OPTIONAL)
                    </label>
                    <button
                      type="button"
                      onClick={loadWorkflowTemplate}
                      className="text-[9px] font-mono text-acidGreen/70 hover:text-acidGreen border border-acidGreen/30 hover:border-acidGreen px-3 py-1 uppercase"
                    >
                      LOAD_TEMPLATE_JSON
                    </button>
                  </div>
                  <textarea
                    value={workflowJson}
                    onChange={(e) => setWorkflowJson(e.target.value)}
                    rows={8}
                    placeholder='Paste dynamic workflow specifications object here. If null, detailed dynamic views are skipped...'
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-acidGreen focus:outline-none focus:border-acidGreen focus:bg-acidGreen/5 transition-all resize-y"
                  />
                </div>

                {/* Status Log Box */}
                {status !== 'idle' && (
                  <div className={`p-4 font-mono text-[10px] uppercase tracking-wide border flex items-center gap-3 ${status === 'submitting' ? 'bg-white/5 border-white/10 text-white/70' : status === 'success' ? 'bg-acidGreen/10 border-acidGreen/30 text-acidGreen' : 'bg-plasmaOrange/10 border-plasmaOrange/30 text-plasmaOrange'}`}>
                    {status === 'submitting' && <Loader2 className="animate-spin" size={14} />}
                    {status === 'success' && <CheckCircle size={14} />}
                    {status === 'error' && <AlertTriangle size={14} />}
                    <span>{statusText}</span>
                  </div>
                )}

                {/* Deploy Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-acid-green flex items-center justify-center gap-3 py-4 uppercase font-bold text-xs"
                >
                  <ShieldCheck size={16} /> DEPLOY_DYNAMIC_PROJECT_UPLINK
                </button>
              </form>

              {/* Sidebar Help Deck */}
              <div className="space-y-6">
                <div className="glass p-6 border-white/5 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-acidGreen uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                    <Database size={12} /> DATABASE_METADATA_SPEC
                  </h4>
                  <p className="text-[10px] font-body text-textSecondary uppercase leading-relaxed">
                    Deploying a project registers a new entry in your Supabase DB. Refreshes will automatically parse the payload and sync state components across pages.
                  </p>
                  <div className="space-y-2 pt-2 text-[9px] font-mono">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-textSecondary">IS_FLAGSHIP:</span>
                      <span className="text-white">{isFlagship ? 'TRUE' : 'FALSE'}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-textSecondary">TARGET_URL:</span>
                      <span className="text-acidGreen">{route || 'NULL'}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-textSecondary">SORT_INDEX:</span>
                      <span className="text-white">{orderIndex}</span>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 border-plasmaOrange/20 space-y-3">
                  <h4 className="text-xs font-mono font-bold text-plasmaOrange uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                    <AlertTriangle size={12} /> PROTOCOL_COMPLEX_WORKFLOWS
                  </h4>
                  <p className="text-[10px] font-body text-textSecondary uppercase leading-relaxed">
                    If you include a **workflow** object payload via the JSON template:
                  </p>
                  <ul className="space-y-2 text-[9px] font-mono text-textSecondary uppercase pl-4 list-disc">
                    <li>The system dynamically constructs the 8-layer architecture grid in Project detail page.</li>
                    <li>Renders dynamic console terminal log panels.</li>
                    <li>Renders live interactive metric boxes.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'inbox' && (
            <motion.div
              key="inbox"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-white flex items-center gap-3">
                  <Mail size={18} className="text-acidGreen" /> OPERATOR_TRANSMISSIONS_FEED
                </h3>
                <button
                  onClick={fetchInboxMessages}
                  disabled={loadingMsg}
                  className="px-4 py-2 border border-white/10 font-mono text-[9px] uppercase tracking-widest text-acidGreen hover:border-acidGreen/30 transition-all flex items-center gap-2"
                >
                  <Play size={10} className="rotate-90 text-acidGreen" /> {loadingMsg ? 'REFRESHING...' : 'FORCE_RELOAD'}
                </button>
              </div>

              {loadingMsg ? (
                <div className="glass p-12 border-white/5 text-center">
                  <span className="font-mono text-xs text-acidGreen/50 uppercase tracking-[0.4em] animate-pulse">
                    // STREAMING_TRANSMISSIONS...
                  </span>
                </div>
              ) : messages.length === 0 ? (
                <div className="glass p-16 border-white/5 text-center space-y-4">
                  <Mail size={32} className="text-textSecondary/20 mx-auto animate-pulse" />
                  <p className="font-mono text-[10px] text-textSecondary uppercase tracking-widest">
                    "NO TRANSLATED TRANSMISSIONS DETECTED IN LOCAL BUFFER"
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="glass p-6 md:p-8 border-white/5 hover:border-white/10 transition-all relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-textSecondary">
                        {new Date(msg.created_at).toLocaleString()}
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="font-mono text-[9px] px-3 py-1 bg-acidGreen/10 border border-acidGreen/20 text-acidGreen uppercase tracking-widest font-bold">
                            {msg.subject}
                          </span>
                          <h4 className="text-base font-display font-extrabold uppercase tracking-tight">
                            {msg.name}
                          </h4>
                          <span className="text-textSecondary font-mono text-[10px] lowercase">
                            &lt;{msg.email}&gt;
                          </span>
                        </div>

                        <p className="text-xs font-mono text-textSecondary uppercase leading-relaxed max-w-4xl pt-2 border-t border-white/5">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AdminDashboard
