import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article className="project-card rainbow-border" whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
      <div className="project-card-inner">
        <div className="project-media">
          <div className="project-thumb">Screenshot</div>
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t} className="tech">{t}</span>
            ))}
          </div>
          <div className="project-actions">
            {project.link && (
              <a className="btn" href={project.link} target="_blank" rel="noreferrer">View</a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
