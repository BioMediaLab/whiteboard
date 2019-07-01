import React from 'react'
import { Navigation } from '@shopify/polaris'

import {
  HomeIcon,
  CoursesIcon,
  MediaIcon,
  MessageIcon,
  QuestionBankIcon
} from 'components/Icon'
export default () => {
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
            url: '/question-banks',
            label: 'Question Banks',
            icon: QuestionBankIcon
          },
          {
            url: '/media',
            label: 'Media',
            icon: MediaIcon
          },
          {
            url: '/messages',
            label: 'Messages',
            icon: MessageIcon
          }
        ]}
      />
    </Navigation>
  )
}
