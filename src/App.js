import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Router from 'Router'
import { configureStore, configureApi, ApiProvider } from 'store'
import { Provider } from 'react-redux'
import AppShell from 'AppShell'
import ErrorBoundary from 'components/ErrorBoundary'
import { useCurrentUser } from 'hooks'

const store = configureStore()
const api = configureApi(store)

const App = () => {
  const currentUser = useCurrentUser()

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ApiProvider value={api}>
          <AppShell currentUser={currentUser}>
            <Router currentUser={currentUser} />
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
