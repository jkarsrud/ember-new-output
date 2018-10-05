import { namespace } from '../shared';

export const COMPLETE = `${namespace}/COMPLETE`;

// Action Creator
export const complete = (id) => ({ type: COMPLETE, id });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, completed: true };
    }

    return todo;
  })
});
