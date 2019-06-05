import React from 'react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { TrashIcon } from 'components/Icon'

export default ({ _key, value, onRemoveChoice, onUpdateChoice }) => {
  return (
    <TextField
      id="choice"
      label={`Choice ${_key.toUpperCase()}`}
      value={value}
      onChange={newText => {
        onUpdateChoice({ key: _key, value: newText })
      }}
      connectedRight={
        <Button
          onClick={() => {
            onRemoveChoice({ key: _key })
          }}
        >
          <TrashIcon />
        </Button>
      }
    />
  )
}
