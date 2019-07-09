import React, { useEffect, useState } from 'react'
import {
  Card,
  Form,
  FormLayout,
  Page,
  PageActions,
  Select,
  TextField
} from 'components'
import { useApi, useDataLoader } from 'hooks'

const CourseCreatePage = ({
  description,
  title,
  courseId,
  instructor,
  instructorOptions,
  onFieldChange,
  onSave
}) => {
  return (
    <Page title="Create Course">
      <Card sectioned>
        <Form>
          <FormLayout>
            <Select
              label="Instructor"
              id="instructor"
              options={instructorOptions}
              value={instructor}
              onChange={onFieldChange}
            />
            <TextField
              id="title"
              label="Title"
              value={title}
              onChange={onFieldChange}
            />
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={onFieldChange}
              data-testid="courseCreateDescriptionSelector"
            />
            <TextField
              id="courseId"
              label="Course Id"
              value={courseId}
              onChange={onFieldChange}
            />
          </FormLayout>
        </Form>
      </Card>
      <PageActions primaryAction={{ content: 'Create', onAction: onSave }} />
    </Page>
  )
}

export const CourseCreate = () => {
  const initialState = {
    title: '',
    description: '',
    courseId: '',
    instructor: ''
  }
  const [course, updateCourse] = useState(initialState)
  const [createCourseState, createCourse] = useApi('createCourse')

  const { data } = useDataLoader('listInstructors')
  const instructors = data || []
  const instructorOptions = instructors.map(instructor => {
    const { given_name = '', middle_name = '', family_name = '' } = instructor
    const fullName = `${given_name} ${middle_name.charAt(
      0
    )} ${family_name}`.trim()
    return {
      label: fullName,
      value: instructor.email
    }
  })

  const onSave = async () => {
    const { id, ...instructor } = instructors.find(_instructor => {
      return _instructor.email === course.instructor
    })

    createCourse({
      ...course,
      instructor
    })
  }

  const onFieldChange = (value, elementId) => {
    updateCourse({
      ...course,
      [elementId]: value
    })
  }

  useEffect(() => {
    if (createCourseState.succeeded) {
      updateCourse(initialState)
    }
  })

  return (
    <CourseCreatePage
      {...course}
      instructorOptions={[{ label: '', value: null }, ...instructorOptions]}
      onSave={onSave}
      onFieldChange={onFieldChange}
    />
  )
}
