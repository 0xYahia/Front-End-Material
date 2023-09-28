const INITIAL_STATE = [];

export function menuReducer(state = INITIAL_STATE, action) {
  if (action.type === " FETCH_PRODUCTS") {
    return action.payload;
  }
  return state;
}
