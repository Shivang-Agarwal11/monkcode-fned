import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Skills extends Component {

      state={
        skills:{
          name:''
        }
      }
      handleChange=(input)=>e=>{
        let skills=this.state.skills

        skills[input]=e.target.value

        this.setState(prevState=>({
            skills:{...prevState.skills}
        }))
      }
  
      render() {
        // const {values}=this.props;
          // console.log(this.state)
        return (
            <div>
              <TextField 
                placeholder="Type Your Skill"
                label="Skill"
                // defaultValue={values.address}
                onChange={this.handleChange('name')}
                margin="normal"
                fullWidth
                />
              <br/>
              <Box pt={1} textAlign='center'>
              <Button onClick={this.props.handleChange(this.state.skills.name)} color="primary" variant='contained'>Add</Button>
              </Box>
              </div>
        );
      }
    
}

export default Skills;