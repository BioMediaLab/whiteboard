import React from 'react'
import { Router } from '@reach/router'
import { LoadingPage } from 'components'
import Home from 'professor/Home'
import { Course, CourseList, CourseCreate } from 'professor/Course'
import {
  QuestionBank,
  QuestionBankList,
  QuestionBankCreate
} from 'professor/QuestionBank'
import { Quiz, QuizCreate } from 'professor/Quiz'

const ProfessorsRouter = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="/home" />

      <CourseList path="/courses" />
      <CourseCreate path="/courses/create" />
      <Course path="/courses/:courseId" />
      <Course path="/courses/:courseId/:tabName" />

      <QuizCreate path="/courses/:courseId/quizzes/create" />
      <Quiz path="/courses/:courseId/quizzes/:quizId" />

      <QuestionBankList path="/question-banks" />
      <QuestionBankCreate path="/question-banks/create" />
      <QuestionBank path="/question-banks/:questionBankId" />
    </Router>
  )
}

const StudentsRouter = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="/home" />

      <CourseList path="/courses" />
      <CourseCreate path="/courses/create" />
      <Course path="/courses/:courseId" />
      <Course path="/courses/:courseId/:tabName" />
    </Router>
  )
}

export default ({ currentUser }) => {
  if (currentUser.isProfessor) {
    return <ProfessorsRouter />
  } else if (currentUser.isStudent) {
    return <StudentsRouter />
  } else {
    return <LoadingPage />
  }
}
