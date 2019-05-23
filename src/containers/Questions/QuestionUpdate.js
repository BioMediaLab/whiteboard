import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import { SkeletonPage } from 'components/Skeleton'
import TextField from 'components/TextField'
import { getQuestion } from 'graphql/queries'
import { updateQuestion as updateQuestionMutation, listQuestions } from 'graphql/mutations'
import { Question } from './Questions'

const ResourcePage = ({ id, question, choices, answer }) => {
  const [_question, setQuestion] = useState(question)
  const [_isEditable, setEditable] = useState(false)
  const updateQuestion = () => {
    API.graphql(
      graphqlOperation(updateQuestionMutation, {
        input: {
          id,
          question: _question.question,
          choices: _question.choices,
          answer: _question.answer
        }
      })
    )
  }
  const toggleEdit = function () {
    if (_isEditable) {
      handleSubmit()
      setEditable(false)
    }
    else {
      setEditable(true)
    }
  }
  const handleSubmit = () => {
    updateQuestion()
  }

  const handleQuestionEdit = function (questionDetails) {
    setQuestion(questionDetails)
  }



  return (
    <Page
      title="Update Question"
      breadcrumbs={[
        {
          content: 'Questions',
          url: '../'
        }
      ]}>
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Question question={{ question, choices, answer }} disabled={!_isEditable} onQuestionEdit={handleQuestionEdit} />
            <Button primary onClick={toggleEdit}>
              {!_isEditable ? "Edit" : "Save"}
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}

export default ({ questionId }) => {
  return (
    <Connect query={graphqlOperation(getQuestion, { id: questionId })}>
      {({ data: { getQuestion }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !getQuestion) return <SkeletonPage />

        return <ResourcePage {...getQuestion} />
      }}
    </Connect>
  )
}
