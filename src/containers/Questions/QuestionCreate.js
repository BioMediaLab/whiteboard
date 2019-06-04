import React, { useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Page from 'components/Page'
import PageActions from 'components/PageActions'
import { createQuestion } from 'graphql/mutations'
import QuestionForm from 'components/QuestionForm/'

const questionInitialState = {
  question: '',
  choices: [],
  answer: null
}

const questionReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_QUESTION':
      // payload = string
      return {
        ...state,
        question: payload
      }
    case 'UPDATE_CHOICE':
      // payload = {key, value}
      return {
        ...state,
        choices: state.choices.map(choice => {
          if (choice.key !== payload.key) {
            return choice
          }

          return {
            ...payload
          }
        }) // payload = {key, value}
      }
    case 'ADD_CHOICE':
      // payload = {key, value}
      return {
        ...state,
        choices: [...state.choices, payload] // payload = {key, value}
      }
    case 'REMOVE_CHOICE':
      // payload = key
      return {
        ...state,
        choices: state.choices.filter(choice => choice.key !== payload.key)
      }
    case 'UPDATE_ANSWER':
      // payload = {key, value}
      return {
        ...state,
        question: payload
      }
    case 'RESET_QUESTION':
      return {
        ...questionInitialState
      }
    default:
      return state
  }
}

export default () => {
  const [question, dispatch] = useReducer(questionReducer, questionInitialState)

  const saveQuestion = () => {
    return API.graphql(
      graphqlOperation(createQuestion, {
        input: question
      })
    )
  }

  const handleSubmit = () => {
    saveQuestion()
      .then(data => {
        dispatch({ type: 'RESET_QUESTION' })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Page
      title="Create Question"
      breadcrumbs={[
        {
          content: 'Questions',
          url: '../'
        }
      ]}
    >
      <QuestionForm
        question={question.question}
        choices={question.choices}
        answer={question.answer}
        onUpdateQuestion={payload => {
          dispatch({ type: 'UPDATE_QUESTION', payload })
        }}
        onUpdateChoice={payload => {
          dispatch({ type: 'UPDATE_CHOICE', payload })
        }}
        onAddChoice={payload => {
          dispatch({ type: 'ADD_CHOICE', payload })
        }}
        onRemoveChoice={payload => {
          dispatch({ type: 'REMOVE_CHOICE', payload })
        }}
        onUpdateAnswer={payload => {
          dispatch({ type: 'UPDATE_ANSWER', payload })
        }}
      />

      <PageActions
        primaryAction={{ content: 'Create', onAction: handleSubmit }}
      />
    </Page>
  )
}
