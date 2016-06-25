import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UsersProfile from '../components/users_profile.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();

  // find the user, so we could reuse this container to other profile
  var user = Meteor.users.findOne({_id: userId});
  const data = {};
  data.userId = userId;
  onData(null, data);
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UsersProfile);
