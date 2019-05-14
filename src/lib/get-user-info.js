import { Auth } from 'aws-amplify'
import gravatarUrl from 'gravatar-url'

export default () => {
  return Auth.currentUserInfo().then(data => {
    const { username, attributes } = data
    const avatar = gravatarUrl(attributes.email, {
      default: 'identicon'
    })

    return {
      profile: {
        username,
        avatar,
        ...attributes
      },
      logout() {
        Auth.signOut()
      }
    }
  })
}
