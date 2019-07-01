import Amplify, { Auth } from 'aws-amplify'
import { AWSAppSyncClient, AUTH_TYPE, buildMutation } from 'aws-appsync'
import gql from 'graphql-tag'
import dotProp from 'dot-prop'
import awsConfig from '../../aws-exports'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'

const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  },
  disableOffline: true
})

const entities = {
  courses: {
    course1: {
      id: 'course1',
      createdAt: '2019-01-01T10:30:00.001Z',
      updatedAt: '2019-01-01T10:30:00.001Z',
      courseId: 'BIO-101',
      title: 'Introduction to Biology',
      description: 'A introductory course to Biology',
      semester: {
        season: 'spring',
        year: 2019
      },
      quizzes: ['course1quiz1', 'course1quiz2'],
      enrollments: ['course1enrollment1', 'course1enrollment2']
    }
  },
  quizzes: {
    course1quiz1: {
      id: 'course1quiz1',
      createdAt: '2019-01-02T10:30:00.001Z',
      updatedAt: '2019-01-02T10:30:00.001Z',
      title: 'Example quiz for Bio',
      description: 'The first quiz for the class',
      course: 'course1',
      questions: [],
      attempts: []
    },
    course1quiz2: {
      id: 'course1quiz1',
      createdAt: '2019-01-02T10:30:00.001Z',
      updatedAt: '2019-01-02T10:30:00.001Z',
      title: 'Example quiz for Bio',
      description: 'The first quiz for the class',
      course: 'course1',
      questions: [],
      attempts: []
    }
  },
  students: {
    student1: {
      id: 'student1',
      firstName: 'Jane',
      lastName: 'Doe',
      middleInitial: 'S',
      email: 'jane.doe@umaine.edu',
      enrollments: ['course1enrollment1']
    },
    student2: {
      id: 'student2',
      firstName: 'John',
      lastName: 'Doe',
      middleInitial: 'S',
      email: 'john.doe@umaine.edu',
      enrollments: ['course1enrollment2']
    },
    student3: {
      id: 'student3',
      firstName: 'Jill',
      lastName: 'Smith',
      middleInitial: 'S',
      email: 'jill.smith@umaine.edu',
      enrollments: []
    },
    student4: {
      id: 'student4',
      firstName: 'Jim',
      lastName: 'Smith',
      middleInitial: 'S',
      email: 'jim.smith@umaine.edu',
      enrollments: []
    }
  },
  enrollments: {
    course1enrollment1: {
      id: 'course1enrollment1',
      student: 'course1student1',
      course: 'course1'
    },
    course1enrollment2: {
      id: 'course1enrollment2',
      student: 'course1student2',
      course: 'course1'
    }
  },
  questionBanks: {
    questionBank1: {
      id: 'questionBank1',
      createdAt: '2019-01-3T10:30:00.001Z',
      updatedAt: '2019-01-31T10:30:00.001Z',
      title: 'Example question bank #1',
      description: 'The first example question bank',
      questions: [
        {
          id: 'questionBank1question1',
          question: 'What is ... for question 1?',
          choices: [
            { key: 'a', value: 'choice that is not correct' },
            { key: 'b', value: 'choice that is not correct' },
            { key: 'c', value: 'choice that is correct' },
            { key: 'd', value: 'choice that is not correct' }
          ]
        },
        {
          id: 'questionBank1question2',
          question: 'What is ... for question 2?',
          choices: [
            { key: 'a', value: 'choice that is not correct' },
            { key: 'b', value: 'choice that is not correct' },
            { key: 'c', value: 'choice that is correct' },
            { key: 'd', value: 'choice that is not correct' }
          ]
        }
      ],
      answers: ['choice that is correct']
    },
    questionBank2: {
      id: 'questionBank2',
      createdAt: '2019-01-3T10:30:00.001Z',
      updatedAt: '2019-01-31T10:30:00.001Z',
      title: 'Example question bank #2',
      description: 'The first example question bank',
      questions: [
        {
          id: 'questionBank2question1',
          question: 'What is ... for question 1?',
          choices: [
            { key: 'a', value: 'choice that is not correct' },
            { key: 'b', value: 'choice that is not correct' },
            { key: 'c', value: 'choice that is correct' },
            { key: 'd', value: 'choice that is not correct' }
          ]
        },
        {
          id: 'questionBank2question2',
          question: 'What is ... for question 2?',
          choices: [
            { key: 'a', value: 'choice that is not correct' },
            { key: 'b', value: 'choice that is not correct' },
            { key: 'c', value: 'choice that is correct' },
            { key: 'd', value: 'choice that is not correct' }
          ]
        }
      ],
      answers: ['choice that is correct']
    }
  }
}

