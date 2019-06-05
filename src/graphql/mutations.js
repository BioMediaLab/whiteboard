// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
        questions
      }
      nextToken
    }
  }
}
`;
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
        questions
      }
      nextToken
    }
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
        questions
      }
      nextToken
    }
  }
}
`;
export const createQuiz = `mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
    id
    title
    description
    course {
      id
      title
      description
      quizzes {
        nextToken
      }
    }
    questions
    attempts {
      items {
        id
        responses
        questions
      }
      nextToken
    }
  }
}
`;
export const updateQuiz = `mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
    id
    title
    description
    course {
      id
      title
      description
      quizzes {
        nextToken
      }
    }
    questions
    attempts {
      items {
        id
        responses
        questions
      }
      nextToken
    }
  }
}
`;
export const deleteQuiz = `mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
    id
    title
    description
    course {
      id
      title
      description
      quizzes {
        nextToken
      }
    }
    questions
    attempts {
      items {
        id
        responses
        questions
      }
      nextToken
    }
  }
}
`;
export const createQuizAttempt = `mutation CreateQuizAttempt($input: CreateQuizAttemptInput!) {
  createQuizAttempt(input: $input) {
    id
    quiz {
      id
      title
      description
      course {
        id
        title
        description
      }
      questions
      attempts {
        nextToken
      }
    }
    responses
    questions
  }
}
`;
export const updateQuizAttempt = `mutation UpdateQuizAttempt($input: UpdateQuizAttemptInput!) {
  updateQuizAttempt(input: $input) {
    id
    quiz {
      id
      title
      description
      course {
        id
        title
        description
      }
      questions
      attempts {
        nextToken
      }
    }
    responses
    questions
  }
}
`;
export const deleteQuizAttempt = `mutation DeleteQuizAttempt($input: DeleteQuizAttemptInput!) {
  deleteQuizAttempt(input: $input) {
    id
    quiz {
      id
      title
      description
      course {
        id
        title
        description
      }
      questions
      attempts {
        nextToken
      }
    }
    responses
    questions
  }
}
`;
export const createQuizTemplate = `mutation CreateQuizTemplate($input: CreateQuizTemplateInput!) {
  createQuizTemplate(input: $input) {
    id
    title
    description
    questions
  }
}
`;
export const updateQuizTemplate = `mutation UpdateQuizTemplate($input: UpdateQuizTemplateInput!) {
  updateQuizTemplate(input: $input) {
    id
    title
    description
    questions
  }
}
`;
export const deleteQuizTemplate = `mutation DeleteQuizTemplate($input: DeleteQuizTemplateInput!) {
  deleteQuizTemplate(input: $input) {
    id
    title
    description
    questions
  }
}
`;
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    question
    choices {
      key
      value
    }
    answer {
      key
      value
    }
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    question
    choices {
      key
      value
    }
    answer {
      key
      value
    }
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    question
    choices {
      key
      value
    }
    answer {
      key
      value
    }
  }
}
`;
