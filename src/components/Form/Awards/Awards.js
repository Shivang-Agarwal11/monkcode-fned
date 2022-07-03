import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="Position"
                label="Position"
                onChange={this.handleChange('position')}
                margin="normal"
                fullWidth
              />
              <br/>
              <TextField 
                placeholder="Organization"
                label="Organization"
                onChange={this.handleChange('organization')}
                margin="normal"
                fullWidth
                />
              <br/>
              <TextField 
                placeholder="Year"
                label="Year"
                onChange={this.handleChange('year')}
                margin="normal"
                fullWidth
                />
              <br/>
              
              <Button onClick={this.props.handleChange(this.state.awards)} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Fields</Button>
              <Button onClick={this.props.handleChange(this.state.awards)} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700","margin-left":"20px"}}>Cancel</Button>
              
              </div>
        );
      }
    
}

export default Awards;