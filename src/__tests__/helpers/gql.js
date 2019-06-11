import supertest from 'supertest'
import Amplify, { graphqlOperation } from 'aws-amplify'
import aws_config from 'aws-exports'

const config = Amplify.configure(aws_config)

export default class GqlClient {
  constructor({ headers }) {
    this.request = supertest(config.aws_appsync_graphqlEndpoint)
    this.headers = headers

    return (query) => {
      const payload = graphqlOperation(query)

      return this.request
        .post('/')
        .send(payload)
        .set(this.headers)
    }
  }

}
