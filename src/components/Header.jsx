import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header className="site-header" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
      <div className="container header-inner">
        <h1 className="logo rainbow-text">Your Name</h1>

        <nav className="nav desktop-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={`mobile-nav-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </motion.header>
  )
}
