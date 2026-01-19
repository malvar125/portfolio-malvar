import React from 'react'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="avatar">YN</div>
        <div className="app-name">Portfolio</div>
      </div>
      <nav className="sidebar-nav">
        <a href="#about" className="active">About</a>
        <a href="#projects">Projects</a>
        <a href="#growth">Currently Learning</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="sidebar-footer">
        <a className="small-btn" href="#contact">Get in touch</a>
      </div>
    </aside>
  )
}
