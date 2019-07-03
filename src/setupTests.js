import React from 'react'
import 'jest-extended'
import fetch from 'node-fetch'
import { render as rtlRender, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'
import { AppProvider } from '@shopify/polaris'

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    handleEvent: jest.fn()
  }
})

function render(component) {
  const { container, getByText } = rtlRender(
    <AppProvider>{component}</AppProvider>
  )

  return container.firstChild
}

global.fetch = fetch
global.render = render