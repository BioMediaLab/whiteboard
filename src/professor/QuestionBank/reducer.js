export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE': {
      return {
        ...state,
        ...payload
      }
    }
    case 'ADD_QUESTION': {
      const questions = state.questions || []
      return {
        ...state,
        questions: [...questions, payload]
      }
    }
    case 'REMOVE_QUESTION': {
      const { questionId } = action

      return {
        ...state,
        questions: state.questions.filter(
          question => question.id !== questionId
        )
      }
    }
    case 'UPDATE_QUESTION': {
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
    case 'UPDATE_CHOICE': {
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
    case 'ADD_CHOICE': {
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
    case 'REMOVE_CHOICE': {
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
    case 'TOGGLE_ANSWER': {
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

          if (answers.length === question.answers.length) {
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
