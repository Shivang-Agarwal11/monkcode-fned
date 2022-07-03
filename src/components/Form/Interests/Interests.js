import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Interests extends Component {

  state = {
    interests: {
      name: ''
    }
  }
  handleChange = (input) => e => {
    let interests = this.state.interests

    interests[input] = e.target.value

    this.setState(prevState => ({
      interests: { ...prevState.interests }
    }))
  }

  render() {

    return (
      <div>
        <TextField
          placeholder="Type Your Interest"
          label="Interest"
        
          onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
        />
        <br />

        <Button style={{ "margin-top": "20px", "fontWeight": "700" }} onClick={this.props.handleChange(this.state.interests.name)} color="primary" variant='contained'>Add</Button>
        <Button style={{ "margin-top": "20px", "fontWeight": "700","margin-left":"20px" }} onClick={this.props.handleChange(this.state.interests.name)} color="primary" variant='contained'>Cancel</Button>

      </div>
    );
  }

}

export default Interests;