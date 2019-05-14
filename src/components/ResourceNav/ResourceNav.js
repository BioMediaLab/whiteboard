import React from 'react'
import TabBar from 'components/TabBar'
import './ResourceNav.css'

const ResourceNav = ({ selected, baseUrl, id }) => {
  const tabs = [
    { id: 'class-overview', content: 'Overview', url: `${baseUrl}/${id}` },
    { id: 'class-quizzes', content: 'Quizzes', url: `${baseUrl}/${id}/quizzes` }
  ]
  return <TabBar tabs={tabs} selected={selected} />
}

export default ResourceNav
