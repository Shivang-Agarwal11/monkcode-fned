import React, { Component } from 'react'
import { FaBookReader } from 'react-icons/fa';
import { MenuItems } from '../NavBar/MenuItems';
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
       <nav className='NavbarItems'>

<h1 className='navbar-logo'>FLEX learning<FaBookReader size={35} className='navbar-logo'/></h1>
<ul className='nav-menu'>
    {MenuItems.map((item,index) => {
        return(
            <li key={index}>
             
                <a className={item.cname} href={item.url}> 
                {item.name} 
                </a>
            </li>
        );
    })}
</ul>
</nav><div className='profile-sidebar'>
<ProSidebar >
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    {/* <SubMenu title="Components" icon={<FaHeart />}> */}
      <MenuItem>Edit Profile</MenuItem>
      <MenuItem >Job Status <Link to='/verification'/></MenuItem>
      <MenuItem>Edit Resume</MenuItem>
      <MenuItem>Previous Applied Jobs</MenuItem>
      <MenuItem>My Contests</MenuItem>
    {/* </SubMenu> */}
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