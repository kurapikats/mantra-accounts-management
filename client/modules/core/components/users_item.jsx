import React from 'react';

class UsersItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { user } = this.props;

    return (
      <div>
        <a href={`/admin/profile/${user._id}`}>{user.emails[0].address}</a>
      </div>
    );
  }
}

export default UsersItem;
