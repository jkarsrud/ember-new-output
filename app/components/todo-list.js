import Component from '@ember/component';
import { connect } from 'ember-redux';
import { selectors } from 'my-app/redux-store/todos';

const { list } = selectors;


const stateToComputed = (state) => ({
  todos: list(state)
});

@connect(stateToComputed)
export default class TodoListComponent extends Component {
  tagName = 'ul';
  classNames = ['todo-list'];
}
