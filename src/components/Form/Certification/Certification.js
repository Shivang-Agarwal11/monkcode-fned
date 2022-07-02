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
              
              <Button onClick={this.props.handleChange(this.state.certificate)} color="primary" variant='contained' style={{"margin":"20px","fontWeight":"700"}}>Add Fields</Button>
              
              </div>
        );
      }
    
}

export default Certification;