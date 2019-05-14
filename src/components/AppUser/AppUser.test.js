import React from 'react'
import AppUser from './'

describe('AppUser', () => {
  test('can render', () => {
    const component = render(
      <AppUser>
        {children}
      </AppUser>
    )
  
    expect(component).toMatchSnapshot()
  })
})

