import React from 'react'
import Button from './'

describe('Button', () => {
  test('can render', () => {
    const component = render(<Button type="submit">Save</Button>)

    expect(component).toMatchSnapshot()
  })

  test('can handle click', () => {
    const onClick = jest.fn()
    const component = render(<Button type="submit" onClick={onClick} />)

    component.click()

    expect(onClick).toHaveBeenCalled()
  })
})
