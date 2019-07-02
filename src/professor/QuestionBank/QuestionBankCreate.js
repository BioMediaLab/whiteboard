import React, { useReducer } from 'react'
import {
  Card,
  Form,
  FormLayout,
  Page,
  PageActions,
  TextField
} from 'components'
import { useApi } from 'hooks'
import reducer from './reducer'

const QuestionBankCreatePage = ({ onCreate }) => {
  const initialState = {
    title: '',
    description: '',
    courseId: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const onTitleUpdate = value => {
    dispatch({ type: 'UPDATE', payload: { title: value } })
  }
  const onDescriptionUpdate = value => {
    dispatch({ type: 'UPDATE', payload: { description: value } })
  }
  const onCourseIdUpdate = value => {
    dispatch({ type: 'UPDATE', payload: { courseId: value } })
  }
  return (
    <Page
      title="Create Question Bank"
      primaryAction={{
        content: 'Create',
        id: "primary-action-1",
        onAction: () => {
          onCreate(state)
        }
      }}
    >
      <Card sectioned>
        <Form>
          <FormLayout>
            <TextField
              id="title"
              label="Title"
              value={state.title}
              onChange={onTitleUpdate}
            />
            <TextField
              id="description"
              label="Description"
              value={state.description}
              onChange={onDescriptionUpdate}
            />
            <TextField
              id="courseId"
              label="Course Id"
              value={state.courseId}
              onChange={onCourseIdUpdate}
            />
          </FormLayout>
        </Form>
      </Card>

      <PageActions
        primaryAction={{
          content: 'Create',
          id:"primary-action-2",
          onAction: () => {
            onCreate(state)
          }
        }}
      />
    </Page>
  )
}

export const QuestionBankCreate = () => {
  const [saveState, createQuestionBank] = useApi('createQuestionBank')

  return <QuestionBankCreatePage onCreate={createQuestionBank} />
}
