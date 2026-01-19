import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="app-window">
        <h2>Contact</h2>
        <motion.div className="contact-inner" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <p>If you'd like to work together, reach out via email or any of the links below.</p>
          <p>
            <strong>Email:</strong> <a href="mailto:you@example.com">you@example.com</a>
          </p>
          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
