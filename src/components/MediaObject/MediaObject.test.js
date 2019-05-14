import React from 'react'
import MediaObject from './'

describe('MediaObject', () => {
  test('can render', () => {
    const component = render(
      <MediaObject src="https://dummyimage.com/100x100/000/fff.gif">
        <p>Example Content</p>
      </MediaObject>
    )

    expect(component).toMatchSnapshot()
  })
})
