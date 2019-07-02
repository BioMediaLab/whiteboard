import React, { useReducer, useState } from 'react'
import { Card, LoadingPage, Notifications, Page, PageActions } from 'components'

import { useApi, useDataLoader } from 'hooks'
import QuizQuestions from './QuizQuestions'
import QuizDetails from './QuizDetails'
import reducer from './reducer'

const CHOICE_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

const QuizPage = ({ quiz, ...props }) => {
  const [state, dispatch] = useReducer(reducer, quiz)
  const [notifications, setNotifications] = useState([])
  const [quizState, updateQuiz] = useApi('updateQuiz')

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
    const { course, ...updatedQuiz } = state
    updateQuiz(updatedQuiz).then(data => {
      addNotification({ content: 'Quiz updated' })
    })
  }
  const addNotification = notification => {
    setNotifications([...notifications, notification])
  }

  return (
    <Page
      title="Quiz"
      primaryAction={{
        content: 'Save',
        onAction: onSave
      }}
    >
      <Card>
        <Card.Section title="Details">
          <QuizDetails
            {...state}
            onUpdateTitle={onUpdateTitle}
            onUpdateDescription={onUpdateDescription}
          />
        </Card.Section>
        <Card.Section
          title="Questions"
          actions={{
            content: 'Add Question',
            onAction: onAddQuestion
          }}
        >
          <QuizQuestions
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
          onAction: onSave
        }}
      />
      <Notifications notifications={notifications} />
    </Page>
  )
}

export const Quiz = props => {
  const { pending, succeeded, errored, data, errors } = useDataLoader(
    'getQuiz',
    { id: props.quizId }
  )

  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  const quiz = {
    ...data,
    quizCourseId: props.courseId
  }

  return <QuizPage {...props} quiz={quiz} />
}
