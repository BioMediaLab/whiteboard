import React from 'react'
import Route from './'

describe('Route', () => {
  test('can render', () => {
    const component = render(
      <Route>
        {children}
      </Route>
    )
  
    expect(component).toMatchSnapshot()
  })
})

