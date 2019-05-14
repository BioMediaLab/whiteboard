import React, { useReducer } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import Title from 'components/Title'

const reducer = (current, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_TEXT':
      const { id, value } = payload
      return {
        ...current,
        [id]: value
      }
    default:
      return current
  }
}

export default ({ mutation, title = '', classId }) => {
  const initialState = {
    quizClassId: classId,
    title,
    questions: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit = event => {
    mutation({ input: state })
  }

  return (
    <Page
      title="New Quiz"
      breadcrumbs={[
        {
          content: 'Quizzes',
          url: '../'
        }
      ]}>
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="title"
              id="title"
              name="title"
              value={state.title}
              onChange={(value, id) => {
                dispatch({ type: 'UPDATE_TEXT', payload: { id, value } })
              }}
            />
            <Title element="h3">Questions</Title>
            <Button primary submit>
              Create
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}
