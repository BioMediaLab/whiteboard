import React from 'react'
import { Icon as PolarisIcon } from '@shopify/polaris'
import { IconContext } from 'react-icons'
import { MdExitToApp } from 'react-icons/md'
import { MdHome } from 'react-icons/md'
import { MdSchool } from 'react-icons/md'
import { MdQuestionAnswer } from 'react-icons/md'

export const LogoutIcon = props => <Icon {...props} source={MdExitToApp} />
export const HomeIcon = props => <Icon {...props} source={MdHome} />
export const CoursesIcon = props => <Icon {...props} source={MdSchool} />
export const QuestionsIcon = props => (
  <Icon {...props} source={MdQuestionAnswer} />
)

export const Icon = ({ source, ...props }) => {
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <PolarisIcon {...props} source={source()} />
    </IconContext.Provider>
  )
}
