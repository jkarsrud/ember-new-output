import { namespace } from '../shared';

export const EDIT = `${namespace}/EDIT`;

// Action Creator
export const edit = (id, text) => ({ type: EDIT, id, text });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, text: action.text };
    }

    return todo;
  })
});
