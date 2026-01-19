import React from 'react'

export default function Growth(){
  const learning = [
    { id: 1, title: 'TypeScript', note: 'Stronger typing for scalable apps' },
    { id: 2, title: 'Next.js (SSR/ISR)', note: 'Better performance and Vercel-first deployment' },
    { id: 3, title: 'Accessibility (a11y)', note: 'Inclusive UI patterns and testing' }
  ]

  return (
    <section id="growth" className="growth container">
      <div className="app-window">
        <h2>Currently Learning</h2>
        <p className="muted">Skills I'm actively improving to stay future-proof.</p>
        <ul className="learning-list">
          {learning.map(l => (
            <li key={l.id} className="learning-item">
              <strong>{l.title}</strong> — <span className="muted">{l.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
