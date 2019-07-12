import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import gravatarUrl from 'gravatar-url'

function getUserData() {
  return Promise.all([
    Auth.currentUserInfo({ bypassCache: false }),
    Auth.currentSession({ bypassCache: false })
  ]).then(data => {
    const { sub, username, attributes, accessToken } = {
      ...data[0],
      ...data[1]
    }
    const avatar = gravatarUrl(attributes.email, {
      default: 'identicon'
    })
    const roles = accessToken.payload['cognito:groups']
    const isProfessor = roles.includes('professor')
    const isStudent = roles.includes('student')

    attributes.firstName = attributes.firstName || 'Jane'
    attributes.lastName = attributes.lastName || 'Doe'
    attributes.middleInitial = attributes.middleInitial || ''

    return {
      id: sub,
      username,
      avatar,
      ...attributes,
      roles,
      isProfessor,
      isStudent
    }
  })
}

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    if (!Object.keys(currentUser).length) {
      getUserData()
        .then(data => {
          setCurrentUser(data)
        })
        .catch(err => console.log(err))
    }
  })

  return currentUser
}
