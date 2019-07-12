import React from 'react'
import { Auth } from 'aws-amplify'
import { AppProvider, Frame } from '@shopify/polaris'
import AppHeader from 'components/AppHeader'
import AppNav from 'components/AppNav'
import Link from 'components/Link'

export const AppShellContext = React.createContext({
  sheetContent: null
})

const AppShell = ({ children, currentUser, logout }) => {
  const theme = {
    colors: {
      topBar: {
        background: '#3698d4'
      }
    },
    logo: {
      width: 124,
      topBarSource:
        'https://umaine.edu/wp-content/themes/umaine/assets/images/temp-umaine-logo@2x.png',
      url: 'https://umaine.edu',
      accessibilityLabel: 'BetterLMS'
    }
  }
  const navigation = <AppNav {...currentUser} />
  const topBar = <AppHeader {...currentUser} logout={logout} />

  return (
    <AppShellContext.Provider value={{}}>
      <AppProvider className="App" linkComponent={Link} theme={theme}>
        <Frame topBar={topBar} navigation={navigation}>
          {children}
        </Frame>
      </AppProvider>
    </AppShellContext.Provider>
  )
}

export default ({ children, currentUser }) => {
  return (
    <AppShell
      currentUser={currentUser}
      logout={() => {
        Auth.signOut()
      }}
    >
      {children}
    </AppShell>
  )
}
