import React from 'react'
import { useDataLoader } from 'hooks'

import {
  Card,
  LoadingPage,
  Page,
  PageActions,
  ResourceList,
  Stack,
  Title,
  TextContainer,
  TextStyle
} from 'components'

const CourseListPage = ({ items, renderItem }) => {
  return (
    <Page
      title="Courses"
      primaryAction={{ content: 'Create', url: './create' }}
    >
      <Card>
        <ResourceList items={items} renderItem={renderItem} />
      </Card>
      <PageActions primaryAction={{ content: 'Create', url: './create' }} />
    </Page>
  )
}

const CourseListItem = ({
  id,
  courseId,
  title,
  description,
  semester,
  instructor,
  students
}) => {
  const { given_name, family_name, middle_name } = instructor
  const instructorName = `${given_name} ${middle_name.charAt(0)} ${family_name}`
  const studentCount = students ? students.length : 0
  return (
    <ResourceList.Item id={id} url={`./${id}`}>
      <TextContainer spacing="tight">
        <Title>
          {title} ({courseId})
        </Title>
        <p>{description}</p>
        <Stack>
          <TextStyle variation="subdued">Semester: Spring 2019</TextStyle>
          <TextStyle variation="subdued">
            Instructor: {instructorName}
          </TextStyle>
          <TextStyle variation="subdued">Students: {studentCount}</TextStyle>
        </Stack>
      </TextContainer>
    </ResourceList.Item>
  )
}

export const CourseList = props => {
  const { pending, succeeded, errored, data = [] } = useDataLoader(
    'listCourses'
  )

  const items = data || []

  console.log(data)
  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  return <CourseListPage items={items} renderItem={CourseListItem} />
}
