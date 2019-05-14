// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateClass = `subscription OnCreateClass {
  onCreateClass {
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
export const onUpdateClass = `subscription OnUpdateClass {
  onUpdateClass {
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
export const onDeleteClass = `subscription OnDeleteClass {
  onDeleteClass {
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
export const onCreateQuiz = `subscription OnCreateQuiz {
  onCreateQuiz {
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
export const onUpdateQuiz = `subscription OnUpdateQuiz {
  onUpdateQuiz {
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
export const onDeleteQuiz = `subscription OnDeleteQuiz {
  onDeleteQuiz {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
