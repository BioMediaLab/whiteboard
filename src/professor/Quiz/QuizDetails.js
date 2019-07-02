import React from 'react'
import { Form, FormLayout, TextField } from 'components'

export default ({
  quizCourseId,
  description,
  title,
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
          label="Description"
          value={description}
          onChange={onUpdateDescription}
        />
        <TextField
          id="quizCourseId"
          label="Course Id"
          value={quizCourseId}
          disabled
        />
      </FormLayout>
    </Form>
  )
}
