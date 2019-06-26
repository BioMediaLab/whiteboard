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

const CourseQuizAttempt = item => {
  const { id, title, description } = item
  return (
    <ResourceList.Item id={id} url={`/quizAttempts/${id}`}>
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

const CourseQuizAttempts = ({ course }) => {
  const items = course.quizAttempts || []

  if (!items.length) {
    return (
      <EmptyState heading="No Quiz Attempts">
        <p>No attempts have been made for this Quiz.</p>
      </EmptyState>
    )
  }

  return (
    <Card>
      <ResourceList items={items} renderItem={CourseQuizAttempt} />
    </Card>
  )
}

export default CourseQuizAttempts
