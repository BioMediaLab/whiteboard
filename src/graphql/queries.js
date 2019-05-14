// eslint-disable
// this is an auto generated file. This will be overwritten

export const getClass = `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    title
    description
    quizzes {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listClasses = `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    class {
      id
      title
      description
      quizzes {
        nextToken
      }
    }
    questions {
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
      class {
        id
        title
        description
      }
      questions {
        id
        question
      }
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
