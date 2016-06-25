import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UsersList from '../components/users_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const data = {};
  let users;
  const usersSubs = Meteor.subscribe('users.list');
  if (usersSubs.ready()) {
    users = Meteor.users.find({}).fetch();
    data.users = users;

    onData(null, data);
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersList);
