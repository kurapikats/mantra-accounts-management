import React from 'react';

import { TextField, RaisedButton, Divider, Paper } from 'material-ui';
import { Meteor } from 'meteor/meteor';
import Flowrouter from 'meteor/kadira:flow-router';

import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

class UsersNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.errorMessages = {
      errEmail: 'Please enter a valid email.',
      errRequired: 'This field is required.',
      errPasswordNotSame: 'Password is not the same.'
    };
  }

  componentWillMount() {
    Formsy.addValidationRule('equalsField', (values, confirmPassword) => {
      return values.password === confirmPassword;
    });
  }

  handleSubmit(e) {
    const { create } = this.props;

    create(e, (result) => {
      // if result is empty, success
      if (!result) {
        Meteor.loginWithPassword(e.email, e.password, () => {
          Flowrouter.go('/my-profile');
          // console.log(Flowrouter, 'flowrouter');
          // console.log(Meteor.loginWithPassword,'meteor');
        });
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
            <FormsyText
              floatingLabelText="Confirm Password"
              name="confirm_password"
              ref="confirm_password"
              type="password"
              autocomplete="off"
              fullWidth={true}
              underlineShow={false}
              validations="equalsField"
              validationError={this.errorMessages.errPasswordNotSame}
              required
            />
            <Divider/>
            <br/>
            <RaisedButton
              type="submit"
              label="Register"
              labelPosition="before"
              primary={true}
              disabled={!this.state.canSubmit}
            />
            <div style={{clear:'both', float: 'none'}}></div>
          </Paper>
        </div>
        <div className="col-md-3">&nbsp;</div>
      </Formsy.Form>
    );
  }
}

export default UsersNew;
