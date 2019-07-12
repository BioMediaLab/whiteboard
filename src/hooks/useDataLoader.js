import { useEffect, useReducer } from 'react'
import { Auth } from 'aws-amplify'
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync'
import gql from 'graphql-tag'
import dotProp from 'dot-prop'
import awsConfig from 'aws-exports'
import * as queries from 'graphql/queries'

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

export function useDataLoader(operationName, props) {
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
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let didCancel = false

    function execute(operationName, props) {
      if (operationName.startsWith('list')) {
        executeList(operationName, props)
      } else if (operationName.startsWith('get')) {
        executeGet(operationName, props)
      }
    }

    async function executeList(operationName, props) {
      try {
        dispatchRequestStart()
        const result = await client.query({
          query: gql(queries[operationName])
        })

        if (result.errors) {
          dispatchRequestError(result.errors)
        }

        const deserializedData = deserialize(result)
        const data = dotProp.get(deserializedData, `data.${operationName}`)

        dispatchRequestSuccess(data)
      } catch (err) {
        throw new Error(err)
      }
    }

    async function executeGet(operationName, props) {
      try {
        dispatchRequestStart()
        const result = await client.query({
          query: gql(queries[operationName]),
          variables: props
        })

        if (result.errors) {
          dispatchRequestError(result.errors)
        }

        const deserializedData = deserialize(result)
        const data = dotProp.get(deserializedData, `data.${operationName}`)

        dispatchRequestSuccess(data)
      } catch (err) {
        dispatchRequestError(err)
      }
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

    function deserialize(response, context) {
      if (Array.isArray(response)) {
        return deserializeArray(response, context)
      } else if (typeof response === 'object') {
        return deserializeObject(response, context)
      }

      return response
    }

    function deserializeArray(arr, context) {
      return arr.map(item => {
        return deserialize(item, context)
      })
    }

    function deserializeObject(obj, context) {
      if (obj === null) {
        return obj
      }
      let { __typename, ...data } = obj

      if (__typename && data.items) {
        return deserialize(data.items, context)
      } else if (__typename && __typename.endsWith('Connection')) {
        return deserialize([], context)
      }

      return Object.entries(data).reduce((accum, [_key, _value]) => {
        return {
          ...accum,
          [_key]: deserialize(_value, _key)
        }
      }, {})
    }

    if (!state.pending && !state.succeeded && !state.errored && !didCancel) {
      execute(operationName, props)
    }

    return () => {
      didCancel = true
    }
  }, [
    operationName,
    props,
    dispatch,
    state.pending,
    state.succeeded,
    state.errored,
    state.data,
    state.errors
  ])

  return state
}
