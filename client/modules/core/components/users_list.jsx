import React from 'react';

import UserItem from '../containers/users_item.js';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;

    const userList = users.map((user) => {
      return (
        <UserItem key={user._id} user={user} />
      );
    });

    return (
      <div>
        {userList}
      </div>
    );
  }
}

export default UsersList;
