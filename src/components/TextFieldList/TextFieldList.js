import React, { useState } from 'react'
import Button from 'components/Button'
import Level, { LevelItem } from 'components/Level'

import TextField from 'components/TextField'
import './TextFieldList.css'

export default function TextFieldList({ label }) {
  const [fields, setFields] = useState([])
  const [newField, setNewField] = useState('')

  const addNewField = value => {
    setFields([...fields, value])
    setNewField('')
  }

  const removeField = index => {
    setFields(fields.filter((field, fieldIndex) => fieldIndex !== index))
  }

  return (
    <div className="TextFieldList">
      {fields.map((field, index) => {
        return (
          <Level key={index}>
            <LevelItem>{field}</LevelItem>
            <LevelItem>
              <Button onClick={() => removeField(index)}>Remove</Button>
            </LevelItem>
          </Level>
        )
      })}
      <TextField
        label="new field"
        value={newField}
        onChange={value => setNewField(value)}
        suffixedAttachment={() => {
          return <Button onClick={() => addNewField(newField)}>Add</Button>
        }}
      />
    </div>
  )
}
