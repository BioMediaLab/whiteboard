// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
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
    enrollments
    instructor
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
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
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
    enrollments
    instructor
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
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
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
    enrollments
    instructor
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
export const createQuiz = `mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
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
      enrollments
      instructor
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
export const updateQuiz = `mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
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
      enrollments
      instructor
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
export const deleteQuiz = `mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
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
      enrollments
      instructor
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
export const createQuizAttempt = `mutation CreateQuizAttempt($input: CreateQuizAttemptInput!) {
  createQuizAttempt(input: $input) {
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
      enrollments
      instructor
      quizAttempts {
        nextToken
      }
    }
  }
}
`;
export const updateQuizAttempt = `mutation UpdateQuizAttempt($input: UpdateQuizAttemptInput!) {
  updateQuizAttempt(input: $input) {
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
      enrollments
      instructor
      quizAttempts {
        nextToken
      }
    }
  }
}
`;
export const deleteQuizAttempt = `mutation DeleteQuizAttempt($input: DeleteQuizAttemptInput!) {
  deleteQuizAttempt(input: $input) {
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
      enrollments
      instructor
      quizAttempts {
        nextToken
      }
    }
  }
}
`;
export const createQuestionBank = `mutation CreateQuestionBank($input: CreateQuestionBankInput!) {
  createQuestionBank(input: $input) {
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
export const updateQuestionBank = `mutation UpdateQuestionBank($input: UpdateQuestionBankInput!) {
  updateQuestionBank(input: $input) {
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
export const deleteQuestionBank = `mutation DeleteQuestionBank($input: DeleteQuestionBankInput!) {
  deleteQuestionBank(input: $input) {
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
