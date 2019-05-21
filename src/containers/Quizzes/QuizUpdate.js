import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import { SkeletonPage } from 'components/Skeleton'
import TextField from 'components/TextField'
import { getQuiz } from 'graphql/queries'
import { updateQuiz as updateQuizMutation } from 'graphql/mutations'

const ResourcePage = ({ id, title, description }) => {
  const [_title, setTitle] = useState(title)
  const [_description, setDescription] = useState(description)

  const updateQuiz = () => {
    API.graphql(
      graphqlOperation(updateQuizMutation, {
        input: {
          id,
          title: _title,
          description: _description
        }
      })
    )
  }
  const handleSubmit = () => {
    updateQuiz()
  }

  return (
    <Page
      title="Update Quiz"
      breadcrumbs={[
        {
          content: 'Quizzes',
          url: '../'
        }
      ]}>
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="title"
              id="title"
              name="title"
              value={_title}
              onChange={value => setTitle(value)}
            />
            <TextField
              label="description"
              id="description"
              name="description"
              value={_description}
              onChange={value => setDescription(value)}
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

export default ({ quizId }) => {
  return (
    <Connect query={graphqlOperation(getQuiz, { id: quizId })}>
      {({ data: { getQuiz }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !getQuiz) return <SkeletonPage />

        return <ResourcePage {...getQuiz} />
      }}
    </Connect>
  )
}
