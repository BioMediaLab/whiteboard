// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
}
`;
export const onUpdateCourse = `subscription OnUpdateCourse {
  onUpdateCourse {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
}
`;
export const onDeleteCourse = `subscription OnDeleteCourse {
  onDeleteCourse {
    id
    title
    description
    quizzes {
      items {
        id
        title
        description
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
    description
    course {
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
    description
    course {
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
    description
    course {
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
export const onCreateQuizTemplate = `subscription OnCreateQuizTemplate {
  onCreateQuizTemplate {
    id
    title
    description
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
export const onUpdateQuizTemplate = `subscription OnUpdateQuizTemplate {
  onUpdateQuizTemplate {
    id
    title
    description
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
export const onDeleteQuizTemplate = `subscription OnDeleteQuizTemplate {
  onDeleteQuizTemplate {
    id
    title
    description
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
