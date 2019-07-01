import React, { useState } from 'react'
import { TopBar } from '@shopify/polaris'
import { LogoutIcon, SettingsIcon } from 'components/Icon'

export default ({
  logout,
  username,
  roles,
  email,
  firstName,
  lastName,
  avatar
}) => {
  const [hasToggledMenu, toggleMenu] = useState(false)
  if (!email) {
    return <TopBar />
  }

  const role = roles[0]
  const userMenu = (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: 'Settings',
              icon: SettingsIcon,
              onAction: () => {}
            },
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
      name={firstName}
      detail={role}
      avatar={avatar}
      open={hasToggledMenu}
      onToggle={() => toggleMenu(!hasToggledMenu)}
    />
  )

  const searchField = (
    <TopBar.SearchField onChange={() => {}} value={''} placeholder="Search" />
  )

  return <TopBar userMenu={userMenu} searchField={searchField} />
}
