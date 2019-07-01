export const CREATE_ENROLLMENT = 'CREATE_ENROLLMENT'
export const UPDATE_ENROLLMENT = 'UPDATE_ENROLLMENT'
export const DELETE_ENROLLMENT = 'DELETE_ENROLLMENT'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_ENROLLMENT: {
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    }
    case UPDATE_ENROLLMENT: {
      const { id, ...props } = payload

      return {
        ...state,
        [id]: { ...props, id }
      }
    }
    case DELETE_ENROLLMENT: {
      const { id } = payload

      return Object.assign({}, { ...state }, { [id]: undefined })
    }
    default: {
      return state
    }
  }
}
