import React from 'react'
import {
  Card,
  EmptyState,
  ResourceList,
  TextContainer,
  Title
} from 'components'

const CourseQuiz = ({ id, title, description, quizCourseId, ...props }) => {
  return (
    <ResourceList.Item id={id} url={`/courses/${quizCourseId}/quizzes/${id}`}>
      <TextContainer spacing="tight">
        <Title>{title}</Title>
        <p>{description}</p>
      </TextContainer>
    </ResourceList.Item>
  )
}

const CourseQuizzes = ({ course }) => {
  const items = course.quizzes.map(quiz => {
    return {
      ...quiz,
      quizCourseId: course.id
    }
  })

  if (!items.length) {
    return (
      <EmptyState
        heading="Add Quizzes"
        action={{
          content: 'Add Quiz',
          url: `/courses/${course.id}/quizzes/create`
        }}
      >
        <p>No quizzes added for this course.</p>
      </EmptyState>
    )
  }

  return (
    <Card>
      <ResourceList items={items} renderItem={CourseQuiz} />
    </Card>
  )
}

export default CourseQuizzes
