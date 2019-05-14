import React from 'react'
import Icon from './'

describe('Icon', () => {
  test('can render', () => {
    const component = render(
      <Icon>
        {children}
      </Icon>
    )
  
    expect(component).toMatchSnapshot()
  })
})

