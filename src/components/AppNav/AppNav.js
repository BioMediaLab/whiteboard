import React from 'react'
import { Navigation } from '@shopify/polaris'

import {
  HomeIcon,
  CoursesIcon,
  MediaIcon,
  MessageIcon,
  QuestionBankIcon
} from 'components/Icon'

const professorLinks = [
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
]

const studentLinks = [
  {
    url: '/home',
    label: 'Home',
    icon: HomeIcon
  },
  {
    url: '/courses',
    label: 'Courses',
    icon: CoursesIcon
  }
]

export default ({ isProfessor, isStudent }) => {
  const items = isProfessor ? professorLinks : studentLinks
  return (
    <Navigation location="/">
      <Navigation.Section items={items} />
    </Navigation>
  )
}
