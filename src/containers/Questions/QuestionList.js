import React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Card from 'components/Card'
import Metadata from 'components/Metadata'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'

import { listQuestions } from 'graphql/queries'

const ListItem = ({ id, description, quizzes, title }) => {
  const url = `./${id}`

  return (
    <ResourceListItem id={id} url={url}>
      <Title>{title}</Title>
      {description && <p>{description}</p>}
      <Metadata>quizzes: {quizzes.length || 0}</Metadata>
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
            title="questions"
            primaryAction={{
              content: 'New',
              url: './new'
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
