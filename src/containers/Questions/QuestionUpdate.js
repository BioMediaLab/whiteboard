import React, { useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import PageActions from 'components/PageActions'
import { getQuestion } from 'graphql/queries'
import { updateQuestion } from 'graphql/mutations'
import QuestionForm from 'components/QuestionForm/'

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
    default:
      return state
  }
}

const QuestionUpdate = ({ id, question: initialQuestion, choices, answer }) => {
  const questionInitialState = {
    question: initialQuestion,
    choices,
    answer
  }

  const [question, dispatch] = useReducer(questionReducer, questionInitialState)

  const saveQuestion = () => {
    return API.graphql(
      graphqlOperation(updateQuestion, {
        input: {
          ...question,
          id
        }
      })
    )
  }

  const handleSubmit = () => {
    saveQuestion()
      .then(data => {})
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Page
      title="Update Question"
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
        primaryAction={{ content: 'Save', onAction: handleSubmit }}
      />
    </Page>
  )
}

export default ({ questionId }) => {
  return (
    <Connect query={graphqlOperation(getQuestion, { id: questionId })}>
      {({ data: { getQuestion }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !getQuestion) return <SkeletonPage />

        const props = {
          ...getQuestion,
          choices: getQuestion.choices || []
        }
        return <QuestionUpdate {...props} />
      }}
    </Connect>
  )
}
