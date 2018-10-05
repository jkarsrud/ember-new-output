import { namespace } from '../shared';

export const DESTROY = `${namespace}/DESTROY`;

// Action Creator
export const destroy = (id) => ({ type: DESTROY, id });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  all: state.all.filter(todo => todo.id !== action.id)
});
