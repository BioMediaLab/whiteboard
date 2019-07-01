import React, { Suspense, useState, useReducer } from 'react'
import { Card, LoadingPage, Page, PageActions, Tabs } from 'components'
import { useApi, useDataLoader } from 'hooks'
import reducer from './reducer'

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
  const [state, dispatch] = useReducer(reducer, course)

  const onUpdateTitle = title => {
    dispatch({
      type: 'UPDATE',
      payload: {
        title
      }
    })
  }
  const onUpdateDescription = description => {
    dispatch({
      type: 'UPDATE',
      payload: {
        description
      }
    })
  }
  const onUpdateCourseId = courseId => {
    dispatch({
      type: 'UPDATE',
      payload: {
        courseId
      }
    })
  }

  const isDetailsSelected = activeTab == 0

  return (
    <Page title="Course" breadcrumbs={breadcrumbs}>
      <Card>
        <Tabs selected={activeTab} onSelect={changeTab} tabs={tabs}>
          <Suspense fallback={<div>loading the tab...</div>}>
            <CurrentTabContent
              course={state}
              onUpdateCourseId={onUpdateCourseId}
              onUpdateDescription={onUpdateDescription}
              onUpdateTitle={onUpdateTitle}
            />
          </Suspense>
        </Tabs>
      </Card>
      {isDetailsSelected && <PageActions primaryAction={{ content: 'Save' }} />}
    </Page>
  )
}

export const Course = props => {
  const { pending, succeeded, errored, data, errors } = useDataLoader(
    'getCourse',
    { id: props.courseId }
  )
  const [updateCourseState, updateCourse] = useApi('updateCourse')
  const course = data || {}

  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  return (
    <CoursePage
      {...props}
      course={course}
      onSave={updatedCourse => {
        updateCourse(updatedCourse)
      }}
    />
  )
}
