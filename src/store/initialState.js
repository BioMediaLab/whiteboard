import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'

const defaultRequests = Object.keys({ ...queries, ...mutations }).reduce(
  (accum, operationName) => {
    return {
      ...accum,
      [operationName]: { pending: false, succeeded: false, errored: false }
    }
  },
  {}
)

export default {
  currentUser: {},
  currentEntity: {},
  entities: {
    courses: {},
    quizzes: {},
    students: {},
    enrollments: {},
    questionBanks: {}
  },
  requests: {
    ...defaultRequests
  }
}
