import { useEffect, useReducer } from 'react'
import { Auth } from 'aws-amplify'
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync'
import gql from 'graphql-tag'
import dotProp from 'dot-prop'
import awsConfig from 'aws-exports'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  },
  disableOffline: true
})

const initialState = {
  pending: false,
  succeeded: false,
  errored: false,
  data: null,
  errors: []
}

const reducer = (state, payload) => {
  return {
    ...state,
    ...payload
  }
}

export function useApi(operationName, props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function execute(props) {
    return executeOperation(operationName, props)
  }

  function executeOperation(operationName, props) {
    if (operationName.startsWith('list')) {
      return executeList(operationName, props)
    } else if (operationName.startsWith('get')) {
      return executeGet(operationName, props)
    } else if (operationName.startsWith('update')) {
      return executeUpdate(operationName, props)
    } else if (operationName.startsWith('create')) {
      return executeCreate(operationName, props)
    } else if (operationName.startsWith('delete')) {
      return executeDelete(operationName, props)
    } else if (operationName.startsWith('on')) {
      //subscriptions not implemented yet
    }
  }

  function executeList(operationName, props) {
    dispatchRequestStart()
    return client
      .query({
        query: gql(queries[operationName])
      })
      .then(res => {
        if (res.errors) {
          dispatchRequestError(res.errors)
          return
        }
        const data = dotProp.get(res, `data.${operationName}.items`)
        dispatchRequestSuccess(data)
      })
      .catch(err => {
        dispatchRequestError(err)
      })
  }

  function executeGet(operationName, props) {
    dispatchRequestStart()

    return client
      .query({
        query: gql(queries[operationName]),
        variables: props
      })
      .then(res => {
        if (res.errors) {
          dispatchRequestError(res.errors)
          return
        }

        const data = dotProp.get(res, `data.${operationName}`)
        dispatchRequestSuccess(data)
      })
      .catch(err => {
        dispatchRequestError(err)
      })
  }

  function executeUpdate(operationName, props) {
    dispatchRequestStart()

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        if (res.errors) {
          dispatchRequestError(res.errors)
          return
        }

        const data = dotProp.get(res, `data.${operationName}`)
        dispatchRequestSuccess(data)
      })
      .catch(err => {
        dispatchRequestError(operationName)
      })
  }

  function executeCreate(operationName, props) {
    dispatchRequestStart()

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        if (res.errors) {
          dispatchRequestError(res.errors)
          return
        }

        const data = dotProp.get(res, `data.${operationName}`)
        dispatchRequestSuccess(data)
      })
      .catch(err => {
        dispatchRequestError(operationName)
      })
  }

  function executeDelete(operationName, props) {
    dispatchRequestStart()

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        if (res.errors) {
          dispatchRequestError(res.errors)
          return
        }

        const data = dotProp.get(res, `data.${operationName}`)
        dispatchRequestSuccess(data)
      })
      .catch(err => {
        dispatchRequestError(operationName)
      })
  }

  function dispatchRequestStart() {
    dispatch({
      pending: true,
      succeeded: false,
      errored: false
    })
  }

  function dispatchRequestSuccess(data) {
    dispatch({
      pending: false,
      succeeded: true,
      errored: false,
      data
    })
  }

  function dispatchRequestError(errors) {
    dispatch({
      pending: false,
      succeeded: false,
      errored: true,
      errors
    })
  }

  useEffect(() => {
    if (!state.pending && !state.succeeded && !state.errored) {
      execute(operationName, props)
    }
  })

  return [state, execute]
}
