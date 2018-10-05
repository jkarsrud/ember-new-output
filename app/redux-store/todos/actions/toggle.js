import { namespace } from '../shared';

export const TOGGLE = `${namespace}/TOGGLE`;

// Action Creator
export const toggle = (id) => ({ type: TOGGLE, id });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, completed: !todo.completed};
    }

    return todo;
  })
});
