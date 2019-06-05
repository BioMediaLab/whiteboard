import React, { useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Page from 'components/Page'
import PageActions from 'components/PageActions'
import { createQuestion } from 'graphql/mutations'
import QuestionForm from 'components/QuestionForm/'

import { initialState, reducer } from './state'

export default () => {
  const [question, dispatch] = useReducer(reducer, initialState)

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
