import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { AppProvider, Frame } from '@shopify/polaris'
import Link from 'components/Link'
import AppHeader from 'components/AppHeader'
import AppNav from 'components/AppNav'
import { AppUserProvider } from 'components/AppUser'
import getUserInfo from 'lib/get-user-info'
import Router from 'Router'
import awsConfig from 'aws-exports'

Amplify.configure(awsConfig)

const App = ({ currentUser }) => {
  const navigation = <AppNav />
  const topBar = <AppHeader />

  return (
    <AppUserProvider value={currentUser}>
      <AppProvider className="App" linkComponent={Link}>
        <Frame navigation={navigation} topBar={topBar}>
          <Router />
        </Frame>
      </AppProvider>
    </AppUserProvider>
  )
}

const AppWithUser = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    if (!currentUser) {
      getUserInfo().then(data => setCurrentUser(data))
    }
  })

  return <App currentUser={currentUser} />
}

export default withAuthenticator(AppWithUser)
