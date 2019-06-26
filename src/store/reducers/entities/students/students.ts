export const CREATE_STUDENT = 'CREATE_STUDENT'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_STUDENT: {
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    }
    case UPDATE_STUDENT: {
      const { id, ...props } = payload

      return {
        ...state,
        [id]: { ...props, id }
      }
    }
    case DELETE_STUDENT: {
      const { id } = payload

      return Object.assign({}, { ...state }, { [id]: undefined })
    }
    default: {
      return state
    }
  }
}
