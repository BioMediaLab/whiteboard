/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authCognito5608a292UserPoolId = process.env.AUTH_COGNITO5608A292_USERPOOLID

Amplify Params - DO NOT EDIT */
const { CognitoIdentityServiceProvider } = require('aws-sdk')
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider()
const COGNITO_USERPOOL_ID = process.env.AUTH_COGNITO5608A292_USERPOOLID

if (!COGNITO_USERPOOL_ID) {
  throw new Error(
    `Function requires environment variable: 'COGNITO_USERPOOL_ID'`
  )
}

// const COGNITO_USERNAME_CLAIM_KEY = 'cognito:username'

function getProfile(attributes) {
  return attributes.reduce((accum, attribute) => {
    return {
      ...accum,
      [attribute.Name]: attribute.Value
    }
  }, {})
}

async function listStudents() {
  const params = {
    UserPoolId: COGNITO_USERPOOL_ID,
    GroupName: 'student'
  }
  try {
    const data = await cognitoIdentityServiceProvider
      .listUsersInGroup(params)
      .promise()

    return data.Users.reduce((userAccum, user) => {
      const username = user.Username
      const profile = getProfile(user.Attributes)

      return [
        ...userAccum,
        {
          id: profile.email,
          username,
          email: profile.email,
          given_name: profile.given_name || '',
          family_name: profile.family_name || '',
          middle_name: profile.middle_name || ''
        }
      ]
    }, [])
  } catch (err) {
    throw new Error(`Server error`)
  }
}

const resolvers = {
  Query: {
    listStudents
  }
}

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async event => {
  const typeHandler = resolvers[event.typeName]
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName]
    if (resolver) {
      return await resolver(event)
    }
  }
  throw new Error('Resolver not found.')
}
