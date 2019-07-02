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
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.filter(
          question => question.key !== questionKey
        )
      }
    }
    case 'UPDATE_QUESTION': {
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.key !== questionKey) {
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
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.key !== questionKey) {
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
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.key !== questionKey) {
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
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.key !== questionKey) {
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
      const { questionKey } = action

      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.key !== questionKey) {
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
    case 'RESET': {
      return {
        title: '',
        description: '',
        courseId: '',
        questions: []
      }
    }
    default: {
      return state
    }
  }
}
