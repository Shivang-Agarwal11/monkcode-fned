import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import "./NavBar.css";
import {FaBookReader} from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import { Carousels } from '../Carousel/Carousel';
import Jobs from '../Jobs/Jobs';
import { Navigate, NavLink } from 'react-router-dom';
class Navbar extends Component{
    state = { clicked:false,
    loggedOut:false }
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    displayprofile = () =>{
        const profile=document.querySelector('.profile-box');
        profile.classList.toggle('visible');
    }
    logoutHandler=()=>{
        console.log()
        localStorage.removeItem("token")
        this.setState({
            loggedOut:true
        })
    }
    render(){
        
        return(
            <React.Fragment>
                {this.state.loggedOut===true?<Navigate to='/'/>:
                <div>
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
                   <MdAccountCircle size={34}/>
                </div>
                <div className="profile-box">
                    <h2>{localStorage.getItem('name')}</h2>
                    <ul>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                        <li><NavLink to='/resumebuilder'>Resume Builder</NavLink></li>
                        <li><NavLink to='/home'>My Courses</NavLink></li>
                        <li><NavLink to='/home'>My Certifications</NavLink></li>
                        <li><form onSubmit={this.logoutHandler} className='nav-form'><button className="nav-btn"type='submit'>LOGOUT</button></form></li>
                    </ul>
                </div>
            </nav>
            <div className='carousel'>
            <Carousels/>
            </div>
            <Jobs/>
            </div>
                }
            </React.Fragment>
        )
    };
}

export default Navbar;