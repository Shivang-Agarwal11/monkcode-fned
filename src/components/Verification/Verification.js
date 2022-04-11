import { Box, Button} from '@material-ui/core'
import React, { Component } from 'react'
import './Verification.css'
import { NavLink } from 'react-router-dom'
import Timeline from './Timeline'
import Bookmark from './Bookmark'

export class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          progress: 50,
          progressval:false
        };
    
        this.increment = this.increment.bind(this);
        this.progressClick = this.progressClick.bind(this);
      }
    
      componentDidMount() {
        this.interval = setInterval(() => {
          this.increment();
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
      increment() {
        const progress = this.state.progress > 100 ?  this.setState({
          progressval:true
        }): (this.state.progress + 10);
        this.setState({
          progress
        });
      }
    
      progressClick(progress) {
        this.setState({
          progress
        });
      }
  render() {
    // console.log(this.state.progress)
    return (
      
        <div>
            {this.state.progressval===true?(
            <div className='page-profile-box'><Box pt={1} textAlign='center'>
              <NavLink to='/home'>
              <Button>Verification Completed</Button>
              </NavLink>
              </Box>
              </div>):(      
            <div className='page-profile-box'><h1>Verification in Progress:</h1>
      ---
      <Timeline
        height={400}
        onSelect={this.progressClick}
        progress={this.state.progress}
      >
        <Bookmark onSelect={this.progressClick} progress={25}>
          Documents Submitted
        </Bookmark>
        {/* <Marker progress={50} /> */}
        <Bookmark onSelect={this.progressClick} progress={50}>
          Verifying
        </Bookmark>
        <Bookmark onSelect={this.progressClick} progress={75}>
          Just Summing Up
        </Bookmark>
        <Bookmark onSelect={this.progressClick} progress={100}>
          Verification Completed
        </Bookmark>
      </Timeline>
        <div className='padd'></div>
 </div>
            )}
 
 </div>
    )
  }
}

export default Verification