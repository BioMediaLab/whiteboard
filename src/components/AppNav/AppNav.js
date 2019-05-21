import React from 'react'
import { Navigation } from '@shopify/polaris'
import { AppUserConsumer } from 'components/AppUser'
import { HomeIcon, CoursesIcon, QuestionsIcon } from 'components/Icon'
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
                  icon: HomeIcon
                },
                {
                  url: '/courses',
                  label: 'Courses',
                  icon: CoursesIcon
                },
                {
                  url: '/questions',
                  label: 'Questions',
                  icon: QuestionsIcon
                }
              ]}
            />
          </Navigation>
        )
      }}
    </AppUserConsumer>
  )
}
