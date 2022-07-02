import React, { Component } from 'react'
import { FaGem } from 'react-icons/fa';
import './Profile.css'
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import analysis from './analysis.png';
export class Profile extends Component {
 
  
  render() {
    return (
      <div>
<div className='profile-sidebar' style={{'margin-top':'30px'}}>
<ProSidebar >
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    
      <MenuItem>Edit Profile</MenuItem>
      <MenuItem >Job Status <Link to='/verification'/></MenuItem>
      <MenuItem>Edit Resume</MenuItem>
      <MenuItem>Previous Applied Jobs</MenuItem>
      <MenuItem>My Contests</MenuItem>
    
  </Menu>
</ProSidebar>
<div className='profile-img'>
<img src={analysis} alt='analysed'/>
</div>
</div>

      </div>
    )
  }
}

export default Profile