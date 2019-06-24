import React from 'react'
import { Navigation } from '@shopify/polaris'
import { AppUserConsumer } from 'components/AppUser'
import {
  HomeIcon,
  CoursesIcon,
  QuestionsIcon,
  QuizzesIcon,
  QuizTemplatesIcon
} from 'components/Icon'
export default () => {
  return (
    <AppUserConsumer>
      {props => {
        return (
          <Navigation location="/">
            <Navigation.Section
              items={[
                {
                  url: '/',
                  label: 'Home',
                  icon: HomeIcon
                },
                {
                  url: '/quizzes',
                  label: 'Quizzes',
                  icon: QuizzesIcon
                },
                {
                  url: '/quiz-templates',
                  label: 'Quiz Templates',
                  icon: QuizTemplatesIcon
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
