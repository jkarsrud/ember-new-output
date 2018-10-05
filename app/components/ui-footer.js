import Component from '@ember/component';
import { gt } from '@ember-decorators/object/computed';
import { connect } from 'ember-redux';

import {
  selectors,
  clearCompleted,
  showAll, showActive, showCompleted
} from 'my-app/redux-store/todos';

const { count, allCount, completedCount, filter } = selectors;


const stateToComputed = (state) => ({
  filter: filter(state),
  allCount: allCount(state),
  todosCount: count(state),
  completedCount: completedCount(state)
});

const dispatchToActions = {
  clearCompleted,
  showAll,
  showActive,
  showCompleted
};

@connect(stateToComputed, dispatchToActions)
export default class FooterComponent extends Component {
  @gt('allCount', 0) showFooter;
}
