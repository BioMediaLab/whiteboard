export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE': {
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
