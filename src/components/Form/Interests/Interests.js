import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Interests extends Component {

      state={
        interests:{
          name:''
        }
      }
      handleChange=(input)=>e=>{
        let interests=this.state.interests

        interests[input]=e.target.value

        this.setState(prevState=>({
            interests:{...prevState.interests}
        }))
      }
  
      render() {
       
        return (
            <div>
              <TextField 
                placeholder="Type Your Interest"
                label="Interest"
                // defaultValue={values.address}
                onChange={this.handleChange('name')}
                margin="normal"
                fullWidth
                />
              <br/>
              <Box pt={1} textAlign='center'>
              <Button onClick={this.props.handleChange(this.state.interests.name)} color="primary" variant='contained'>Add</Button>
              </Box>
              </div>
        );
      }
    
}

export default Interests;