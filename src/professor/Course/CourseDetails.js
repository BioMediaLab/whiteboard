import React, { useReducer } from 'react'
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Stack,
  TextField
} from 'components'
import reducer from './reducer'
import { useApi } from 'hooks'

const CourseDetails = ({ course }) => {
  const [state, dispatch] = useReducer(reducer, course)
  const [updatedCourse, updateCourse] = useApi('updateCourse')
  const [deletedCourse, deleteCourse] = useApi('deleteCourse')

  const onSave = () => {
    const { id, title, description, courseId } = state
    updateCourse({ id, title, description, courseId })
  }

  const onDelete = () => {
    const { id } = state
    deleteCourse({ id })
  }

  return (
    <Layout>
      <Layout.Section>
        <Card.Section>
          <Form
            onSubmit={() => {
              onSave(state)
            }}
          >
            <FormLayout>
              <TextField
                id="title"
                label="Title"
                value={state.title}
                onChange={value => {
                  dispatch({
                    type: 'UPDATE',
                    payload: {
                      title: value
                    }
                  })
                }}
              />
              <TextField
                id="description"
                label="Description"
                value={state.description}
                onChange={value => {
                  dispatch({
                    type: 'UPDATE',
                    payload: {
                      description: value
                    }
                  })
                }}
              />
              <TextField
                id="courseId"
                label="Course Id"
                value={state.courseId}
                onChange={value => {
                  dispatch({
                    type: 'UPDATE',
                    payload: {
                      courseId: value
                    }
                  })
                }}
              />
              <Stack alignment="center">
                <Stack.Item fill>
                  <Button plain onClick={onDelete}>
                    Delete
                  </Button>
                </Stack.Item>
                <Stack.Item>
                  <Button primary submit>
                    Save
                  </Button>
                </Stack.Item>
              </Stack>
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
