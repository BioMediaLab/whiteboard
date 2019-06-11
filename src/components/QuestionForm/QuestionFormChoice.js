import React from 'react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { TrashIcon } from 'components/Icon'
import RadioButton from 'components/RadioButton'

export default ({ _key, value, onRemoveChoice, onUpdateChoice,onUpdateAnswer }) => {
  return (
    <div>
    <RadioButton
    value={value}
    onChange={() => {
      onUpdateAnswer({key: _key, value:value});
      console.log(_key,value)
    }}
    > </RadioButton>
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
    </div>
  )
}
