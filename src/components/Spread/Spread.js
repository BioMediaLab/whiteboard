import React from 'react'
import './Spread.css'

export default function Spread({ children }) {
  return <div className="Spread">{children}</div>
}

export function SpreadItem({ children }) {
  return <div className="SpreadItem">{children}</div>
}
