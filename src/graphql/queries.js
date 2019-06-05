// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
export const listCourses = `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      quizzes {
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
export const listQuizzes = `query ListQuizzes(
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getQuizAttempt = `query GetQuizAttempt($id: ID!) {
  getQuizAttempt(id: $id) {
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
export const listQuizAttempts = `query ListQuizAttempts(
  $filter: ModelQuizAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quiz {
        id
        title
        description
        questions
      }
      responses
      questions
    }
    nextToken
  }
}
`;
export const getQuizTemplate = `query GetQuizTemplate($id: ID!) {
  getQuizTemplate(id: $id) {
    id
    title
    description
    questions
  }
}
`;
export const listQuizTemplates = `query ListQuizTemplates(
  $filter: ModelQuizTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      questions
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
