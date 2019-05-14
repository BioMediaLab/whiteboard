import React, { useState } from 'react'
import { TopBar } from '@shopify/polaris'
import { AppUserConsumer } from 'components/AppUser'
import { LogoutIcon } from 'components/Icon'

export default props => {
  const [hasToggledMenu, toggleMenu] = useState(false)

  return (
    <AppUserConsumer>
      {props => {
        if (!props) return <TopBar />
        const {
          logout,
          profile: { username, email, avatar }
        } = props

        const userMenu = (
          <TopBar.UserMenu
            actions={[
              {
                items: [
                  {
                    content: 'Logout',
                    icon: LogoutIcon,
                    onAction: () => {
                      logout()
                    }
                  }
                ]
              }
            ]}
            name={username}
            detail={email}
            avatar={avatar}
            open={hasToggledMenu}
            onToggle={() => toggleMenu(!hasToggledMenu)}
          />
        )
        return <TopBar userMenu={userMenu} />
      }}
    </AppUserConsumer>
  )
}