/**
 * API Operations
 */
export default class Api {
  private store

  constructor(store) {
    this.store = store
  }

  execute(operationName, props) {
    if (operationName.startsWith('list')) {
      return this.executeList(operationName, props)
    } else if (operationName.startsWith('get')) {
      return this.executeGet(operationName, props)
    } else if (operationName.startsWith('update')) {
      return this.executeUpdate(operationName, props)
    } else if (operationName.startsWith('create')) {
      return this.executeCreate(operationName, props)
    } else if (operationName.startsWith('delete')) {
      return this.executeDelete(operationName, props)
    } else if (operationName.startsWith('on')) {
      //subscriptions not implemented yet
    }
  }

  executeList(operationName, props) {
    this._dispatchRequestStart(operationName)

    return client
      .query({
        query: gql(queries[operationName])
      })
      .then(res => {
        this._dispatchRequestSuccess(operationName)
        return dotProp.get<any>(res, `data.${operationName}.items`)
      })
      .catch(err => {
        this._dispatchRequestError(operationName)
      })
  }
  executeGet(operationName, props) {
    this._dispatchRequestStart(operationName)

    return client
      .query({
        query: gql(queries[operationName]),
        variables: props
      })
      .then(res => {
        this._dispatchRequestSuccess(operationName)

        return dotProp.get<any>(res, `data.${operationName}`)
      })
      .catch(err => {
        this._dispatchRequestError(operationName)
      })
  }
  executeUpdate(operationName, props) {
    this._dispatchRequestStart(operationName)

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        this._dispatchRequestSuccess(operationName)
        console.log(res)
        return dotProp.get<any>(res, `data.${operationName}`)
      })
      .catch(err => {
        this._dispatchRequestError(operationName)
      })
  }
  executeCreate(operationName, props) {
    this._dispatchRequestStart(operationName)

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        this._dispatchRequestSuccess(operationName)

        return dotProp.get<any>(res, `data.${operationName}`)
      })
      .catch(err => {
        this._dispatchRequestError(operationName)
      })
  }
  executeDelete(operationName, props) {
    this._dispatchRequestStart(operationName)

    return client
      .mutate({
        mutation: gql(mutations[operationName]),
        variables: {
          input: props
        }
      })
      .then(res => {
        this._dispatchRequestSuccess(operationName)

        return dotProp.get<any>(res, `data.${operationName}`)
      })
      .catch(err => {
        this._dispatchRequestError(operationName)
      })
  }
  // course APIs
  getAllCourses() {
    // const items = Object.entries(entities.courses).map(item => item[1])
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        getAllCourses: {
          pending: true,
          succeeded: false,
          errored: false
        }
      }
    })
    return client
      .query({
        query: gql(queries.listCourses)
      })
      .then(res => {
        const items = dotProp.get<any>(res, 'data.listCourses.items')

        this.store.dispatch({
          type: 'HANDLE_REQUEST',
          payload: {
            getAllCourses: {
              pending: false,
              succeeded: true,
              errored: false
            }
          }
        })
        return items
      })
      .catch(err => console.log(err))
  }

  getCourse(id) {
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        getCourse: {
          pending: true,
          succeeded: false,
          errored: false
        }
      }
    })
    return client
      .query({
        query: gql(queries.getCourse),
        variables: {
          id
        }
      })
      .then(res => {
        const item = dotProp.get<any>(res, 'data.getCourse')

        this.store.dispatch({
          type: 'HANDLE_REQUEST',
          payload: {
            getCourse: {
              pending: false,
              succeeded: true,
              errored: false
            }
          }
        })

        return item
      })
      .catch(err => console.log(err))
  }

  createCourse({ id, ...props }) {
    entities.courses[id] = { id, ...props }

    return Promise.resolve({
      item: entities.courses[id],
      errors: [],
      createCoursePending: false,
      createCourseSucceeded: true,
      createCourseErrored: false
    })
  }

  updateCourse({ id, ...props }) {
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        getCourse: {
          pending: true,
          succeeded: false,
          errored: false
        }
      }
    })
    return client
      .query({
        query: gql(queries.getCourse),
        variables: {
          id
        }
      })
      .then(res => {
        const item = dotProp.get<any>(res, 'data.getCourse')

        this.store.dispatch({
          type: 'HANDLE_REQUEST',
          payload: {
            getCourse: {
              pending: false,
              succeeded: true,
              errored: false
            }
          }
        })

        return item
      })
      .catch(err => console.log(err))
  }

  deleteCourse(id) {
    const deletedCourse = { ...entities.courses[id] }
    entities.courses = Object.assign(
      {},
      { ...entities.courses },
      { [id]: undefined }
    )

    return Promise.resolve({
      item: deletedCourse,
      errors: [],
      deleteCoursePending: false,
      deleteCourseSucceeded: true,
      deleteCourseErrored: false
    })
  }

  // quiz APIs
  getAllQuizzes() {
    const items = Object.entries(entities.quizzes).map(item => item[1])

    return Promise.resolve({
      items,
      errors: [],
      getAllQuizzesPending: false,
      getAllQuizzesSucceeded: true,
      getAllQuizzesErrored: false
    })
  }

  getQuiz(id) {
    const item = entities.quizzes[id]

    return Promise.resolve({
      item,
      errors: [],
      getQuizPending: false,
      getQuizSucceeded: true,
      getQuizErrored: false
    })
  }

  updateQuiz({ id, ...props }) {
    entities.quizzes[id] = { id, ...props }

    return Promise.resolve({
      item: entities.quizzes[id],
      errors: [],
      updateQuizPending: false,
      updateQuizSucceeded: true,
      updateQuizErrored: false
    })
  }

  deleteQuiz(id) {
    const deletedQuiz = { ...entities.quizzes[id] }
    entities.quizzes = Object.assign(
      {},
      { ...entities.quizzes },
      { [id]: undefined }
    )

    return Promise.resolve({
      item: deletedQuiz,
      errors: [],
      deleteQuizPending: false,
      deleteQuizSucceeded: true,
      deleteQuizErrored: false
    })
  }

  // student APIs
  getAllStudents() {
    const items = Object.entries(entities.students).map(item => item[1])

    return Promise.resolve({
      items,
      errors: [],
      getAllStudentsPending: false,
      getAllStudentsSucceeded: true,
      getAllStudentsErrored: false
    })
  }

  getStudent(id) {
    const item = entities.students[id]

    return Promise.resolve({
      item,
      errors: [],
      getStudentPending: false,
      getStudentSucceeded: true,
      getStudentErrored: false
    })
  }

  createStudent({ id, ...props }) {
    entities.students[id] = { id, ...props }

    return Promise.resolve({
      item: entities.students[id],
      errors: [],
      createStudentPending: false,
      createStudentSucceeded: true,
      createStudentErrored: false
    })
  }
  updateStudent({ id, ...props }) {
    entities.students[id] = { id, ...props }

    return Promise.resolve({
      item: entities.students[id],
      errors: [],
      updateStudentPending: false,
      updateStudentSucceeded: true,
      updateStudentErrored: false
    })
  }
  deleteStudent(id) {
    const deletedStudent = { ...entities.students[id] }
    entities.students = Object.assign(
      {},
      { ...entities.students },
      { [id]: undefined }
    )

    return Promise.resolve({
      item: deletedStudent,
      errors: [],
      deleteStudentPending: false,
      deleteStudentSucceeded: true,
      deleteStudentErrored: false
    })
  }

  // enrollment APIs
  getAllEnrollments() {
    const items = Object.entries(entities.enrollments).map(item => item[1])

    return Promise.resolve({
      items,
      errors: [],
      getAllEnrollmentsPending: false,
      getAllEnrollmentsSucceeded: true,
      getAllEnrollmentsErrored: false
    })
  }

  getEnrollment(id) {
    const item = entities.enrollments[id]

    return Promise.resolve({
      item,
      errors: [],
      getEnrollmentPending: false,
      getEnrollmentSucceeded: true,
      getEnrollmentErrored: false
    })
  }

  createEnrollment({ id, ...props }) {
    entities.enrollments[id] = { id, ...props }

    return Promise.resolve({
      item: entities.enrollments[id],
      errors: [],
      createEnrollmentPending: false,
      createEnrollmentSucceeded: true,
      createEnrollmentErrored: false
    })
  }

  updateEnrollment({ id, ...props }) {
    entities.enrollments[id] = { id, ...props }

    return Promise.resolve({
      item: entities.enrollments[id],
      errors: [],
      updateEnrollmentPending: false,
      updateEnrollmentSucceeded: true,
      updateEnrollmentErrored: false
    })
  }

  deleteEnrollment(id) {
    const deletedEnrollment = { ...entities.enrollments[id] }
    entities.enrollments = Object.assign(
      {},
      { ...entities.enrollments },
      { [id]: undefined }
    )

    return Promise.resolve({
      item: deletedEnrollment,
      errors: [],
      deleteEnrollmentPending: false,
      deleteEnrollmentSucceeded: true,
      deleteEnrollmentErrored: false
    })
  }

  // question bank APIs
  getAllQuestionBanks() {
    const items = Object.entries(entities.questionBanks).map(item => item[1])

    return Promise.resolve({
      items,
      errors: [],
      getAllQuestionBanksPending: false,
      getAllQuestionBanksSucceeded: true,
      getAllQuestionBanksErrored: false
    })
  }

  getQuestionBank(id) {
    const item = entities.questionBanks[id]

    return Promise.resolve({
      item,
      errors: [],
      getQuestionBankPending: false,
      getQuestionBankSucceeded: true,
      getQuestionBankErrored: false
    })
  }

  createQuestionBank({ id, ...props }) {
    entities.questionBanks[id] = { id, ...props }

    return Promise.resolve({
      item: entities.questionBanks[id],
      errors: [],
      createQuestionBankPending: false,
      createQuestionBankSucceeded: true,
      createQuestionBankErrored: false
    })
  }

  updateQuestionBank({ id, ...props }) {
    entities.questionBanks[id] = { id, ...props }

    return Promise.resolve({
      item: entities.questionBanks[id],
      errors: [],
      updateQuestionBankPending: false,
      updateQuestionBankSucceeded: true,
      updateQuestionBankErrored: false
    })
  }

  deleteQuestionBank(id) {
    const deletedQuestionBank = { ...entities.questionBanks[id] }
    entities.questionBanks = Object.assign(
      {},
      { ...entities.questionBanks },
      { [id]: undefined }
    )

    return Promise.resolve({
      item: deletedQuestionBank,
      errors: [],
      deleteQuestionBankPending: false,
      deleteQuestionBankSucceeded: true,
      deleteQuestionBankErrored: false
    })
  }

  _dispatchRequestStart(operationName) {
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        [operationName]: {
          pending: true,
          succeeded: false,
          errored: false
        }
      }
    })
  }

  _dispatchRequestSuccess(operationName) {
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        [operationName]: {
          pending: false,
          succeeded: true,
          errored: false
        }
      }
    })
  }

  _dispatchRequestError(operationName) {
    this.store.dispatch({
      type: 'HANDLE_REQUEST',
      payload: {
        [operationName]: {
          pending: false,
          succeeded: false,
          errored: true
        }
      }
    })
  }

  /**
   * API selectors
   */
}
