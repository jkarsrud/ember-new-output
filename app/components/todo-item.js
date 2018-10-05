import Component from '@ember/component';
import { action } from '@ember-decorators/object';

import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'my-app/redux-store/todos';

const dispatchToActions = {
  deleteTodo: destroy,
  completeTodo: toggle,
  editTodo: edit
}

@connect(null, dispatchToActions)
export default class TodoItemContainer extends Component {
  tagName = 'li';
  editing = false;
  classNameBindings = ['todo.completed', 'editing'];

  @action
  startEditing() {
    this.set('editing', true);
  }

  @action
  doneEditing() {
    this.set('editing', false);
  }
}
