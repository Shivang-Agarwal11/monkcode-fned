import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


export class Certification extends Component {

      state={
        certificate:{
          title:'',
          organization:'',
          year:''
        }
      }

      handleChange=(input)=>e=>{
        let certificate=this.state.certificate

        certificate[input]=e.target.value

        this.setState(prevState=>({
            certificate:{...prevState.certificate}
        }))
    }

      render() {
        
    
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
              
              <Button onClick={this.props.handleChange(this.state.certificate)} color="transparent" variant='contained' style={{"margin":"20px","fontWeight":"700"}}>Add Fields</Button>
              <Button onClick={this.props.handleChange({})} color="transparent" variant='contained' style={{"margin":"20px","fontWeight":"700","margin-left":"20px"}}>Cancel</Button>
              
              </div>
        );
      }
    
}

export default Certification;