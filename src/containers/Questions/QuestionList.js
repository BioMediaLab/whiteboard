import React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Card from 'components/Card'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'

import { listQuestions } from 'graphql/queries'

const ListItem = ({ id, question }) => {
  const url = `./${id}`

  return (
    <ResourceListItem id={id} url={url}>
      <Title>{question}</Title>
    </ResourceListItem>
  )
}

const ListView = ({ items }) => {
  return <ResourceList items={items} renderItem={ListItem} />
}

export default () => {
  return (
    <Connect query={graphqlOperation(listQuestions)}>
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
