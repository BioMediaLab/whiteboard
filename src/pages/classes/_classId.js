import React, { useReducer } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import ResourceNav from 'components/ResourceNav'

const reducer = (current, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_TEXT':
      const { id, value } = payload
      return {
        ...current,
        [id]: value
      }
    default:
      return current
  }
}

export default ({ mutation, data }) => {
  const { id = '', title = '', description = '' } = data.getClass
  const initialState = { id, title, description }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit = event => {
    mutation({ input: state })
  }

  return (
    <Page
      title="Class Details"
      breadcrumbs={[
        {
          content: 'Classes',
          url: '../'
        }
      ]}>
      <Card sectioned>
        <ResourceNav selected={0} baseUrl={`/classes`} id={data.getClass.id} />
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="title"
              id="title"
              name="title"
              value={state.title}
              onChange={(value, id) => {
                dispatch({ type: 'UPDATE_TEXT', payload: { id, value } })
              }}
            />
            <TextField
              label="description"
              id="description"
              name="description"
              value={state.description}
              onChange={(value, id) => {
                dispatch({ type: 'UPDATE_TEXT', payload: { id, value } })
              }}
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
