import React from 'react'
import { SkeletonPage } from './'

describe('Skeleton', () => {
  test('can render SkeletonPage', () => {
    const component = render(<SkeletonPage />)

    expect(component).toMatchSnapshot()
  })
})
