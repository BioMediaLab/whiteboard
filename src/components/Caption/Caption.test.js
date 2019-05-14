import React from 'react'
import Caption from './'

describe('Caption', () => {
  test('can render', () => {
    const component = render(
      <Caption>
        {children}
      </Caption>
    )
  
    expect(component).toMatchSnapshot()
  })
})

