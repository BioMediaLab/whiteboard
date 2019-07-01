export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER: {
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
