import React from 'react'
import Page, { PageContent, PageHeader, PageFooter, PageSidebar } from './'

describe('Page', () => {
  test('can render', () => {
    const component = render(
      <Page>
        <p>A little content for the page.</p>
      </Page>
    )

    expect(component).toMatchSnapshot()
  })

  test('can render with all', () => {
    const component = render(
      <Page>
        <PageHeader>
          <h1>Example</h1>
        </PageHeader>
        <PageSidebar>
          <p>Sidebar Content</p>
        </PageSidebar>
        <PageContent>
          <p>A little content for the page.</p>
        </PageContent>
        <PageFooter>
          <p>Footer Content</p>
        </PageFooter>
      </Page>
    )

    expect(component).toMatchSnapshot()
  })

  test('can render with header and content', () => {
    const component = render(
      <Page>
        <PageHeader>
          <h1>Example</h1>
        </PageHeader>
        <PageContent>
          <p>A little content for the page.</p>
        </PageContent>
      </Page>
    )

    expect(component).toMatchSnapshot()
  })
})
