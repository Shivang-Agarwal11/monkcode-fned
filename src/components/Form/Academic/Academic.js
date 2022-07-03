import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export class Academic extends Component {

  state = {
    qualiDetails: {
      qualification: '',
      from: '',
      to: '',
      degree: '',
      institute: '',
      percentage: '',
    },
  }

  handleChange = (input) => e => {
    let qualiDetails = this.state.qualiDetails

    qualiDetails[input] = e.target.value

    this.setState(prevState => ({
      qualiDetails: { ...prevState.qualiDetails }
    }))
  }

  render() {
    // console.log(this.state)

    return (

        <>
      <FormControl fullWidth>
        <InputLabel id="qualification" margin='normal'>Qualification</InputLabel>
        <Select label="Qualification" value={this.state.qualiDetails.qualification} onChange={this.handleChange('qualification')} labelId="qualification">

          <MenuItem value="Under Graduation">Under Graduation</MenuItem>
          <MenuItem value="Post Graduation">Post Graduation</MenuItem>
          <MenuItem value="Graduation">Graduation</MenuItem>
          <MenuItem value=" Intermediate"> Intermediate (12th) </MenuItem>
        </Select>
        </FormControl>
        <TextField
          placeholder="From (Year)"
          label="From (Year)"
          onChange={this.handleChange('from')}
          fullWidth
          margin="normal"

        />
        <br />
        <TextField
          placeholder="To (Year)"
          label="To (Year)"
          onChange={this.handleChange('to')}

          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Degree"
          label="Degree"
          onChange={this.handleChange('degree')}
          //  defaultValue={this.state.degree}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Institute"
          label="Institute"
          onChange={this.handleChange('institute')}
          //  defaultValue={this.state.institute}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Percentage"
          label="Percentage"
          onChange={this.handleChange('percentage')}
          //  defaultValue={this.state.percentage}
          margin="normal"
          fullWidth
        />
        <br />
        
          <Button onClick={this.props.handleChange(this.state.qualiDetails)} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Details</Button>
          <Button onClick={this.props.handleChange(this.state.qualiDetails)} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700","margin-left":"20px"}}>Cancel</Button>
        </>
      
    );
  }

}

export default Academic;