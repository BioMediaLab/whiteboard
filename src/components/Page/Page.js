import React from 'react'
import { Page, Layout } from '@shopify/polaris'

export default ({ children, hasLayout = false, ...rest }) => {
  if (!hasLayout) return <Page {...rest}>{children}</Page>

  return (
    <Page {...rest}>
      <Layout>{children}</Layout>
    </Page>
  )
}

export const PagePrimary = ({ children }) => {
  return <Layout.Section>{children}</Layout.Section>
}

export const PageSecondary = ({ children }) => {
  return <Layout.Section secondary>{children}</Layout.Section>
}
