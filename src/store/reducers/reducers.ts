import { combineReducers } from 'redux'
import { default as currentEntity } from './currentEntity'
import { default as currentUser } from './currentUser'
import { default as entities } from './entities'
import { default as requests } from './requests'

export const rootReducer = combineReducers({
  currentEntity,
  currentUser,
  entities,
  requests
})
