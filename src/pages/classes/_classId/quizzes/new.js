import React, { useReducer, useState } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import Title from 'components/Title'
import Question from './question'

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

export default ({ mutation, title = '', classId, description = '' }) => {
  const initialState = {
    quizClassId: classId,
    title,
    description,
    questions: []
  }
  const [questions, setState, choice] = useState([]);
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

      <Form onSubmit={handleSubmit}>
        <Card primaryFooterAction={{ content: "Save" }}>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Title"
                id="title"
                name="title"
                value={state.title}
                onChange={(value, id) => {
                  dispatch({ type: 'UPDATE_TEXT', payload: { id, value } })
                }}
              />
              <TextField
                label="Description"
                id="description"
                name="description"
                value={state.description}
                onChange={(value, id) => {
                  dispatch({ type: 'UPDATE_TEXT', payload: { id, value } })
                }}
              />
            </FormLayout>
          </Card>
          <Card sectioned>
            <Title element="h3">Questions</Title>
            {questions.map((question, index) => (
              <Question key={index} />
            ))}
            <Button onClick={() => {
              const newQuestions = [...questions];
              newQuestions.push({ id: newQuestions.length });
              setState(newQuestions);
            }}>Add Question</Button>
          </Card>
        </Card>
      </Form>

    </Page>
  )
}



