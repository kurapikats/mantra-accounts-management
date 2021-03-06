import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, IconButton, IconMenu, MenuItem, MoreVertIcon } from 'material-ui';

import '../../../../public/css/bootstrap.grids.min.css';
import '../../../../public/css/styles.css';

  const handleTitleClick = () => {
    FlowRouter.go('/');
  }

    const appBar = (
      <AppBar
        title="My Project"
        onTitleTouchTap={handleTitleClick}
        showMenuIconButton={true}
        zDepth={1}
      />
    );

const Layout = ({content = () => null }) => (
  <MuiThemeProvider>
    <div>
      {appBar}
      <div className="col-md-12">
        {content()}
      </div>
    </div>
  </MuiThemeProvider>
);

export default Layout;
