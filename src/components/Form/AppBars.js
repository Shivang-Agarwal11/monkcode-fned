
import { Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';



import React, { Component } from 'react'

export class AppBars extends Component {
  render() {
      const {values}=this.props
    return (
        <React.Fragment>
        <AppBar position="static"  style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <p>{values}</p>
          </Typography>
        </Toolbar>
      </AppBar>
      </React.Fragment>
    )
  }
}

export default AppBars;