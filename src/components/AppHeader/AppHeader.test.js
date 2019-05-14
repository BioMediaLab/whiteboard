import React from 'react'
import AppHeader from './'

describe('AppHeader', () => {
  test('can render', () => {
    const component = render(
      <AppHeader>
        {children}
      </AppHeader>
    )
  
    expect(component).toMatchSnapshot()
  })
})

