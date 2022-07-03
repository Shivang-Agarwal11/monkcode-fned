import React, { Component } from 'react'

export class ShowPosts extends Component {
  render() {
    const values=this.props.values
    console.log(values)
    return (
      <React.Fragment>
        <div className='discuss-add-container'>
        {values.map((value)=><div className='discuss-message'>{value}</div>)}
        </div>
      </React.Fragment>
    )
  }
}

export default ShowPosts