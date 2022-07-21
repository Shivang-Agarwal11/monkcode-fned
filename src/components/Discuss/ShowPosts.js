import React, { Component } from 'react'

export class ShowPosts extends Component {
  render() {
    const values=this.props.values
    console.log(values)
    return (
        <div >
        {values.map((value)=><div className='discuss-message'>{value}</div>)}
        </div>
    )
  }
}

export default ShowPosts