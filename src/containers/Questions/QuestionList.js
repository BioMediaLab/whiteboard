import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Card from 'components/Card'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'
import { deleteQuestion } from 'graphql/mutations'
import { onDeleteQuestion } from 'graphql/subscriptions'
import { listQuestions } from 'graphql/queries'
import { TrashIcon } from 'components/Icon'

const ListItem = ({ id, question }) => {
  const url = `./${id}`

  return (
    <ResourceListItem id={id} url={url} shortcutActions={[{
      icon: <TrashIcon />,
      onAction: () => {
        handleDelete(id)
      }
    }]}>
      <Title>{question}</Title>
    </ResourceListItem>
  )
}

const handleDelete = async (id) => {
  return  API.graphql(
    graphqlOperation(deleteQuestion, {
      input: {
        id
      }
    })
  );
}

const ListView = ({ items }) => {
  return <ResourceList items={items} renderItem={ListItem} />
}

export default () => {
  return (
    <Connect query={graphqlOperation(listQuestions)}
    subscription={graphqlOperation(onDeleteQuestion)}
    onSubscriptionMsg={(prev,{onDeleteQuestion}) => {
      prev.listQuestions.items = prev.listQuestions.items.filter(item => item.id !== onDeleteQuestion.id);
      return prev;
    }}>
      {({ data: { listQuestions }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !listQuestions) return <SkeletonPage />

        return (
          <Page
            title="Questions"
            primaryAction={{
              content: 'Create',
              url: './create'
            }}>
            <Card>
              <ListView items={listQuestions.items} />
            </Card>
          </Page>
        )
      }}
    </Connect>
  )
}
