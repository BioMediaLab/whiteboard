import React from 'react'
import Level from './'

describe('Level', () => {
  test('can render', () => {
    const component = render(
      <Level>
        {children}
      </Level>
    )
  
    expect(component).toMatchSnapshot()
  })
})

