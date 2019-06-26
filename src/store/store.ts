import { createContext } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Api from './api'
import { rootReducer } from './reducers'
import initialState from './initialState'

export function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    {
      ...initialState,
      ...preloadedState
    },
    applyMiddleware(thunkMiddleware)
  )
}

export function configureApi(store) {
  return new Api(store)
}

export const ApiContext = createContext(false)
export const ApiProvider = ApiContext.Provider
