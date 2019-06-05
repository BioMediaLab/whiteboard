import React from 'react'
import Card from 'components/Card'
import TextField from 'components/TextField'
import Form, { FormLayout } from 'components/Form'
import Button from 'components/Button'

import QuestionFormChoice from './QuestionFormChoice'

export default ({
  question = '',
  choices = [],
  onUpdateQuestion,
  onUpdateChoice,
  onAddChoice,
  onRemoveChoice
}) => {
  const CHOICE_KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

  return (
    <Form>
      <Card>
        <Card.Section title="Question">
          <TextField
            label="Question"
            id="question"
            name="question"
            value={question}
            onChange={onUpdateQuestion}
          />
        </Card.Section>
        <Card.Section title="Choices">
          <FormLayout>
            {choices &&
              choices.map(({ value }, index) => {
                const key = CHOICE_KEYS[index]

                return (
                  <QuestionFormChoice
                    key={key}
                    _key={key}
                    value={value}
                    onRemoveChoice={onRemoveChoice}
                    onUpdateChoice={onUpdateChoice}
                  />
                )
              })}
            <Button
              onClick={() => {
                onAddChoice({
                  key: CHOICE_KEYS[choices.length],
                  value: ''
                })
              }}
            >
              Add Option
            </Button>
          </FormLayout>
        </Card.Section>
      </Card>
    </Form>
  )
}
