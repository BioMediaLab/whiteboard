import React from 'react'
import Spread from './'

describe('Spread', () => {
  test('can render', () => {
    const component = render(
      <Spread>
        {children}
      </Spread>
    )
  
    expect(component).toMatchSnapshot()
  })
})

