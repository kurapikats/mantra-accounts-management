import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

export default function () {
  Meteor.methods({
    'users.create'(data, cb) {

      const {email, password} = data;

      const user = {
        email,
        password
      };

      let result = Accounts.createUser(user);

      if (result && typeof cb !== 'undefined' && typeof cb === 'function') {
        console.log(result, 'create result');
        return cb(result);
      }
    }
  });
}
