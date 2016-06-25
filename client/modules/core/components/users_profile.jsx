import React from 'react';

class UsersProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { userId, user } = this.props;
    console.log(this.props, Meteor.user());

    return (
      <div>
        User ID: {userId}<br/>
      </div>
    );
  }
}

export default UsersProfile;
