import React from 'react'
import Card from 'components/Card'
import Metadata from 'components/Metadata'
import Page from 'components/Page'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'

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

const ListView = ({ classes }) => {
  return <ResourceList items={classes} renderItem={ListItem} />
}

export default ({ data }) => {
  return (
    <Page
      title="Classes"
      primaryAction={{
        content: 'New',
        url: './new'
      }}>
      <Card>
        <ListView classes={data.listClasses.items} />
      </Card>
    </Page>
  )
}
