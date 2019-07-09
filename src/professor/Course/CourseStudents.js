import React, { useMemo, useState } from 'react'
import { useDataLoader, useApi } from 'hooks'
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
  const { id, given_name, family_name, email, middle_name, isEnrolled } = item

  return (
    <ResourceList.Item id={id}>
      <TextContainer>
        <Title>
          {given_name} {middle_name.charAt(0)} {family_name}
          {isEnrolled && '(enrolled)'}
        </Title>

        <TextStyle variation="subdued">Email: {email}</TextStyle>
      </TextContainer>
    </ResourceList.Item>
  )
}

const CourseStudents = ({ course }) => {
  const { id, enrollments = [] } = course
  const [courseEnrollments] = useState(enrollments)
  const { pending, succeeded, errored, data = [] } = useDataLoader(
    'listStudents'
  )
  const [updateCourseState, updateCourse] = useApi('updateCourse')
  const [selectedStudents, setSelectedStudents] = useState([])
  const allStudents = data || []
  const handleSelectionChange = selectedItems => {
    setSelectedStudents(selectedItems)
  }
  const enrollStudents = () => {
    const _enrollments = enrollments
      .filter(enrollment => {
        return !selectedStudents.includes(enrollment.email)
      })
      .map(enrollment => {
        const { id, ...props } = enrollment

        return props
      })
    const _newEnrollments = allStudents
      .filter(student => {
        return selectedStudents.includes(student.email)
      })
      .map(enrollment => {
        const { id, ...props } = enrollment

        return props
      })
    updateCourse({
      id,
      enrollments: [..._enrollments, ..._newEnrollments]
    })
  }
  const unenrollStudents = () => {
    const _enrollments = enrollments
      .filter(enrollment => {
        return !selectedStudents.includes(enrollment.email)
      })
      .map(enrollment => {
        const { id, ...props } = enrollment

        return props
      })
    updateCourse({
      id,
      enrollments: _enrollments
    })
  }
  const bulkActions = [
    {
      content: 'Enroll',
      onAction: enrollStudents
    },
    {
      content: 'Unenroll',
      onAction: unenrollStudents
    }
  ]

  return (
    <Card>
      <ResourceList
        items={allStudents}
        renderItem={item => {
          const isEnrolled = courseEnrollments.some(courseEnrollment => {
            return courseEnrollment.email === item.email
          })
          return <CourseStudent {...item} isEnrolled={isEnrolled} />
        }}
        bulkActions={bulkActions}
        onSelectionChange={handleSelectionChange}
        selectedItems={selectedStudents}
        selectable={true}
      />
    </Card>
  )
}

export default CourseStudents
