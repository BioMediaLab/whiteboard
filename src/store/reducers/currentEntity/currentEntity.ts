export const SET_CURRENT_ENTITY = 'SET_CURRENT_ENTITY'
export const UPDATE_CURRENT_ENTITY = 'UPDATE_CURRENT_ENTITY'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_ENTITY: {
      return {
        ...payload
      }
    }

    case UPDATE_CURRENT_ENTITY: {
      return {
        ...state,
        ...payload
      }
    }

    default: {
      return state
    }
  }
}
