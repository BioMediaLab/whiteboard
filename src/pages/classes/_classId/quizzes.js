import React from 'react'
import Card from 'components/Card'
import Page from 'components/Page'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'
import ResourceNav from 'components/ResourceNav'

const ListItem = ({ id, description, title }) => {
  const url = `./${id}`

  return (
    <ResourceListItem id={id} url={url} shortcutActions={[{
      icon: "delete", destructive:true, onClick: () => {
        // TODO: Implement delete quiz here.
      }
    }]}>
      <Title>{title}</Title>
      {description && <p>{description}</p>}
    </ResourceListItem>
  )
}

const ListView = ({ items }) => {
  return <ResourceList items={items} renderItem={ListItem} />
}

export default ({ data }) => {
  return (
    <Page
      title={`${data.getClass.title} Quizzes`}
      breadcrumbs={[
        {
          content: 'Classes',
          url: '../'
        },
        {
          content: 'Quizzes',
          url: '../..'
        }
      ]}
      primaryAction={{
        content: 'New',
        url: './new',
      }}>
      <Card sectioned>
        <ResourceNav selected={1} baseUrl={`/classes`} id={data.getClass.id} />
        <ListView items={data.getClass.quizzes.items} />
      </Card>
    </Page>
  )
}
