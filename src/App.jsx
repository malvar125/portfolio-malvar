import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
    } catch (e) {
      // server-side or environments without document
    }
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="header-content">
          <h1>Cedi Earl Stephen Malvar</h1>
          <button className="theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="container">
        <motion.section 
          className="hero" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <div className="hero-image">
              <img src="https://scontent.fdvo6-1.fna.fbcdn.net/v/t39.30808-6/473826774_1774110099826174_2774414880745157586_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=2hYozqalz6YQ7kNvwExdZ0G&_nc_oc=Admbr7kaYzgPjnwwa_9lHSr-LU-M9ZsG2a8A4yLQbpCVgq6NO0t6vHCua8EvnuitB9g&_nc_zt=23&_nc_ht=scontent.fdvo6-1.fna&_nc_gid=8-feayLpUpLC_PV4zp8o1Q&oh=00_Afo12Ws_gJ_2pMjpVtH3Z5VkxCr9w2a1iGgiFRVzgHyAPg&oe=69735904" alt="Cedi Earl Stephen Malvar" />
            </div>
            <div className="hero-text">
              <h2 className="hero-title">Meet Cedi Earl Stephen Malvar</h2>
              <p className="hero-subtitle">Developer | Problem Solver | Tokyo Drift Enthusiast</p>
              <p className="hero-description">
                Passionate about building fast, strong, and healthy applications. With expertise in modern web development and a commitment to continuous learning, I transform ideas into powerful digital solutions.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value">∞</div>
                  <div className="stat-label">Learning</div>
                </div>
                <div className="stat">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Contact />

        <motion.section 
          className="projects" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>The Big Three Projects</h2>
          <div className="projects-grid">
            <ProjectCard 
              title="What You Know" 
              desc="Building wellness applications that prioritize user health and fitness"
              tech={['React', 'Next.js', 'TypeScript']}
            />
            <ProjectCard 
              title="What You Learned" 
              desc="Creating robust backend systems and scalable architectures"
              tech={['Node.js', 'PostgreSQL', 'Docker']}
            />
            <ProjectCard 
              title="What You're Aspiring To" 
              desc="Optimizing performance and building lightning-fast user experiences"
              tech={['Web Performance', 'CDN', 'Edge Computing']}
            />
          </div>
        </motion.section>

        <motion.section 
          className="learning" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Currently Learning</h2>
          <ul className="learning-list">
            <li><strong>TypeScript</strong> — Stronger typing for scalable apps</li>
            <li><strong>Next.js (SSR/ISR)</strong> — Better performance and Vercel-first deployment</li>
            <li><strong>Accessibility (a11y)</strong> — Inclusive UI patterns and testing</li>
          </ul>
        </motion.section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Cedi Earl Stephen Malvar. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div 
      className="project-card" 
      whileHover={{ scale: 1.02 }} 
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tech-tags">
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </motion.div>
  )
}
