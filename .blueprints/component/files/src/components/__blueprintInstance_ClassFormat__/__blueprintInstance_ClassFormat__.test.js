import React from 'react'
import {{blueprintInstance_ClassFormat}} from './'

describe('{{blueprintInstance_ClassFormat}}', () => {
  test('can render', () => {
    const component = render(
      <{{blueprintInstance_ClassFormat}}>
        {children}
      </{{blueprintInstance_ClassFormat}}>
    )
  
    expect(component).toMatchSnapshot()
  })
})

