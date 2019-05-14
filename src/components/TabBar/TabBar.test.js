import React from 'react'
import TabBar from './'

describe('TabBar', () => {
  test('can render', () => {
    const component = render(
      <TabBar>
        {children}
      </TabBar>
    )
  
    expect(component).toMatchSnapshot()
  })
})

