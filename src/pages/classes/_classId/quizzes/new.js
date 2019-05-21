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
  const [questions, setState] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit = (event) => {
    // state.questions = questions
    // const questionSet= [{question:"abc",
    // choices:[{}]}]
    mutation({
      input: {
        quizClassId: state.quizClassId,
        title: state.title
      }
    })
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
        <Card sectioned primaryFooterAction={{
          content: "Save", type:"submit" , onAction: handleSubmit
        }}>
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
            <Card sectioned>
              <Title element="h3">Questions</Title>
              {questions.map((question, index) => (
                <Question key={index}
                  onChange={(question) => {
                    const newquestions = [...questions];
                    newquestions[index] = question;
                    setState(newquestions);
                    dispatch({ type: 'UPDATE_TEXT', payload: { index, newquestions } })
                  }}
                />
              ))}
              <Button onClick={() => {
                const newQuestions = [...questions];
                newQuestions.push({});
                setState(newQuestions);
              }}>Add Question</Button>
            </Card>
          </FormLayout>
        </Card>
      </Form>
    </Page>
  )
}



