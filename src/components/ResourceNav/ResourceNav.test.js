import React from 'react'
import ResourceNav from './'

describe('ResourceNav', () => {
  test('can render', () => {
    const component = render(
      <ResourceNav>
        {children}
      </ResourceNav>
    )
  
    expect(component).toMatchSnapshot()
  })
})

