import React from 'react'
import {
  Card,
  EmptyState,
  ResourceList,
  Title,
  Stack,
  TextContainer,
  TextStyle
} from 'components'

const CourseStudent = item => {
  const { id, firstName, lastName, email, middleInitial } = item

  return (
    <ResourceList.Item id={id} url={`./${id}`}>
      <TextContainer spacing="tight">
        <Title>
          {firstName} {middleInitial} {lastName}
        </Title>
        <Stack>
          <TextStyle variation="subdued">Email: {email}</TextStyle>
        </Stack>
      </TextContainer>
    </ResourceList.Item>
  )
}

const CourseStudents = ({ course }) => {
  const { students } = course
  const items = students

  if (!items || !items.length) {
    return (
      <EmptyState heading="Enroll Students">
        <p>No students enrolled for this course.</p>
      </EmptyState>
    )
  }

  return (
    <Card>
      <ResourceList items={items} renderItem={CourseStudent} />
    </Card>
  )
}

export default CourseStudents
