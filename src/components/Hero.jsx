import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const heroText = "Meet Cedi Earl Stephen Malvar"

  return (
    <section className="hero container hero-portfolio">
      <motion.div className="hero-portfolio-inner" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="hero-left">
          <div className="avatar-wrap">
            <img className="avatar-img" src="/src/assets/avatar.jpg" alt="Cedi Earl Stephen Malvar avatar" />
          </div>
        </div>

        <div className="hero-right">
          <h1 className="neon-title">{heroText}</h1>
          <div className="hero-subline">Developer | Problem Solver | Tokyo Drift Enthusiast</div>
          <p className="hero-intro muted">Passionate about building fast, strong, and healthy applications. With expertise in modern web development and a commitment to continuous learning, I transform ideas into powerful digital solutions.</p>

          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-value">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">∞</div>
              <div className="stat-label">Learning</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">100%</div>
              <div className="stat-label">Passion</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
