import React from 'react'
import { Icon as PolarisIcon } from '@shopify/polaris'
import { IconContext } from 'react-icons'
import { IoIosLogOut } from 'react-icons/io'

export const LogoutIcon = props => <Icon {...props} source={IoIosLogOut} />

export const Icon = ({ source, ...props }) => {
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <PolarisIcon {...props} source={source()} />
    </IconContext.Provider>
  )
}
