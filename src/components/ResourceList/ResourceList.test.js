import React from 'react'
import ResourceList from './'

describe('ResourceList', () => {
  test('can render', () => {
    const component = render(
      <ResourceList>
        {children}
      </ResourceList>
    )
  
    expect(component).toMatchSnapshot()
  })
})

