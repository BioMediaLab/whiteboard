import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import { createCourse } from 'graphql/mutations'

export default () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const saveCourse = () => {
    return API.graphql(
      graphqlOperation(createCourse, {
        input: {
          title,
          description
        }
      })
    )
  }
  const resetCourse = () => {
    setTitle('')
    setDescription('')
  }
  const handleSubmit = () => {
    saveCourse()
      .then(data => {
        resetCourse()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Page
      title="Create Course"
      breadcrumbs={[
        {
          content: 'Courses',
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
              value={title}
              onChange={value => setTitle(value)}
            />
            <TextField
              label="description"
              id="description"
              name="description"
              value={description}
              onChange={value => setDescription(value)}
            />
            <Button submit>Create</Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}
