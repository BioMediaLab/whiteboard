import React, { useReducer } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'

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

export default ({ mutation, data }) => {
  const {
    class: { id: quizClassId },
    questions,
    ...fields
  } = data.getQuiz
  const initialState = {
    ...fields,
    quizClassId
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit = event => {
    mutation({ input: state })
  }

  return (
    <Page
      title="Edit Quiz"
      breadcrumbs={[
        {
          content: data.getQuiz.class.title,
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
            <Button primary submit>
              Save
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}
