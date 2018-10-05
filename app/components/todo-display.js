import Ember from 'ember';
import Component from '@ember/component';
import { action } from '@ember-decorators/object';

const { run: { scheduleOnce } } = Ember;

export default class TodoItemDisplay extends Component {
  @action
  didClickLabel() {
    this.props.startEditing();
    this.send('focusInput');
  }

  @action
  didFinishEditing(e) {
    const target = e.target;
    const text = target.value;

    this.props.editTodo(text);
    this.props.doneEditing();
  }

  @action
  focusInput() {
    scheduleOnce('afterRender', this, () => {
      const element = this.element;
      const input = element.querySelector('input.edit');

      input.focus();
    });
  }

  @action
  handleKeydown(e) {
    const target = e.target;

    // Tab, Enter, Escape
    if ([9, 13, 27].includes(e.keyCode)) {
      target.blur();
      this.props.doneEditing();
    }
  }
}
