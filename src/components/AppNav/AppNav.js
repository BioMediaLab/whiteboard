import React from 'react'
import { Navigation } from '@shopify/polaris'
import { AppUserConsumer } from 'components/AppUser'

export default () => {
  return (
    <AppUserConsumer>
      {props => {
        return (
          <Navigation location="/">
            <Navigation.Section
              items={[
                {
                  url: '/home',
                  label: 'Home',
                  icon: 'home'
                },
                {
                  url: '/classes',
                  label: 'Classes',
                  icon: 'orders'
                }
              ]}
            />
          </Navigation>
        )
      }}
    </AppUserConsumer>
  )
}
