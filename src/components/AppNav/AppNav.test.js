import React from 'react'
import Navigation from '.'

describe('Navigation', () => {
  test('can render', () => {
    const component = render(<Navigation>{children}</Navigation>)

    expect(component).toMatchSnapshot()
  })
})
