import React, { useReducer } from 'react'
import {
  Card,
  Form,
  FormLayout,
  Page,
  PageActions,
  TextField
} from 'components'
import Question from 'components/Question'
import reducer from './reducer'

const getMockQuestions = (count = 10) => {
  const mockQuestions = Array(count)
  mockQuestions.fill(true)
  return mockQuestions.map((question, index) => {
    return
  })
}

const CHOICE_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

const QuizCreatePage = ({
  quiz,
  dispatch,
  tabName = 'details',
  onUpdate,
  ...props
}) => {
  return (
    <Page
      title="Create Quiz"
      primaryAction={{ content: 'Create', onAction: () => {} }}
    >
      <Card>
        <Card.Section title="Details">
          <QuizDetails {...quiz} dispatch={dispatch} />
        </Card.Section>
        <Card.Section
          title="Questions"
          actions={{
            content: 'Add Question',
            onAction: () => {
              dispatch({
                type: 'ADD_QUIZ_QUESTION',
                payload: {
                  id: Date.now(),
                  question: '',
                  choices: [],
                  answers: []
                }
              })
            }
          }}
        >
          <QuizQuestions questions={quiz.questions} dispatch={dispatch} />
        </Card.Section>
      </Card>
      <PageActions primaryAction={{ content: 'Create', onAction: () => {} }} />
    </Page>
  )
}

const QuizDetails = ({ courseId, description, title, dispatch }) => {
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
          onChange={value =>
            dispatch({ type: 'UPDATE_QUIZ', payload: { title: value } })
          }
        />
        <TextField
          id="Description"
          label="Description"
          value={description}
          onChange={value =>
            dispatch({ type: 'UPDATE_QUIZ', payload: { description: value } })
          }
        />
        <TextField
          id="courseId"
          label="Course Id"
          value={courseId}
          onChange={value =>
            dispatch({ type: 'UPDATE_QUIZ', payload: { courseId: value } })
          }
        />
      </FormLayout>
    </Form>
  )
}

const QuizQuestions = ({ questions, dispatch }) => {
  return questions.map((question, index) => {
    return (
      <Card.Section
        key={question.id}
        title={`Question ${index + 1}`}
        actions={[
          {
            content: 'Add Choices',
            onAction: () => {
              dispatch({
                type: 'ADD_QUIZ_QUESTION_CHOICE',
                questionId: question.id,
                payload: {
                  key: CHOICE_KEYS[question.choices.length],
                  value: ''
                }
              })
            }
          }
        ]}
      >
        <Question question={question} dispatch={dispatch} />
      </Card.Section>
    )
  })
}

export const QuizCreate = props => {
  const initialState = {
    id: Date.now(),
    title: '',
    description: '',
    courseId: '',
    questions: [
      {
        id: `question-0`,
        question: '',
        choices: [{ key: 'a', value: '' }],
        answers: []
      }
    ]
  }

  const [quiz, dispatch] = useReducer(reducer, initialState)

  return <QuizCreatePage quiz={quiz} dispatch={dispatch} {...props} />
}
