export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_QUIZ': {
      return {
        ...state,
        ...payload
      }
    }
    case 'ADD_QUIZ_QUESTION': {
      return {
        ...state,
        questions: [...state.questions, { ...payload }]
      }
    }
    case 'REMOVE_QUIZ_QUESTION': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.filter(
          question => question.id !== questionId
        )
      }
    }
    case 'UPDATE_QUIZ_QUESTION_QUESTION': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id !== questionId) {
            return question
          }

          return {
            ...question,
            question: payload
          }
        })
      }
    }
    case 'UPDATE_QUIZ_QUESTION_CHOICE': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id !== questionId) {
            return question
          }

          return {
            ...question,
            choices: question.choices.map(choice => {
              if (choice.key !== payload.key) {
                return choice
              }

              return { ...payload }
            })
          }
        })
      }
    }
    case 'ADD_QUIZ_QUESTION_CHOICE': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id !== questionId) {
            return question
          }

          return {
            ...question,
            choices: [...question.choices, { ...payload }]
          }
        })
      }
    }
    case 'REMOVE_QUIZ_QUESTION_CHOICE': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id !== questionId) {
            return question
          }

          return {
            ...question,
            choices: question.choices.filter(
              choice => choice.key !== payload.key
            ),
            answers: question.answers.filter(
              answer => answer.key !== payload.key
            )
          }
        })
      }
    }
    case 'TOGGLE_QUIZ_QUESTION_ANSWER': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id !== questionId) {
            return question
          }

          let answers = question.answers.filter(
            answer => answer.key !== payload.key
          )

          if (answers.length === question.answers.legnth) {
            answers = [...answers, { ...payload }]
          }

          return {
            ...question,
            answers
          }
        })
      }
    }
    default: {
      return state
    }
  }
}
