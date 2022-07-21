import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { Card, CardContent } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AppBars from '../AppBars';

export class Personal extends Component {
  render() {
    const {values}=this.props;
    // console.log(values);
    return (
          <Box ml={20} mr={20} pt={10}>
        
        <Card variant='elevation' elevation={6}>
          <CardContent>
          <AppBars values={"Personal Details"}/>

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
            onChange={this.props.handleChange('contactNo')}
            defaultValue={values.contact}
            margin="normal"
            fullWidth
            />
          <br/>
        
          </CardContent>
        </Card>
      
      </Box>
    );
  }
}

export default Personal;
