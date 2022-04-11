import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

import './Discuss.css'


export class AddMessage extends Component {
  state={
    message:{
      name:''
    }
  }
  handleChange=(input)=>e=>{
    let message=this.state.message

    message[input]=e.target.value

    this.setState(prevState=>({
        message:{...prevState.message}
    }))
  }
  render() {
    console.log(this.state.message)
    return (
      <div className='discuss-container'>
        <TextField 
        placeholder="Discuss"
        label="Discuss"
        value={this.state.message.name}
        onChange={this.handleChange('name')}
        margin="normal"
        fullWidth
        />
        <Button onClick={this.props.onSubmit(this.state.message.name)}>Post</Button>
      </div>
    )
  }
}

export default AddMessage