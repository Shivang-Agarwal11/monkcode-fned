import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export class Academic extends Component {

  state = {
    company: {
      name: '',
      designation: '',
      country: '',
      industry: '',
      start: '',
      end: ''

    },
  }

  handleChange = (input) => e => {
    let company = this.state.company

    company[input] = e.target.value

    this.setState(prevState => ({
      company: { ...prevState.company }
    }))
  }

  render() {
    return (

      <div>

        <TextField
          placeholder="Company Name"
          label="Company Name"
          onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Designation"
          label="Designation"
          onChange={this.handleChange('designation')}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Country"
          label="Country"
          onChange={this.handleChange('country')}

          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Industry"
          label="Industry"
          onChange={this.handleChange('industry')}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Start Date"
          label="Start Date"
          onChange={this.handleChange('start')}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="End Date"
          label="End Date"
          onChange={this.handleChange('end')}
          margin="normal"
          fullWidth
        />
        <br />

        <Button style={{ "margin": "20px", "fontWeight": "700" }} onClick={this.props.handleChange(this.state.company)} color="transparent" variant='contained'>Add Work</Button>
        <Button style={{ "margin": "20px", "fontWeight": "700","margin-left":"20px" }} onClick={this.props.handleChange({})} color="transparent" variant='contained'>Cancel</Button>

      </div>
    );
  }

}

export default Academic;