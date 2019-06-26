import React from 'react'
import { Router } from '@reach/router'
import { LoadingPage } from 'components'
import { useCurrentUser } from 'hooks'
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

      <QuizCreate path="/quizzes/create" />
      <Quiz path="/quizzes/:quizId" />

      <QuestionBankList path="/question-banks" />
      <QuestionBankCreate path="/question-banks/create" />
      <QuestionBank path="/question-banks/:questionBankId" />
    </Router>
  )
}

export default () => {
  const currentUser = useCurrentUser()

  if (currentUser.isProfessor) {
    return <ProfessorsRouter />
  } else {
    return <LoadingPage />
  }
}
