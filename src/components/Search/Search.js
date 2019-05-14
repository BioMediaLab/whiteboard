import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

import './Search.css'

export default function Search({ id, label, name, onChange, onSubmit, value }) {
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <TextField
        id={id}
        label={label}
        name={name}
        onChange={onChange}
        type="search"
        value={value}
      />
      <Button type="submit">search</Button>
    </form>
  )
}
