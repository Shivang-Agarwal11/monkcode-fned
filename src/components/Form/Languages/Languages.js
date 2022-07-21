import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Languages extends Component {

  state = {
    languages: {
      name: ''
    }
  }
  handleChange = (input) => e => {
    let languages = this.state.languages

    languages[input] = e.target.value

    this.setState(prevState => ({
      languages: { ...prevState.languages }
    }))
  }

  render() {
    return (
      <>
        <TextField
          placeholder="Type Your Know Language"
          label="Language"
          // defaultValue={values.address}
          onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
        />
        <br />

        <Button onClick={this.props.handleChange(this.state.languages.name)} color="transparent" variant='contained' style={{ "margin": "20px", "fontWeight": "700" }}>Add</Button>
        <Button onClick={this.props.handleChange(this.state.languages.name)} color="transparent" variant='contained' style={{ "margin": "20px", "fontWeight": "700", "margin-left": "20px" }}>Cancel</Button>

      </>
    );
  }

}

export default Languages;