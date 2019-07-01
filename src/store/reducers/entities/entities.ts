import { combineReducers } from 'redux'
import { default as courses } from './courses'
import { default as enrollments } from './enrollments'
import { default as questionBanks } from './questionBanks'
import { default as quizzes } from './quizzes'
import { default as students } from './students'

export default combineReducers({
  courses,
  quizzes,
  students,
  enrollments,
  questionBanks
})
