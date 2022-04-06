import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export class Scholorship extends Component {
      render() {
        const {values}=this.props;
    
        return (
              <Box ml={20} mr={20} pt={10} pb={10}>
            <MuiThemeProvider>
            <Card variant='elevation' elevation={6}>
          <CardContent>
              <AppBar position="static"  style={{ background: '#2E3B55' }}>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Grants and Scholorships
              </Typography>
            </Toolbar>
          </AppBar>
              <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={this.props.handleChange('firstname')}
                defaultValue={values.firstname}
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={this.props.handleChange('lastname')}
                defaultValue={values.lastname}
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="example@gmail.com"
                label="Email"
                onChange={this.props.handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                fullWidth
                />
              <br/>
              <TextField 
                placeholder="Address"
                label="Address"
                onChange={this.props.handleChange('address')}
                defaultValue={values.address}
                margin="normal"
                fullWidth
                />
              <br/>
              <TextField 
                placeholder="Phone Number"
                label="Contact"
                onChange={this.props.handleChange('contact')}
                defaultValue={values.contact}
                margin="normal"
                fullWidth
                />
              <br/>
            </CardContent>
            </Card>
            
          </MuiThemeProvider>
          </Box>
        );
      }
    
}

export default Scholorship;