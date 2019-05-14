import React from 'react'
import TextFieldList from './'

describe('TextFieldList', () => {
  test('can render', () => {
    const component = render(
      <TextFieldList>
        {children}
      </TextFieldList>
    )
  
    expect(component).toMatchSnapshot()
  })
})

