import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../../../public/css/bootstrap.grids.min.css';
import '../../../../public/css/styles.css';

const Layout = ({content = () => null }) => (
  <MuiThemeProvider>
    <div className="container-fluid">
      <div className="col-md-12">
        {content()}
      </div>
    </div>
  </MuiThemeProvider>
);

export default Layout;
