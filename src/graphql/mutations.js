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
export const createStudent = `mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
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
export const updateStudent = `mutation UpdateStudent($input: UpdateStudentInput!) {
  updateStudent(input: $input) {
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
export const deleteStudent = `mutation DeleteStudent($input: DeleteStudentInput!) {
  deleteStudent(input: $input) {
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
export const createInstructor = `mutation CreateInstructor($input: CreateInstructorInput!) {
  createInstructor(input: $input) {
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
export const updateInstructor = `mutation UpdateInstructor($input: UpdateInstructorInput!) {
  updateInstructor(input: $input) {
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
export const deleteInstructor = `mutation DeleteInstructor($input: DeleteInstructorInput!) {
  deleteInstructor(input: $input) {
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
export const createProfile = `mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
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
export const updateProfile = `mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
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
export const deleteProfile = `mutation DeleteProfile($input: DeleteProfileInput!) {
  deleteProfile(input: $input) {
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
export const createEnrollment = `mutation CreateEnrollment($input: CreateEnrollmentInput!) {
  createEnrollment(input: $input) {
    id
    createdAt
    updatedAt
    student {
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
export const updateEnrollment = `mutation UpdateEnrollment($input: UpdateEnrollmentInput!) {
  updateEnrollment(input: $input) {
    id
    createdAt
    updatedAt
    student {
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
export const deleteEnrollment = `mutation DeleteEnrollment($input: DeleteEnrollmentInput!) {
  deleteEnrollment(input: $input) {
    id
    createdAt
    updatedAt
    student {
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
