import React from 'react'
import Pagination from './'

describe('Pagination', () => {
  test('can render', () => {
    const component = render(<Pagination />)

    expect(component).toMatchSnapshot()
  })

  test('can handle button clicks', () => {
    const onFirstClick = jest.fn()
    const onLastClick = jest.fn()
    const onNextClick = jest.fn()
    const onPreviousClick = jest.fn()
    const component = render(
      <Pagination
        onFirstClick={onFirstClick}
        onLastClick={onLastClick}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
      />
    )

    component.clickText('First')
    component.clickText('Last')
    component.clickText('Next')
    component.clickText('Previous')

    expect(onFirstClick).toHaveBeenCalled()
    expect(onLastClick).toHaveBeenCalled()
    expect(onNextClick).toHaveBeenCalled()
    expect(onPreviousClick).toHaveBeenCalled()
  })
})
