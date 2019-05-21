import React from 'react'
import { Redirect, Router } from '@reach/router'
import Home from 'pages/home'
import {
  QuestionCreate,
  QuestionList,
  QuestionUpdate
} from 'containers/Questions'
import { CourseCreate, CourseList, CourseUpdate } from 'containers/Courses'

export default () => (
  <Router>
    <Home path="/" />
    <Redirect from="/home" to="/" />
    <CourseList path="/courses" />
    <CourseCreate path="/courses/create" />
    <CourseUpdate path="/courses/:courseId" />
    <QuestionList path="/questions" />
    <QuestionCreate path="/questions/create" />
    <QuestionUpdate path="/questions/:questionId" />
  </Router>
)
