import React from 'react'
import Search from './'

describe('Search', () => {
  test('can render', () => {
    const component = render(
      <Search
        id="example"
        name="example"
        label="example"
        value="a test value"
        onChange={() => {}}
      />
    )

    expect(component).toMatchSnapshot()
  })

  test('can handle submit', () => {
    const onSubmit = jest.fn()
    const component = render(
      <Search
        id="example"
        name="example"
        label="example"
        value="just a test"
        onChange={() => {}}
        onSubmit={onSubmit}
      />
    )

    component.clickText('search')

    expect(onSubmit).toHaveBeenCalled()
  })
})
