import React from 'react'
import './Level.css'

export default function Level({ children }) {
  return <div className="Level">{children}</div>
}

export function LevelItem({ children }) {
  return <div className="LevelItem">{children}</div>
}
