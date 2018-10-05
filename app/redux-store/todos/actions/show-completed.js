import { namespace } from '../shared';

export const SHOW_COMPLETED = `${namespace}/SHOW_COMPLETED`;

// Action Creator
export const showCompleted = () => ({ type: SHOW_COMPLETED });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  filter: true
});
