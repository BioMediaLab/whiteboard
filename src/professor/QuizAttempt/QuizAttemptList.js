import React from 'react'
import {
  Card,
  Page,
  ResourceList,
  Stack,
  TextContainer,
  TextStyle,
  Title
} from 'components'

const QuizAttemptListPage = ({ items, renderItem }) => {
  return (
    <Page
      items={items}
      renderItem={renderItem}
      title="Quiz Attempts"
      primaryAction={{ content: 'Create', url: './create' }}
    >
      <Card>
        <ResourceList items={items} renderItem={renderItem} />
      </Card>
    </Page>
  )
}

const QuizAttemptListItem = ({
  id,
  quizAttemptId,
  title,
  description,
  semester
}) => (
  <ResourceList.Item id={id} url={`./${id}`}>
    <TextContainer spacing="tight">
      <Title>
        {student.firstName} {student.lastName}
      </Title>
      <p>{quiz.title}</p>
      <Stack>
        <TextStyle variation="subdued">Semester: Spring 2019</TextStyle>
        <TextStyle variation="subdued">Answered: 10/10</TextStyle>
      </Stack>
    </TextContainer>
  </ResourceList.Item>
)

export const QuizAttemptList = props => {
  const quizAttempts = [
    {
      id: 'attempt-1',
      createdAt: '2019-01-01T01:01:01Z',
      updatedAt: '2019-01-01T01:01:01Z',
      student: {
        firstName: 'John',
        lastName: 'Doe'
      },
      quiz: {
        title: 'Example Quiz',
        description: 'Example of a quiz attempt'
      }
    }
  ]

  return (
    <QuizAttemptListPage
      items={quizAttempts}
      renderItem={QuizAttemptListItem}
    />
  )
}
