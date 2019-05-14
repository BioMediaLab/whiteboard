import React from 'react'
import Link from './'

describe('Link', () => {
  test('can render', () => {
    const component = render(
      <Link>
        {children}
      </Link>
    )
  
    expect(component).toMatchSnapshot()
  })
})

