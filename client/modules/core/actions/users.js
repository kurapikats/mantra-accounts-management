export default {
  create({Meteor, LocalState, Flowrouter}, {email, password}, cb) {
    Meteor.call('users.create', {email, password}, cb);
  },

  delete({Meteor, LocalState, Flowrouter}, {_id}, cb) {
    Meteor.call('users.delete', {_id}, cb);
  }
}
