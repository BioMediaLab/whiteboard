export const CREATE_COURSE = 'CREATE_COURSE'
export const UPDATE_COURSE = 'UPDATE_COURSE'
export const DELETE_COURSE = 'DELETE_COURSE'
export const ADD_COURSES = 'ADD_COURSES'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_COURSE: {
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    }
    case UPDATE_COURSE: {
      const { id, ...props } = payload

      return {
        ...state,
        [id]: { ...props, id }
      }
    }
    case DELETE_COURSE: {
      const { id } = payload

      return Object.assign({}, { ...state }, { [id]: undefined })
    }
    case ADD_COURSES: {
      const items = payload || []

      return {
        ...state,
        ...items.reduce((accum, item) => {
          return {
            ...accum,
            [item.id]: item
          }
        }, {})
      }
    }
    default: {
      return state
    }
  }
}
