import fetch from 'node-fetch'
import { render as rtlRender, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

function render(component) {
  const { container, getByText } = rtlRender(component)

  container.click = () => {
    fireEvent.click(container.firstChild)
  }

  container.clickText = text => {
    fireEvent.click(getByText(text))
  }

  return container
}

global.fetch = fetch
global.render = render
