import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Languages extends Component {

      state={
        languages:{
          name:''
        }
      }
      handleChange=(input)=>e=>{
        let languages=this.state.languages

        languages[input]=e.target.value

        this.setState(prevState=>({
            languages:{...prevState.languages}
        }))
      }
  
      render() {
        // const {values}=this.props;
          // console.log(this.state)
        return (
            <div>
              <TextField 
                placeholder="Type Your Know Language"
                label="Language"
                // defaultValue={values.address}
                onChange={this.handleChange('name')}
                margin="normal"
                fullWidth
                />
              <br/>
              <Box pt={1} textAlign='center'>
              <Button onClick={this.props.handleChange(this.state.languages.name)} color="primary" variant='contained'>Add</Button>
              </Box>
              </div>
        );
      }
    
}

export default Languages;