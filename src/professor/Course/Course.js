import React, { Suspense, useState } from 'react'
import { Card, LoadingPage, Page, Tabs } from 'components'
import { useDataLoader } from 'hooks'

const CoursePage = ({ course, tabName = 'details', ...props }) => {
  const tabs = [
    {
      id: 'course-details',
      content: 'Details',
      panelID: 'details',
      url: `/courses/${props.courseId}/details`
    },
    {
      id: 'course-quizzes',
      content: 'Quizzes',
      panelID: 'quizzes',
      url: `/courses/${props.courseId}/quizzes`
    },
    {
      id: 'course-students',
      content: 'Students',
      panelID: 'students',
      url: `/courses/${props.courseId}/students`
    },
    {
      id: 'course-quiz-attempts',
      content: 'Quiz Attempts',
      panelID: 'quiz-attempts',
      url: `/courses/${props.courseId}/quiz-attempts`
    }
  ]
  const initialTab = tabs.findIndex(element => element.panelID === tabName)
  const [activeTab, changeTab] = useState(initialTab)
  const breadcrumbs = [{ content: 'courses', url: '/courses' }]

  const tabContent = {
    details: React.lazy(() => import('./CourseDetails')),
    quizzes: React.lazy(() => import('./CourseQuizzes')),
    students: React.lazy(() => import('./CourseStudents')),
    'quiz-attempts': React.lazy(() => import('./CourseQuizAttempts'))
  }
  const CurrentTabContent = tabContent[tabName]

  return (
    <Page title="Course" breadcrumbs={breadcrumbs}>
      <Card>
        <Tabs selected={activeTab} onSelect={changeTab} tabs={tabs}>
          <Suspense fallback={<div>loading the tab...</div>}>
            <CurrentTabContent course={course} />
          </Suspense>
        </Tabs>
      </Card>
    </Page>
  )
}

export const Course = props => {
  const { pending, succeeded, errored, data, errors } = useDataLoader(
    'getCourse',
    { id: props.courseId }
  )
  const course = data || {}

  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  return <CoursePage {...props} course={course} />
}
