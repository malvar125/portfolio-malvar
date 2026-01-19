import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const sampleProjects = [
  {
    id: 1,
    title: 'E-Commerce UI (What I Know)',
    category: 'what-i-know',
    description: 'Product listing and checkout flows with polished UX and responsive design.',
    tech: ['React', 'CSS', 'Vite'],
    link: '#'
  },
  {
    id: 2,
    title: 'Interactive Data Viz (What I Learned)',
    category: 'what-i-learned',
    description: 'Built dynamic charts and interactions to explore datasets; focused on performance.',
    tech: ['React', 'D3', 'Framer Motion'],
    link: '#'
  },
  {
    id: 3,
    title: 'Realtime Collab (Aspiring)',
    category: 'aspiring',
    description: 'Planning a collaborative editor with presence, cursors, and offline-first sync.',
    tech: ['WebRTC', 'CRDTs', 'TypeScript'],
    link: '#'
  }
]

export default function Projects(){
  const bigThree = {
    know: sampleProjects.find(p => p.category === 'what-i-know'),
    learned: sampleProjects.find(p => p.category === 'what-i-learned'),
    aspiring: sampleProjects.find(p => p.category === 'aspiring')
  }

  return (
    <section id="projects" className="projects container">
      <h2 className="section-title neon-glow">The Big Three Projects</h2>
      <div className="app-window">
        <p className="muted center">One to show what I know, one for what I learned, and one for what I'm aspiring to build.</p>
        <div className="big-three-grid">
          {Object.entries(bigThree).map(([key, project]) => (
            <div key={project.id} className="big-item">
              <h3 className="big-label">{key === 'know' ? 'What You Know' : key === 'learned' ? 'What You Learned' : "What You're Aspiring To"}</h3>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
