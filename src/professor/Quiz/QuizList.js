import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Card,
  Page,
  PageActions,
  ResourceList,
  Stack,
  TextContainer,
  TextStyle,
  Title
} from 'components'
import { useApi } from 'hooks'

const QuizList = ({ items, renderItem }) => {
  return (
    <Page
      items={items}
      renderItem={renderItem}
      title="Quizzes"
      primaryAction={{ content: 'Create', url: './create' }}
    >
      <Card>
        <ResourceList items={items} renderItem={renderItem} />
      </Card>
      <PageActions primaryAction={{ content: 'Create', url: './create' }} />
    </Page>
  )
}

const QuizListItem = ({ id, quizId, title, description, semester }) => (
  <ResourceList.Item id={id} url={`./${id}`}>
    <TextContainer spacing="tight">
      <Title>{title}</Title>
      <p>{description}</p>
      <Stack>
        <TextStyle variation="subdued">Semester: Spring 2019</TextStyle>
        <TextStyle variation="subdued">Professor: Jane Doe</TextStyle>
        <TextStyle variation="subdued">Students: 21</TextStyle>
      </Stack>
    </TextContainer>
  </ResourceList.Item>
)

export default props => {
  const api = useApi()
  const dispatch = useDispatch()
  const entities = useSelector(state => state.entities)
  const quizEntities = entities.quizzes
  // const quizzes = Object.values(quizEntities)
  // const { pending, succeeded, errored } = useSelector(
  //   state => state.requests.listQuizzes
  // )

  const quizzes = [
    {
      id: 'quiz1',
      createdAt: '2019-01-01T01:01:01Z',
      updatedAt: '2019-01-01T01:01:01Z',
      title: 'Quiz #1',
      description: 'A description of the quiz',
      course: {
        id: 'course-1'
      }
    },
    {
      id: 'quiz2',
      createdAt: '2019-01-01T01:01:01Z',
      updatedAt: '2019-01-01T01:01:01Z',
      title: 'Quiz #2',
      description: 'A description of the quiz',
      course: {
        id: 'course-1'
      }
    },
    {
      id: 'quiz3',
      createdAt: '2019-01-01T01:01:01Z',
      updatedAt: '2019-01-01T01:01:01Z',
      title: 'Quiz #3',
      description: 'A description of the quiz',
      course: {
        id: 'course-1'
      }
    }
  ]

  // useEffect(() => {
  //   const loadData = async () => {
  //     const payload = await api.execute('listQuizzes')

  //     dispatch({ type: 'ADD_QUIZZES', payload })
  //   }
  //   if (!pending && !succeeded && !errored) {
  //     loadData()
  //   }
  // })

  // if (pending && !succeeded && !errored) {
  //   return <p>Loading...</p>
  // }

  return <QuizList items={quizzes} renderItem={QuizListItem} />
}
