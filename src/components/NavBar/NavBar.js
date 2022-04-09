import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import "./NavBar.css";
import {FaBookReader} from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import { Carousels } from '../Carousel/Carousel';
import Jobs from '../Jobs/Jobs';
import { NavLink } from 'react-router-dom';
class Navbar extends Component{
    state = { clicked:false }
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    displayprofile = () =>{
        const profile=document.querySelector('.profile-box');
        profile.classList.toggle('visible');
    }
    render(){
        
        return(
            <React.Fragment>
            <nav className='NavbarItems'>

                <h1 className='navbar-logo'>FLEX learning<FaBookReader size={35} className='navbar-logo'/></h1>
                {/* for hamburger menu */}
                <div className='menu-icon' onClick={this.handleClick}> 
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
                <div className="profile-icon" onClick={this.displayprofile}>
                   <MdAccountCircle size={35}/>
                </div>
                <div className="profile-box">
                    <h2>UserName</h2>
                    <ul>
                        <li><NavLink to='/home'>Edit Profile</NavLink></li>
                        <li><NavLink to='/resumebuilder'>Resume Builder</NavLink></li>
                        <li><NavLink to='/home'>My Courses</NavLink></li>
                        <li><NavLink to='/home'>My Certifications</NavLink></li>
                        <li><button className="btn">LOGOUT</button></li>
                    </ul>
                </div>
            </nav>
            <div className='carousel'>
            <Carousels/>
            </div>
            <Jobs/>
            
            </React.Fragment>
        )
    };
}

export default Navbar;