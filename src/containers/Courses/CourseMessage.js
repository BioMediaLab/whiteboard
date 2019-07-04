import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import { SkeletonPage } from 'components/Skeleton'
import TextField from 'components/TextField'
import { getCourse } from 'graphql/queries'
import { updateCourse as updateCourseMutation } from 'graphql/mutations'

const ResourcePage = ({ id, title, description }) => {
  const [_title, setTitle] = useState(title)
  const [_description, setDescription] = useState(description)

  const updateCourse = () => {
    API.graphql(
      graphqlOperation(updateCourseMutation, {
        input: {
          id,
          title: _title,
          description: _description
        }
      })
    )
  }
  const handleSubmit = () => {
    updateCourse()
  }

  return (
    <Page
      title="Course Messages"
      breadcrumbs={[
        {
          content: 'Courses',
          url: '../'
        }
      ]}
    >
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="message"
              id="description"
              name="description"
              value={_description}
              onChange={value => setDescription(value)}
              multiline={3}
            />
            <Button primary submit>
              Send
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}

export default ({ courseId }) => {
  return (
    <Connect query={graphqlOperation(getCourse, { id: courseId })}>
      {({ data: { getCourse }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !getCourse) return <SkeletonPage />

        return <ResourcePage {...getCourse} />
      }}
    </Connect>
  )
}
