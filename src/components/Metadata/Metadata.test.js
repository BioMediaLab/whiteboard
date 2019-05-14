import React from 'react'
import Metadatum from './'

describe('Metadatum', () => {
  test('can render', () => {
    const component = render(
      <Metadatum>
        {children}
      </Metadatum>
    )
  
    expect(component).toMatchSnapshot()
  })
})

