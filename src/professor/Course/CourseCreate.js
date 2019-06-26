import React, { useState } from 'react'
import {
  Card,
  Form,
  FormLayout,
  Page,
  PageActions,
  TextField
} from 'components'
import { useApi } from 'hooks'

const CourseCreatePage = ({
  description,
  title,
  courseId,
  onTextFieldChange,
  onSave
}) => {
  return (
    <Page
      title="Create Course"
      primaryAction={{ content: 'Create', onAction: onSave }}
    >
      <Card sectioned>
        <Form>
          <FormLayout>
            <TextField
              id="title"
              label="Title"
              value={title}
              onChange={onTextFieldChange}
            />
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={onTextFieldChange}
            />
            <TextField
              id="courseId"
              label="Course Id"
              value={courseId}
              onChange={onTextFieldChange}
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
    courseId: ''
  }
  const [course, updateCourse] = useState(initialState)
  const api = useApi()

  const onSave = async () => {
    api.execute('createCourse', course)
  }

  const onTextFieldChange = (value, elementId) => {
    updateCourse({
      ...course,
      [elementId]: value
    })
  }

  return (
    <CourseCreatePage
      {...course}
      onSave={onSave}
      onTextFieldChange={onTextFieldChange}
    />
  )
}
