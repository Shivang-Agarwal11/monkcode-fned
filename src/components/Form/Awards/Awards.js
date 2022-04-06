import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

export class Awards extends Component {

      state={
        awards:{
          title:'',
          position:'',
          organization:'',
          year:''
        }
      }

      handleChange=(input)=>e=>{
        let awards=this.state.awards

        awards[input]=e.target.value

        this.setState(prevState=>({
            awards:{...prevState.awards}
        }))
    }

      render() {
        // const {values}=this.props;
    
        return (
              <div>
              <TextField 
                placeholder="Title"
                label="Title"
                onChange={this.handleChange('title')}
                // defaultValue={values.firstname}
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="Position"
                label="Position"
                onChange={this.handleChange('position')}
                // defaultValue={values.lastname}
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="Organization"
                label="Organization"
                onChange={this.handleChange('organization')}
                // defaultValue={values.email}
                margin="normal"
                fullWidth
                />
              <br/>
              <TextField 
                placeholder="Year"
                label="Year"
                onChange={this.handleChange('year')}
                // defaultValue={values.address}
                margin="normal"
                fullWidth
                />
              <br/>
              <Box pt={1} textAlign='center'>
              <Button onClick={this.props.handleChange(this.state.awards)} color="primary" variant='contained'>Add Fields</Button>
              </Box>
              </div>
        );
      }
    
}

export default Awards;