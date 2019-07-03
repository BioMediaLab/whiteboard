import React, { useReducer, useState } from 'react'
import { Card, Notifications, Page, PageActions } from 'components'

import { useApi } from 'hooks'
import QuestionBankQuestions from './QuestionBankQuestions'
import QuestionBankDetails from './QuestionBankDetails'
import reducer from './reducer'

const CHOICE_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

const QuestionBankCreatePage = ({ questionBank, ...props }) => {
  const [state, dispatch] = useReducer(reducer, questionBank)
  const [notifications, setNotifications] = useState([])
  const [createState, createQuestionBank] = useApi('createQuestionBank')

  const onAddQuestion = () => {
    const questions = state.questions || []
    const largestKey = questions.reduce((accum, question) => {
      if (question.key > accum) {
        return question.key
      }

      return accum
    }, 0)
    dispatch({
      type: 'ADD_QUESTION',
      payload: {
        key: largestKey + 1,
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
  const onUpdateQuestion = (questionKey, question) => {
    dispatch({
      type: 'UPDATE_QUESTION',
      questionKey,
      payload: question
    })
  }
  const onAddChoice = questionKey => {
    const question = state.questions.filter(
      question => question.key === questionKey
    )
    const key = CHOICE_KEYS[question[0].choices.length]
    dispatch({
      type: 'ADD_CHOICE',
      questionKey,
      payload: {
        key,
        value: ''
      }
    })
  }
  const onUpdateChoice = (questionKey, choice) => {
    dispatch({
      type: 'UPDATE_CHOICE',
      questionKey,
      payload: choice
    })
  }
  const onToggleAnswer = (questionKey, choice) => {
    dispatch({
      type: 'TOGGLE_ANSWER',
      questionKey,
      payload: choice
    })
  }
  const onSave = () => {
    createQuestionBank(state).then(data => {
      addNotification({ content: 'Question bank created' })
      dispatch({ type: 'RESET' })
    })
  }
  const addNotification = notification => {
    setNotifications([...notifications, notification])
  }

  return (
    <Page
      title="Question Bank"
      primaryAction={{
        content: 'Save',
        id: "primary-action-1",
        onAction: onSave
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
            id: 'button-add-question',
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
          content: 'Save',
          id: "primary-action-2",
          onAction: onSave
        }}
      />
      <Notifications notifications={notifications} />
    </Page>
  )
}

export const QuestionBankCreate = props => {
  const questionBank = {
    title: '',
    description: '',
    courseId: '',
    questions: []
  }

  return <QuestionBankCreatePage questionBank={questionBank} />
}
