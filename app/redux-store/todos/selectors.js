export function list(state) {
  const filter = state.todos.filter;

  // naming could probably be better here...
  // state.{reducer}.{collection in reducer}.filter...
  return state.todos.all.filter(todo => {
    return filter === undefined ? true : filter === todo.completed;
  });
}


export const filter = (state) => state.todos.filter;
export const all = (state) => state.todos.all;

export const count = (state) => list(state).length;
export const allCount = (state) => all(state).length;
export const completedCount = (state) => all(state).filter(t => t.completed).length;
