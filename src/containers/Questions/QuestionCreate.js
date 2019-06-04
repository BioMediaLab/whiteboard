import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import { createQuestion } from 'graphql/mutations'
import { Question } from './shared/QuestionForm'

export default ({ id, question, choices, answer }) => {
  const [_question, setQuestion] = useState({
    question,
    choices,
    answer
  })
  const saveQuestion = () => {
    return API.graphql(
      graphqlOperation(createQuestion, {
        input: {
          id,
          question: _question.question,
          choices: _question.choices,
          answer: _question.answer
        }
      })
    )
  }

  const resetQuestion = () => {
    setQuestion('')
  }
  const handleSubmit = () => {
    saveQuestion()
      .then(data => {
        resetQuestion()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleQuestionCreate = (questionDetails) => {
    setQuestion(questionDetails)
  }

  return (
    <Page
      title="Create Question"
      breadcrumbs={[
        {
          content: 'Questions',
          url: '../'
        }
      ]}>
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Question question={_question.question} choices={_question.choices} answer={_question.answer} onQuestionEdit={handleQuestionCreate} />
            <Button submit>Create</Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}
