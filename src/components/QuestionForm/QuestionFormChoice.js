import React from 'react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { TrashIcon } from 'components/Icon'
import RadioButton from 'components/RadioButton'

export default ({ _key, value, onRemoveChoice, onUpdateChoice,onUpdateAnswer,checked }) => {
  return (
    <div>
    <RadioButton
    value={value}
    name="answer"
    checked={checked}
    onChange={() => {
      onUpdateAnswer({key: _key, value:value});
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
