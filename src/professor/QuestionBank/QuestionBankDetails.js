import React from 'react'
import { Form, FormLayout, TextField } from 'components'

export default ({
  courseId,
  description,
  title,
  onUpdateCourseId,
  onUpdateDescription,
  onUpdateTitle
}) => {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <FormLayout>
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={onUpdateTitle}
        />
        <TextField
          id="Description"
          label="description"
          value={description}
          onChange={onUpdateDescription}
        />
        <TextField
          id="courseId"
          label="Course Id"
          value={courseId}
          onChange={onUpdateCourseId}
        />
      </FormLayout>
    </Form>
  )
}
