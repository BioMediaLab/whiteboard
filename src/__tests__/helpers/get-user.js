import Amplify, { Auth } from 'aws-amplify'
import aws_config from 'aws-exports'

global.fetch = fetch

function getUser({ username, password }) {
  Amplify.configure(aws_config)

  return Auth.signIn({ username, password }).then((data) => {
    const accessToken = data.getSignInUserSession().getAccessToken()

    return {
      ...data,
      jwtToken: accessToken.jwtToken,
      role: accessToken.payload['cognito:groups'][0]
    }
  }).catch((err) => {
    return err
  })
}

export default getUser