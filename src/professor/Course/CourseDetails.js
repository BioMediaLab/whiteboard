import React from 'react'
import { Card, Form, FormLayout, Layout, TextField } from 'components'

const CourseDetails = ({
  course,
  onUpdateCourseId,
  onUpdateTitle,
  onUpdateDescription
}) => {
  return (
    <Layout>
      <Layout.Section>
        <Card.Section>
          <Form>
            <FormLayout>
              <TextField
                id="title"
                label="Title"
                value={course.title}
                onChange={title => {
                  onUpdateTitle(title)
                }}
              />
              <TextField
                id="description"
                label="Description"
                value={course.description}
                onChange={description => {
                  onUpdateDescription(description)
                }}
              />
              <TextField
                id="courseId"
                label="Course Id"
                value={course.courseId}
                onChange={courseId => {
                  onUpdateCourseId(courseId)
                }}
              />
            </FormLayout>
          </Form>
        </Card.Section>
      </Layout.Section>
      <Layout.Section secondary>
        <Card.Section title="Settings">
          <p>section for page settings</p>
        </Card.Section>
      </Layout.Section>
    </Layout>
  )
}

export default CourseDetails
