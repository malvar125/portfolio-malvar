import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Your Name. Built with React.</p>
      </div>
    </footer>
  )
}
