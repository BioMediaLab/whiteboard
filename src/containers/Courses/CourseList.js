import React, { useState } from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Card from 'components/Card'
import Page from 'components/Page'
import { SkeletonPage } from 'components/Skeleton'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'
import { TextField, FilterType } from '@shopify/polaris'

import { listCourses } from 'graphql/queries'

const resourceName = {
  singular: 'course',
  plural: 'courses'
}

const filters = [
  {
    key: 'orderCountFilter',
    label: 'Number of orders',
    operatorText: 'is greater than',
    type: FilterType.TextField
  },
  {
    key: 'accountStatusFilter',
    label: 'Account status',
    operatorText: 'is',
    type: FilterType.Select,
    options: ['Enabled', 'Invited', 'Not invited', 'Declined']
  }
]

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
  const [searchValue, setSearchValue] = useState('')

  const filterControl = (
    <ResourceList.FilterControl
      filters={filters}
      searchValue={searchValue}
      onSearchChange={value => setSearchValue(value)}
    />
  )

  return (
    <ResourceList
      resourceName={resourceName}
      items={items}
      renderItem={ListItem}
      filterControl={filterControl}
    />
  )
}

export default () => {
  return (
    <Connect query={graphqlOperation(listCourses)}>
      {({ data: { listCourses }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !listCourses) return <SkeletonPage />

        return (
          <Page
            title="Courses"
            primaryAction={{
              content: 'Create',
              url: './create'
            }}
          >
            <Card>
              <ListView items={listCourses.items} />
            </Card>
          </Page>
        )
      }}
    </Connect>
  )
}
