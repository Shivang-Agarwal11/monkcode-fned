import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Skills extends Component {

  state = {
    skills: {
      name: ''
    }
  }
  handleChange = (input) => e => {
    let skills = this.state.skills

    skills[input] = e.target.value

    this.setState(prevState => ({
      skills: { ...prevState.skills }
    }))
  }

  render() {
    return (
      <div>
        <TextField
          placeholder="Type Your Skill"
          label="Skill"
          
          onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
        />
        <br />

        <Button style={{ "margin": "20px", "fontWeight": "700" }} onClick={this.props.handleChange(this.state.skills.name)} color="transparent" variant='contained'>Add</Button>
        <Button style={{ "margin": "20px", "fontWeight": "700","margin-left":"20px" }} onClick={this.props.handleChange(this.state.skills.name)} color="transparent" variant='contained'>Cancel</Button>

      </div>
    );
  }

}

export default Skills;