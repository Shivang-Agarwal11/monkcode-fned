import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import {  MuiThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export class Personal extends Component {
  render() {
    const {values}=this.props;
    // console.log(values);
    return (
          <Box ml={20} mr={20} pt={10}>
        <MuiThemeProvider>
        <Card variant='elevation' elevation={6}>
          <CardContent>
          <AppBar position="static"  style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
          <TextField 
            placeholder="Name"
            label="Name"
            onChange={this.props.handleChange('name')}
            defaultValue={values.name}
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
            placeholder="Pincode"
            label="Pincode"
            onChange={this.props.handleChange('pincode')}
            defaultValue={values.pincode}
            margin="normal"
            fullWidth
            />
          <br/>
          <TextField 
            placeholder="City"
            label="City"
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            fullWidth
            />
          <br/>
          <TextField 
            placeholder="State"
            label="State"
            onChange={this.props.handleChange('state')}
            defaultValue={values.state}
            margin="normal"
            fullWidth
            />
          <br/>
          <TextField 
            placeholder="Country"
            label="Country"
            onChange={this.props.handleChange('country')}
            defaultValue={values.country}
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

export default Personal;
