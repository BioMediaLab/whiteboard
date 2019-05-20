import React from 'react'
import { Redirect, Router } from '@reach/router'
import Home from 'pages/home'
import { QuestionCreate, QuestionList } from 'containers/Questions'
import Route from 'components/Route'
import * as mutations from 'graphql/mutations'
import * as queries from 'graphql/queries'

export default () => (
  <Router>
    <Home path="/" />
    <Redirect from="/home" to="/" />
    <QuestionList path="/questions" />
    <QuestionCreate path="/questions/create" />
    <Route path="/classes" query={queries.listClasses} />
    <Route path="/classes/new" mutation={mutations.createClass} />
    <Route
      path="/classes/:classId"
      mutation={mutations.updateClass}
      query={queries.getClass}
      queryOptions={props => {
        return {
          id: props.classId
        }
      }}
    />
    <Route
      path="/classes/:classId/quizzes"
      query={queries.getClass}
      queryOptions={props => {
        return {
          id: props.classId
        }
      }}
    />
    <Route
      path="/classes/:classId/quizzes/new"
      mutation={mutations.createQuiz}
      query={queries.getClass}
      queryOptions={props => {
        return {
          id: props.classId
        }
      }}
    />
    <Route
      path="/classes/:classId/quizzes/:quizId"
      mutation={mutations.updateQuiz}
      query={queries.getQuiz}
      queryOptions={props => {
        return {
          id: props.quizId
        }
      }}
    />
  </Router>
)
