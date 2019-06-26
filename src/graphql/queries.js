// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    id
    createdAt
    updatedAt
    courseId
    title
    description
    semester {
      season
      year
    }
    settings {
      key
      value
    }
    quizzes {
      items {
        id
        createdAt
        updatedAt
        title
        description
      }
      nextToken
    }
    enrollments {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
    instructor {
      id
      createdAt
      updatedAt
      profile {
        id
        createdAt
        updatedAt
        firstName
        middleInitial
        lastName
        email
      }
      courses {
        nextToken
      }
      settings {
        key
        value
      }
    }
    quizAttempts {
      items {
        id
        student
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const listCourses = `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      courseId
      title
      description
      semester {
        season
        year
      }
      settings {
        key
        value
      }
      quizzes {
        nextToken
      }
      enrollments {
        nextToken
      }
      instructor {
        id
        createdAt
        updatedAt
      }
      quizAttempts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuiz = `query GetQuiz($id: ID!) {
  getQuiz(id: $id) {
    id
    createdAt
    updatedAt
    title
    description
    course {
      id
      createdAt
      updatedAt
      courseId
      title
      description
      semester {
        season
        year
      }
      settings {
        key
        value
      }
      quizzes {
        nextToken
      }
      enrollments {
        nextToken
      }
      instructor {
        id
        createdAt
        updatedAt
      }
      quizAttempts {
        nextToken
      }
    }
    questions {
      key
      question
      choices {
        key
        value
      }
      answers {
        key
        value
      }
    }
    settings {
      key
      value
    }
  }
}
`;
export const listQuizzes = `query ListQuizzes(
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      title
      description
      course {
        id
        createdAt
        updatedAt
        courseId
        title
        description
      }
      questions {
        key
        question
      }
      settings {
        key
        value
      }
    }
    nextToken
  }
}
`;
export const getStudent = `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    createdAt
    updatedAt
    profile {
      id
      createdAt
      updatedAt
      firstName
      middleInitial
      lastName
      email
    }
    enrollments {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
    settings {
      key
      value
    }
  }
}
`;
export const listStudents = `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      profile {
        id
        createdAt
        updatedAt
        firstName
        middleInitial
        lastName
        email
      }
      enrollments {
        nextToken
      }
      settings {
        key
        value
      }
    }
    nextToken
  }
}
`;
export const getInstructor = `query GetInstructor($id: ID!) {
  getInstructor(id: $id) {
    id
    createdAt
    updatedAt
    profile {
      id
      createdAt
      updatedAt
      firstName
      middleInitial
      lastName
      email
    }
    courses {
      items {
        id
        createdAt
        updatedAt
        courseId
        title
        description
      }
      nextToken
    }
    settings {
      key
      value
    }
  }
}
`;
export const listInstructors = `query ListInstructors(
  $filter: ModelInstructorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      profile {
        id
        createdAt
        updatedAt
        firstName
        middleInitial
        lastName
        email
      }
      courses {
        nextToken
      }
      settings {
        key
        value
      }
    }
    nextToken
  }
}
`;
export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    createdAt
    updatedAt
    firstName
    middleInitial
    lastName
    email
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      firstName
      middleInitial
      lastName
      email
    }
    nextToken
  }
}
`;
export const getQuizAttempt = `query GetQuizAttempt($id: ID!) {
  getQuizAttempt(id: $id) {
    id
    student
    createdAt
    updatedAt
    responses {
      id
      question
      choices {
        key
        value
      }
      answers {
        key
        value
      }
    }
    questions {
      key
      question
      choices {
        key
        value
      }
      answers {
        key
        value
      }
    }
    course {
      id
      createdAt
      updatedAt
      courseId
      title
      description
      semester {
        season
        year
      }
      settings {
        key
        value
      }
      quizzes {
        nextToken
      }
      enrollments {
        nextToken
      }
      instructor {
        id
        createdAt
        updatedAt
      }
      quizAttempts {
        nextToken
      }
    }
  }
}
`;
export const listQuizAttempts = `query ListQuizAttempts(
  $filter: ModelQuizAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      student
      createdAt
      updatedAt
      responses {
        id
        question
      }
      questions {
        key
        question
      }
      course {
        id
        createdAt
        updatedAt
        courseId
        title
        description
      }
    }
    nextToken
  }
}
`;
export const getQuestionBank = `query GetQuestionBank($id: ID!) {
  getQuestionBank(id: $id) {
    id
    createdAt
    updatedAt
    title
    courseId
    description
    questions {
      key
      question
      choices {
        key
        value
      }
      answers {
        key
        value
      }
    }
  }
}
`;
export const listQuestionBanks = `query ListQuestionBanks(
  $filter: ModelQuestionBankFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      title
      courseId
      description
      questions {
        key
        question
      }
    }
    nextToken
  }
}
`;
