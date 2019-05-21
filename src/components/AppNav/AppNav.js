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
                  url: '/courses',
                  label: 'Courses',
                  icon: 'orders'
                },
                {
                  url: '/questions',
                  label: 'Questions',
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
