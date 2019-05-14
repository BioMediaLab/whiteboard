import React from 'react'
import './MediaObject.css'

export default function MediaObject({ children, src }) {
  return (
    <div className="MediaObject">
      <div className="MediaObjectMedia">
        {src && <img src={src} alt="src" />}
      </div>
      <div className="MediaObjectContent">{children}</div>
    </div>
  )
}
