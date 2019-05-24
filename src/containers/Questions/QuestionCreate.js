import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import { createQuestion } from 'graphql/mutations'
import { Question } from './Questions'

export default () => {
  const [question, setQuestion] = useState('')
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState('');
  const saveQuestion = () => {
    return API.graphql(
      graphqlOperation(createQuestion, {
        input: {
          question,
          choices,
          answer
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
            {/* <TextField
              label="question"
              id="question"
              name="question"
              value={question}
              onChange={value => setQuestion(value)}
            /> */}
            <Question question={{ question, choices,answer }}></Question>
            <Button submit>Create</Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  )
}
