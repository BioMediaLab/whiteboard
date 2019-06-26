import React from 'react'
import {
  Card,
  EmptyState,
  ResourceList,
  Stack,
  TextContainer,
  TextStyle,
  Title
} from 'components'

const CourseQuiz = item => {
  const { id, title, description } = item
  return (
    <ResourceList.Item id={id} url={`/quizzes/${id}`}>
      <TextContainer spacing="tight">
        <Title>{title}</Title>
        <p>{description}</p>
        <Stack>
          <TextStyle variation="subdued">Questions: 30</TextStyle>
          <TextStyle variation="subdued">Student Attempts: 4/21</TextStyle>
        </Stack>
      </TextContainer>
    </ResourceList.Item>
  )
}

const CourseQuizzes = ({ course }) => {
  const items = course.quizzes || []

  if (!items.length) {
    return (
      <EmptyState
        heading="Add Quizzes"
        action={{ content: 'Add Quiz', url: '/quizzes/create' }}
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
