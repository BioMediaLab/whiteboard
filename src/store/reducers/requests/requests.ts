export const HANDLE_REQUEST = 'HANDLE_REQUEST'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case HANDLE_REQUEST: {
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
