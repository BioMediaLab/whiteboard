import React from 'react'
import { Link } from '@reach/router'
import './Link.css'

export default ({ children, url, ...rest }) => {
  return (
    <Link to={url} {...rest}>
      {children}
    </Link>
  )
}
