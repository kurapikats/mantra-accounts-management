import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, IconButton, IconMenu, MenuItem, MoreVertIcon } from 'material-ui';

import '../../../../public/css/bootstrap.grids.min.css';
import '../../../../public/css/styles.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTitleClick() {
    FlowRouter.go('/');
  }

  render() {
    const { content } = this.props;

    const appBar = (
      <AppBar
        title="My Project"
        onTitleTouchTap={this.handleTitleClick.bind(this)}
        showMenuIconButton={true}
        zDepth={1}
      />
    );

    return(
      <MuiThemeProvider>
        <div>
          {appBar}
          <div className="col-md-12">
            {content()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
