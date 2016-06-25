import React from 'react';

import { TextField, RaisedButton, Divider, Paper } from 'material-ui';
import { Meteor } from 'meteor/meteor';

import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

class UsersLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.errorMessages = {
      errEmail: 'Please enter a valid email.',
      errRequired: 'This field is required.'
    };
  }

  handleSubmit(e, x, y) {

    const { login } = this.refs;

    // console.log(login, 'login');

    // login.getDOMNode().preventDefault();

    Meteor.loginWithPassword(e.email, e.password, (err) => {
      if (!err) {
        FlowRouter.go('/my-profile');
      } else {
        console.log(err.reason);
      }
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {

    const styles = {
      paperPadding: {
        padding: 10
      },
      hidden: {
        display: 'none'
      }
    };

    return (
      <Formsy.Form
        onValid={this.enableButton.bind(this)}
        onInvalid={this.disableButton.bind(this)}
        onValidSubmit={this.handleSubmit.bind(this)}
        onInvalidSubmit={this.notifyFormError.bind(this)}
        autocomplete="off"
        ref="login"
      >
        <input style={styles.hidden} type="text" name="abc"/>
        <input style={styles.hidden} type="password" name="def"/>
        <br/>

        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6">
          <Paper style={styles.paperPadding} zDepth={2}>
            <p>{this.state.errForm}</p>
            <FormsyText
              floatingLabelText="Email Address"
              hintText="Email Address"
              name="email"
              ref="email"
              type="email"
              autocomplete="off"
              validations="isEmail"
              validationError={this.errorMessages.errEmail}
              fullWidth={true}
              underlineShow={false}
              required
            />
            <Divider/>
            <FormsyText
              floatingLabelText="Password"
              name="password"
              ref="password"
              type="password"
              autocomplete="off"
              validationError={this.errorMessages.errRequired}
              fullWidth={true}
              underlineShow={false}
              required
            />
            <Divider/>
            <br/>
            <RaisedButton
              type="submit"
              label="Login"
              labelPosition="before"
              primary={true}
              disabled={!this.state.canSubmit}
              onTouchTap={this.handleSubmit.bind(this)}
            />
            <div style={{clear:'both', float: 'none'}}></div>
          </Paper>
        </div>
        <div className="col-md-3">&nbsp;</div>
      </Formsy.Form>
    );
  }
}

export default UsersLogin;
