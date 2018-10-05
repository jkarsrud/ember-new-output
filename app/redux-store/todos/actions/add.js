import { namespace } from '../shared';

export const ADD = `${namespace}/ADD`;

let nextTodoId = 0;

// Action Creator
export const add = (text) => ({ type: ADD, text, id: nextTodoId++ });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: [
    ...state.all,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ]
});
