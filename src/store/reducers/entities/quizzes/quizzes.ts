export const CREATE_QUIZ = 'CREATE_QUIZ'
export const UPDATE_QUIZ = 'UPDATE_QUIZ'
export const DELETE_QUIZ = 'DELETE_QUIZ'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_QUIZ: {
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    }
    case UPDATE_QUIZ: {
      const { id, ...props } = payload

      return {
        ...state,
        [id]: { ...props, id }
      }
    }
    case DELETE_QUIZ: {
      const { id } = payload

      return Object.assign({}, { ...state }, { [id]: undefined })
    }
    default: {
      return state
    }
  }
}
