import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { equal, gt } from '@ember-decorators/object/computed';

export default class extends Component {

  @equal('props.filter', undefined) showAll;
  @equal('props.filter', false) showActive;
  @equal('props.filter', true) showCompleted;

  @gt('props.completedCount', 0) showClearButton;

  @computed('props.todosCount')
  get itemWord() {
    return this.props.todosCount > 1 ? 'items' : 'item';
  }

}
