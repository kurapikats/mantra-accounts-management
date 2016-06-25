import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.list', function () {
    return Meteor.users.find({});
  });

  Meteor.publish('users.single', function (_id) {
    return Meteor.users.find(_id);
  });
}
