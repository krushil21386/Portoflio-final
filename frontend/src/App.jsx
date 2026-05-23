import React, { useState, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import BootSequence from './components/BootSequence';

// Lazy load sections for better initial performance
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Projects = React.lazy(() => import('./sections/Projects'));
const SecurityArchitecture = React.lazy(() => import('./sections/SecurityArchitecture'));
const Experience = React.lazy(() => import('./sections/Experience'));
const FutureGoals = React.lazy(() => import('./sections/FutureGoals'));
const Contact = React.lazy(() => import('./sections/Contact'));
const MedicareDeepDive = React.lazy(() => import('./sections/MedicareDeepDive'));
const HydromapWorkflow = React.lazy(() => import('./sections/HydromapWorkflow'));
const ProjectDetail = React.lazy(() => import('./sections/ProjectDetail'));
const Login = React.lazy(() => import('./pages/Login'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative min-h-screen bg-voidBlack text-textPrimary selection:bg-acidGreen selection:text-voidBlack overflow-hidden">
        {/* Persistent Tactical Overlays */}
        <div className="noise-overlay" />
        <div className="scanlines" />
        
        <Cursor />
        <ParticleCanvas />
        
        {!isBooted && <BootSequence onComplete={() => setIsBooted(true)} />}

        <div className={`w-full transition-opacity duration-700 ${isBooted ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          <main className="relative z-10">
            <Suspense fallback={<div className="h-screen bg-voidBlack" />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <SecurityArchitecture />
                    <Experience />
                    <FutureGoals />
                    <Contact />
                  </>
                } />
                <Route path="/medicare-plus" element={<MedicareDeepDive />} />
                <Route path="/hydromap" element={<HydromapWorkflow />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/gatekeeper" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
