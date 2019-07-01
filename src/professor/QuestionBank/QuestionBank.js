import React, { useReducer } from 'react'
import { Card, LoadingPage, Page, PageActions } from 'components'

import { useDataLoader, useApi } from 'hooks'
import QuestionBankQuestions from './QuestionBankQuestions'
import QuestionBankDetails from './QuestionBankDetails'
import reducer from './reducer'

const CHOICE_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

const QuestionBankPage = ({ questionBank, onUpdate, ...props }) => {
  const [state, dispatch] = useReducer(reducer, questionBank)
  const onAddQuestion = () => {
    const questions = state.questions || []
    const largestId = questions.reduce((accum, question) => {
      if (question.id > accum) {
        return question.id
      }

      return accum
    }, 0)
    dispatch({
      type: 'ADD_QUESTION',
      payload: {
        id: largestId + 1,
        question: '',
        choices: [],
        answers: []
      }
    })
  }
  const onUpdateTitle = title => {
    dispatch({
      type: 'UPDATE',
      payload: {
        title
      }
    })
  }
  const onUpdateDescription = description => {
    dispatch({
      type: 'UPDATE',
      payload: {
        description
      }
    })
  }
  const onUpdateCourseId = courseId => {
    dispatch({
      type: 'UPDATE',
      payload: {
        courseId
      }
    })
  }
  const onUpdateQuestion = (questionId, question) => {
    dispatch({
      type: 'UPDATE_QUESTION',
      questionId,
      payload: question
    })
  }
  const onAddChoice = questionId => {
    const question = state.questions.filter(
      question => question.id === questionId
    )
    const key = CHOICE_KEYS[question[0].choices.length]
    dispatch({
      type: 'ADD_CHOICE',
      questionId,
      payload: {
        key,
        value: ''
      }
    })
  }
  const onUpdateChoice = (questionId, choice) => {
    dispatch({
      type: 'UPDATE_CHOICE',
      questionId,
      payload: choice
    })
  }
  const onToggleAnswer = (questionId, choice) => {
    dispatch({
      type: 'TOGGLE_ANSWER',
      questionId,
      payload: choice
    })
  }

  return (
    <Page
      title="Question Bank"
      primaryAction={{
        content: 'Update',
        onAction: () => {
          onUpdate(state)
        }
      }}
    >
      <Card>
        <Card.Section title="Details">
          <QuestionBankDetails
            {...state}
            onUpdateTitle={onUpdateTitle}
            onUpdateDescription={onUpdateDescription}
            onUpdateCourseId={onUpdateCourseId}
          />
        </Card.Section>
        <Card.Section
          title="Questions"
          actions={{
            content: 'Add Question',
            onAction: onAddQuestion
          }}
        >
          <QuestionBankQuestions
            {...state}
            onUpdateQuestion={onUpdateQuestion}
            onUpdateChoice={onUpdateChoice}
            onAddChoice={onAddChoice}
            onToggleAnswer={onToggleAnswer}
          />
        </Card.Section>
      </Card>
      <PageActions
        primaryAction={{
          content: 'Update',
          onAction: () => {
            console.log(state)
            onUpdate(state)
          }
        }}
      />
    </Page>
  )
}

export const QuestionBank = props => {
  const { pending, succeeded, errored, data, errors } = useDataLoader(
    'getQuestionBank',
    { id: props.questionBankId }
  )
  const [updateState, updateQuestionBank] = useApi('updateQuestionBank')

  const questionBank = data || {}

  const onUpdate = updatedQuestionBank => {
    updateQuestionBank(updatedQuestionBank)
  }

  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  return (
    <QuestionBankPage
      questionBank={questionBank}
      {...props}
      onUpdate={onUpdate}
    />
  )
}
