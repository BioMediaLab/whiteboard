import React from 'react'
import PropList from './'

describe('PropList', () => {
  test('can render', () => {
    const data = {
      example1: 'value',
      example2: 'value',
      example3: 'value'
    }
    const component = render(
      <PropList data={data} allowedProps={['example1']} />
    )

    expect(component).toMatchSnapshot()
  })
})
