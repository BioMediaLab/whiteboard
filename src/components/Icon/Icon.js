import React from 'react'
import { Icon as PolarisIcon } from '@shopify/polaris'
import { ReactComponent as IconicHome } from './img/home.svg'
import { ReactComponent as IconicAccountLogout } from './img/account-logout.svg'
import { ReactComponent as IconicLightbulb } from './img/lightbulb.svg'
import { ReactComponent as IconicQuestionMark } from './img/question-mark.svg'
import { ReactComponent as IconicFile } from './img/file.svg'
import { ReactComponent as IconicDocument } from './img/document.svg'

import './Icon.css'

export const Icon = ({ source, ...props }) => {
  return <PolarisIcon source={source} {...props} />
}
export const LogoutIcon = props => (
  <Icon {...props} source={<IconicAccountLogout />} />
)
export const HomeIcon = props => <Icon {...props} source={<IconicHome />} />
export const CoursesIcon = props => (
  <Icon {...props} source={<IconicLightbulb />} />
)
export const QuestionsIcon = props => (
  <Icon {...props} source={<IconicQuestionMark />} />
)
export const QuizzesIcon = props => <Icon {...props} source={<IconicFile />} />
export const QuizTemplatesIcon = props => <Icon {...props} source={<IconicDocument />} />
