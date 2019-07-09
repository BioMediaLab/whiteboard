import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import Router from 'Router'
import { configureStore, configureApi, ApiProvider } from 'store'
import { Provider } from 'react-redux'
import AppShell from 'AppShell'
import ErrorBoundary from 'components/ErrorBoundary'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

const store = configureStore()
const api = configureApi(store)

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ApiProvider value={api}>
          <AppShell>
            <Router />
          </AppShell>
        </ApiProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default withAuthenticator(App, {
  signUpConfig: {
    signUpFields: [
      {
        label: 'First Name',
        key: 'given_name',
        required: true,
        type: 'string'
      },
      {
        label: 'Middle Name',
        key: 'middle_name',
        required: false,
        type: 'string'
      },
      { label: 'Last Name', key: 'family_name', required: true, type: 'string' }
    ]
  }
})
