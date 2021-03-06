import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookReader } from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Button } from '@mui/material';
import './NavBar.css';

const axios = require("axios");


const NavBar = () => {

  const [isprofileClick, isprofileGettingClicked] = useState(false);
  const [link, setLink] = useState('/login')
  const onClickHandler = () => {
    isprofileGettingClicked(isprofileClick === true ? false : true)
  }
  var loggedIn = localStorage.getItem("loggedIn") == 1 ? "Logout" : "Sign In/Login"

  const settings = [
    ['Profile', '/profile'],
    ['Resume Builer', '/resumebuilder'],
    ['My Courses', '/'],
    ['My Certification', '/'],
  ]

  const items = [
    ['Home', '/'],
    ['Discuss', '/discuss'],
    ['Contact', '/contact']
  ]

  const authenticateHandler = () => {
    var val = localStorage.getItem("loggedIn");
    if (val == 1) {
      logoutHandler();
    }
    else {
      setLink('/login')
    }
  }
  const logoutHandler = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token").slice(1, localStorage.getItem("token").length - 1)}`,
      }
    }
    const data={}
    axios
      .post("https://monkcoder.herokuapp.com/user/logout", data, config)
      .then(res => {
        if (res.data.response.code === 200) {
          setLink('/')
          localStorage.removeItem("token")
          localStorage.removeItem("loggedIn")
          localStorage.removeItem("name")

        } 
      })
      .catch(err => {


        console.log("Logout Error", err);
      });


  }




  return (
    <AppBar position='sticky' color='primary' sx={{display:"flex",height:"50px",alignContent:"center",justifyContent:"center"}}>
      <Toolbar disableGutters>
        
        <IconButton size='large' edge='start' color='inherit' sx={{ ml: "20px" }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Areial',
              fontWeight: 700,
              letterSpacing: '.2rem',
              // color: '#355764',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: '#F9F2ED' }}>
              <FaBookReader />
              Flex Learning
            </Link>
          </Typography>
        </IconButton>
        
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {items.map((item) => (
            <div className='nav-item'>
              <Button
                key={item[0]}
                sx={{ color: 'white', display: 'block' }}
              >
                <Link to={item[1]} style={{ textDecoration: 'none', color: '#F9F2ED', fontSize: '19px' }}>
                  {item[0]}
                </Link>
              </Button>
            </div>
          ))}
        </Box>
        
        
        <Box sx={{ml:"15%"}}>
          <Tooltip title="Open">
            <IconButton onClick={onClickHandler} sx={{ mr: 20 }}>
              <MdAccountCircle size={38} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '35px' }}
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(isprofileClick)}
            onClose={onClickHandler}
          >
            {localStorage.getItem("loggedIn")==1?<Typography textAlign="center">
              <Link style={{ textDecoration: 'none', color: '#1C658C', fontSize: '16px' }} to='/' >{localStorage.getItem("name")}
            </Link></Typography>:""}
            {settings.map((setting) => (
              <MenuItem key={setting[0]} style={{ "backgroundColor": "inherit", "margin": "5px" }}>
                <Typography textAlign="center"><Link style={{ textDecoration: 'none', color: '#06283D', fontSize: '16px' }} to={setting[1]} >{setting[0]}
                </Link></Typography>
              </MenuItem>
            ))}
            <hr/>
            <MenuItem><Typography textAlign='center' ><Button onClick={authenticateHandler} sx={{ }}><Link to={link} style={{ textDecoration: 'none', fontSize: '14px', color: "#06283D" }} >{loggedIn} </Link></Button></Typography></MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );

}

export default NavBar;