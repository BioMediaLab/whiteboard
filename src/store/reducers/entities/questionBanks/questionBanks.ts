export const CREATE_QUESTION_BANK = 'CREATE_QUESTION_BANK'
export const UPDATE_QUESTION_BANK = 'UPDATE_QUESTION_BANK'
export const DELETE_QUESTION_BANK = 'DELETE_QUESTION_BANK'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_QUESTION_BANK: {
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    }
    case UPDATE_QUESTION_BANK: {
      const { id, ...props } = payload

      return {
        ...state,
        [id]: { ...props, id }
      }
    }
    case DELETE_QUESTION_BANK: {
      const { id } = payload

      return Object.assign({}, { ...state }, { [id]: undefined })
    }
    default: {
      return state
    }
  }
}
