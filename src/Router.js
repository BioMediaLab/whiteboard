import React from 'react'
import { Redirect, Router } from '@reach/router'
import {
  QuestionCreate,
  QuestionList,
  QuestionUpdate
} from 'containers/Questions'
import { QuizCreate, QuizList, QuizUpdate } from 'containers/Quizzes'
import { QuizTemplateList, QuizTemplateCreate } from 'containers/QuizTemplates'
import { CourseCreate, CourseList, CourseUpdate } from 'containers/Courses'

export default () => (
  <Router>
    <CourseList path="/" />
    <CourseCreate path="/courses/create" />
    <CourseUpdate path="/courses/:courseId" />
    <QuestionList path="/questions" />
    <QuestionCreate path="/questions/create" />
    <QuestionUpdate path="/questions/:questionId" />
    <QuizList path="/quizzes" />
    <QuizCreate path="/quizzes/create" />
    <QuizUpdate path="/quizzes/:quizId" />
    <QuizTemplateList path="/quiz-templates" />
    <QuizTemplateCreate path="/quiz-templates/create" />
  </Router>
)
