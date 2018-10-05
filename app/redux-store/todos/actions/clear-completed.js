import { namespace } from '../shared';

export const CLEAR_COMPLETED = `${namespace}/CLEAR_COMPLETED`;

// Action Creator
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: state.all.filter(todo => todo.completed === false)
});
