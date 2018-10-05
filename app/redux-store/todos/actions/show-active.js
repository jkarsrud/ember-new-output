import { namespace } from '../shared';

export const SHOW_ACTIVE = `${namespace}/SHOW_ACTIVE`;

// Action Creator
export const showActive = () => ({ type: SHOW_ACTIVE });

// Reducer
export const reducer = (state, action) => ({
  ...state,
  filter: false
});
