// Reducer
export default function layout(
  state = {
    keys: ['home'],
  }, action) {
  switch (action.type) {
    case 'SET_SELECTED_KEYS':
      state = { ...state,
        keys: action.keys
      }
      break;
    default:
      break;
  }

  return state;
}