import React from 'react'
import Title from './'

describe('Title', () => {
  test('can render', () => {
    const component = render(
      <Title>
        {children}
      </Title>
    )
  
    expect(component).toMatchSnapshot()
  })
})

