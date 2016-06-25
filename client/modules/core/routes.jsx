import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import UsersList from './containers/users_list.js';
import UsersNew from './containers/users_new.js';
import UsersLogin from './containers/users_login.js';
import UsersProfile from './containers/users_profile.js';

export default function (injectDeps, {FlowRouter, Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/admin/users', {
    name: 'users.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersList />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersNew />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersLogin />)
      });
    }
  });

  // View Profile of currently logged-in user
  FlowRouter.route('/my-profile', {
    name: 'users.my-profile',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UsersProfile userId={Meteor.userId()} />)
      });
    }
  });

  // View User's Profile
  FlowRouter.route('/admin/profile/:userId', {
    name: 'users.profile',
    action({userId}) {
      mount(MainLayoutCtx, {
        content: () => (<UsersProfile userId={userId} />)
      });
    }
  });
}
