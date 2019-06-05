export const initialState = {
  title:'',
  description:'',
  question: '',
  choices: [],
  answer: null
}

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'UPDATE_TITLE':
      // payload = string
      return {
        ...state,
        question: payload
      }
      case 'UPDATE_DESCRIPTION':
      // payload = string
      return {
        ...state,
        question: payload
      }
    case 'UPDATE_QUESTION':
      // payload = string
      return {
        ...state,
        question: payload
      }
    case 'UPDATE_CHOICE':
      // payload = {key, value}
      return {
        ...state,
        choices: state.choices.map(choice => {
          if (choice.key !== payload.key) {
            return choice
          }

          return {
            ...payload
          }
        }) // payload = {key, value}
      }
    case 'ADD_CHOICE':
      // payload = {key, value}
      return {
        ...state,
        choices: [...state.choices, payload] // payload = {key, value}
      }
    case 'REMOVE_CHOICE':
      // payload = key
      return {
        ...state,
        choices: state.choices.filter(choice => choice.key !== payload.key)
      }
    case 'UPDATE_ANSWER':
      // payload = {key, value}
      return {
        ...state,
        question: payload
      }
    case 'RESET_QUESTION':
      return {
        ...initialState
      }
    default:
      return state
  }
}
