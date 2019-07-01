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

const getMockQuestions = (count = 10) => {
  const mockQuestions = Array(count)
  mockQuestions.fill(true)
  return mockQuestions.map((question, index) => {
    return {
      id: `question-${index + 1}`,
      question: `What is the answer for question ${index + 1}?`,
      choices: [
        { key: 'a', value: 'one' },
        { key: 'b', value: 'two' },
        { key: 'c', value: 'three' }
      ],
      answers: [{ key: 'a', value: 'one' }]
    }
  })
}

const CHOICE_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

const QuizPage = ({
  quiz,
  dispatch,
  tabName = 'details',
  onUpdate,
  ...props
}) => {
  return (
    <Page title="Quiz" primaryAction={{ content: 'Save', onAction: () => {} }}>
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
      <PageActions primaryAction={{ content: 'Save', onAction: () => {} }} />
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
          label="description"
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

export const Quiz = props => {
  const initialState = {
    id: 'quiz1',
    createdAt: '2019-01-01T01:01:01Z',
    updatedAt: '2019-01-01T01:01:01Z',
    title: 'Questions for a quiz in math-101',
    description: 'Example description for the question bank',
    courseId: 'example-101',
    questions: getMockQuestions()
  }
  const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'UPDATE_QUIZ': {
        return {
          ...state,
          ...payload
        }
      }
      case 'ADD_QUIZ_QUESTION': {
        return {
          ...state,
          questions: [...state.questions, { ...payload }]
        }
      }
      case 'REMOVE_QUIZ_QUESTION': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.filter(
            question => question.id !== questionId
          )
        }
      }
      case 'UPDATE_QUIZ_QUESTION_QUESTION': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.map(question => {
            if (question.id !== questionId) {
              return question
            }

            return {
              ...question,
              question: payload
            }
          })
        }
      }
      case 'UPDATE_QUIZ_QUESTION_CHOICE': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.map(question => {
            if (question.id !== questionId) {
              return question
            }

            return {
              ...question,
              choices: question.choices.map(choice => {
                if (choice.key !== payload.key) {
                  return choice
                }

                return { ...payload }
              })
            }
          })
        }
      }
      case 'ADD_QUIZ_QUESTION_CHOICE': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.map(question => {
            if (question.id !== questionId) {
              return question
            }

            return {
              ...question,
              choices: [...question.choices, { ...payload }]
            }
          })
        }
      }
      case 'REMOVE_QUIZ_QUESTION_CHOICE': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.map(question => {
            if (question.id !== questionId) {
              return question
            }

            return {
              ...question,
              choices: question.choices.filter(
                choice => choice.key !== payload.key
              ),
              answers: question.answers.filter(
                answer => answer.key !== payload.key
              )
            }
          })
        }
      }
      case 'TOGGLE_QUIZ_QUESTION_ANSWER': {
        const { questionId } = action

        return {
          ...state,
          questions: state.questions.map(question => {
            if (question.id !== questionId) {
              return question
            }

            let answers = question.answers.filter(
              answer => answer.key !== payload.key
            )

            if (answers.length === question.answers.legnth) {
              answers = [...answers, { ...payload }]
            }

            return {
              ...question,
              answers
            }
          })
        }
      }

      default: {
        return state
      }
    }
  }

  const [quiz, dispatch] = useReducer(reducer, initialState)

  return <QuizPage quiz={quiz} dispatch={dispatch} {...props} />
}
