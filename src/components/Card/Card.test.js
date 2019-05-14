import React from 'react'
import Card from './'

describe('Card', () => {
  test('can render', () => {
    const component = render(
      <Card>
        <p>Here goes the card!</p>
      </Card>
    )

    expect(component).toMatchSnapshot()
  })
})
