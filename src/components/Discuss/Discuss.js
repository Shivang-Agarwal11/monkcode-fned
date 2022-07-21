import React, { Component } from 'react'
import AddMessage from './AddMessage'
import ShowPosts from './ShowPosts'
import './Discuss.css'
import { Box } from '@material-ui/core'

export class Discuss extends Component {
  state = {
    messages: ['Are there any upcoming sql related contests?',
      'Any one work in RRP institue?',
      'Environment of RRP institue is good for work.'

    ]
  }

  onAdd = (input) => {
    let messages = this.state.messages
    messages.push(input)
    this.setState(prevState => ({
      messages: [...prevState.messages],
    }))
    this.render()
  }
  render() {
    return (
      <div sx={{ marginTop: "1%" }}>
        <div style={{ "display": "flex", "flexDirection": "column" }}>
          <div style={{ "display": "flex", "width": "90%", "alignItems": "center", "justifyContent": "center" }} >
            <h1 className='discuss-h1' style={{ "padding": "20px" }}>Discussion Area</h1>
          </div>
          <div style={{ "display": "flex", "width": "90%", "alignItems": "center", "justifyContent": "center" }}>
            <AddMessage onSubmit={this.onAdd} />
          </div>
          <div className='discuss-add-container'>
            <ShowPosts values={this.state.messages} />
          </div>
        </div>
      </div>
    )
  }
}

export default Discuss