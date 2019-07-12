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
    enrollments
    instructor {
      id
      family_name
      middle_name
      given_name
      username
      email
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
    enrollments
    instructor {
      id
      family_name
      middle_name
      given_name
      username
      email
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
    enrollments
    instructor {
      id
      family_name
      middle_name
      given_name
      username
      email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
export const onCreateQuizAttempt = `subscription OnCreateQuizAttempt {
  onCreateQuizAttempt {
    id
    student {
      id
      family_name
      middle_name
      given_name
      username
      email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
    student {
      id
      family_name
      middle_name
      given_name
      username
      email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
    student {
      id
      family_name
      middle_name
      given_name
      username
      email
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
      enrollments
      instructor {
        id
        family_name
        middle_name
        given_name
        username
        email
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
