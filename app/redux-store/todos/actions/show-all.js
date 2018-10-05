import { namespace } from '../shared';

export const SHOW_ALL = `${namespace}/SHOW_ALL`;

// Action Creator
export const showAll = () => ({ type: SHOW_ALL });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  filter: undefined
});
