import React from 'react'
import TextField from './'

describe('TextField', () => {
  test('can render', () => {
    const component = render(
      <TextField
        id="example"
        name="example"
        label="example"
        value="woohoo!"
        onChange={() => {}}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
