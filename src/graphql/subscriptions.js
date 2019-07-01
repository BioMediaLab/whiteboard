// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
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
export const onUpdateCourse = `subscription OnUpdateCourse {
  onUpdateCourse {
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
export const onDeleteCourse = `subscription OnDeleteCourse {
  onDeleteCourse {
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
export const onCreateQuiz = `subscription OnCreateQuiz {
  onCreateQuiz {
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
export const onUpdateQuiz = `subscription OnUpdateQuiz {
  onUpdateQuiz {
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
export const onDeleteQuiz = `subscription OnDeleteQuiz {
  onDeleteQuiz {
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
export const onCreateStudent = `subscription OnCreateStudent {
  onCreateStudent {
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
export const onUpdateStudent = `subscription OnUpdateStudent {
  onUpdateStudent {
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
export const onDeleteStudent = `subscription OnDeleteStudent {
  onDeleteStudent {
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
export const onCreateInstructor = `subscription OnCreateInstructor {
  onCreateInstructor {
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
export const onUpdateInstructor = `subscription OnUpdateInstructor {
  onUpdateInstructor {
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
export const onDeleteInstructor = `subscription OnDeleteInstructor {
  onDeleteInstructor {
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
export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile {
  onUpdateProfile {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
export const onCreateEnrollment = `subscription OnCreateEnrollment {
  onCreateEnrollment {
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
export const onUpdateEnrollment = `subscription OnUpdateEnrollment {
  onUpdateEnrollment {
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
export const onDeleteEnrollment = `subscription OnDeleteEnrollment {
  onDeleteEnrollment {
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
export const onCreateQuizAttempt = `subscription OnCreateQuizAttempt {
  onCreateQuizAttempt {
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
export const onUpdateQuizAttempt = `subscription OnUpdateQuizAttempt {
  onUpdateQuizAttempt {
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
export const onDeleteQuizAttempt = `subscription OnDeleteQuizAttempt {
  onDeleteQuizAttempt {
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
export const onCreateQuestionBank = `subscription OnCreateQuestionBank {
  onCreateQuestionBank {
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
export const onUpdateQuestionBank = `subscription OnUpdateQuestionBank {
  onUpdateQuestionBank {
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
export const onDeleteQuestionBank = `subscription OnDeleteQuestionBank {
  onDeleteQuestionBank {
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
