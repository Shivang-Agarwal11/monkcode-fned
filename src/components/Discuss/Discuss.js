import React, { Component } from 'react'
import AddMessage from './AddMessage'
import ShowPosts from './ShowPosts'


export class Discuss extends Component {
  state={
    messages:['Are there any upcoming sql related contests?',
    'Any one work in RRP institue?',
    'Environment of RRp institue is good for work.'

    ]
  }

  onAdd=(input)=>e=>{
    let messages=this.state.messages
      messages.push(input)
      this.setState(prevState=>({
        messages:[...prevState.messages],
      }))
      this.render()
  }
  render() {
    return (
      <React.Fragment>
        <div className='discuss-container-h1'>
        <h1 className='dicuss-h1'>Discussion Area</h1>
        </div>
        <AddMessage onSubmit={this.onAdd}/>
      <ShowPosts values={this.state.messages}/>
      {/* <div className='discuss-container'>
          
      </div> */}
      </React.Fragment>
    )
  }
}

export default Discuss