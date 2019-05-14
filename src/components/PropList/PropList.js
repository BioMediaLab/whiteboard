import React from 'react'
import './PropList.css'

export default function PropList({ data, allowedProps, hideMissing }) {
  const listItems = allowedProps.map(propName => {
    return {
      key: propName,
      value: data[propName]
    }
  })

  return (
    <ul className="PropList">
      {listItems.map(item => {
        const { key, value } = item
        if (!value && hideMissing) {
          return
        }
        return (
          <li key={key}>
            <strong>{key}</strong>
            <span>{value}</span>
          </li>
        )
      })}
    </ul>
  )
}
