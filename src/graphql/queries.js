// eslint-disable
// this is an auto generated file. This will be overwritten

export const listStudents = `query ListStudents {
  listStudents {
    id
    profile {
      id
      firstName
      middleName
      lastName
      username
      email
    }
  }
}
`;
export const listInstructors = `query ListInstructors {
  listInstructors {
    id
    profile {
      id
      firstName
      middleName
      lastName
      username
      email
    }
  }
}
`;
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
      id
      profile {
        id
        firstName
        middleName
        lastName
        username
        email
      }
    }
    instructor {
      id
      profile {
        id
        firstName
        middleName
        lastName
        username
        email
      }
    }
    quizAttempts {
      items {
        id
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
        id
      }
      instructor {
        id
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
        id
      }
      instructor {
        id
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
export const getQuizAttempt = `query GetQuizAttempt($id: ID!) {
  getQuizAttempt(id: $id) {
    id
    student {
      id
      profile {
        id
        firstName
        middleName
        lastName
        username
        email
      }
    }
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
        id
      }
      instructor {
        id
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
      student {
        id
      }
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
