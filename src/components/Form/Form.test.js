import React from 'react'
import Form from './'

describe('Form', () => {
  test('can render', () => {
    const component = render(
      <Form>
        {children}
      </Form>
    )
  
    expect(component).toMatchSnapshot()
  })
})

