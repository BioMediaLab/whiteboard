import React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Card from 'components/Card'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'

import { listQuizzes } from 'graphql/queries'

const ListItem = ({ id, title, description }) => {
  const url = `./${id}`

  return (
    <ResourceListItem id={id} url={url}>
      <Title>{title}</Title>
      {description && <p>{description}</p>}
    </ResourceListItem>
  )
}

const ListView = ({ items }) => {
  return <ResourceList items={items} renderItem={ListItem} />
}

export default () => {
  return (
    <Connect query={graphqlOperation(listQuizzes)}>
      {({ data: { listQuizzes }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !listQuizzes) return <SkeletonPage />

        return (
          <Page
            title="Quizzes"
            primaryAction={{
              content: 'Create',
              url: './create'
            }}>
            <Card>
              <ListView items={listQuizzes.items} />
            </Card>
          </Page>
        )
      }}
    </Connect>
  )
}
