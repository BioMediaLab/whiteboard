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
import { updateQuestion as updateQuestionMutation } from 'graphql/mutations'

const ResourcePage = ({ id, question }) => {
  const [_question, setQuestion] = useState(question)
  const updateQuestion = () => {
    API.graphql(
      graphqlOperation(updateQuestionMutation, {
        input: {
          id,
          question: _question
        }
      })
    )
  }
  const handleSubmit = () => {
    updateQuestion()
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
            <TextField
              label="question"
              id="question"
              name="question"
              value={_question}
              onChange={value => setQuestion(value)}
            />
            <Button primary submit>
              Save
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
