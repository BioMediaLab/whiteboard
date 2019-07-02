import React from 'react'
import {
  Card,
  LoadingPage,
  Page,
  PageActions,
  ResourceList,
  Stack,
  TextContainer,
  TextStyle,
  Title
} from 'components'
import { useDataLoader } from 'hooks'

const QuestionBankListPage = ({ items, renderItem }) => {
  return (
    <Page
      items={items}
      renderItem={renderItem}
      title="Question Banks"
      primaryAction={{ content: 'Create', url: './create' , id:'primary-action-create'}}
    >
      <Card>
        <ResourceList items={items} renderItem={renderItem} />
      </Card>
      <PageActions primaryAction={{ content: 'Create', url: './create' }} />
    </Page>
  )
}

const QuestionBankListItem = ({ id, courseId, title, description }) => (
  <ResourceList.Item id={id} url={`./${id}`}>
    <TextContainer spacing="tight">
      <Title>{title}</Title>
      <Stack>
        <TextStyle variation="subdued">Course: {courseId}</TextStyle>
        <TextStyle variation="subdued">Created By: Jane Doe</TextStyle>
      </Stack>
    </TextContainer>
  </ResourceList.Item>
)

export const QuestionBankList = props => {
  const { pending, succeeded, errored, data, errors } = useDataLoader(
    'listQuestionBanks'
  )
  const items = data || []

  if (pending && !succeeded && !errored) {
    return <LoadingPage />
  }

  return (
    <QuestionBankListPage items={items} renderItem={QuestionBankListItem} />
  )
}
