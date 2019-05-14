import React from 'react'
import { Heading } from '@shopify/polaris'
import './Title.css'

export default ({ children, element = 'h3' }) => {
  return (
    <Heading className="Title" element={element}>
      {children}
    </Heading>
  )
}
