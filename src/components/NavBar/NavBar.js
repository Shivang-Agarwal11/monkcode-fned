import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookReader } from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import {AppBar ,Box,Toolbar,IconButton,Typography,Menu,MenuItem,Tooltip,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';


const axios = require("axios");


const NavBar = () => {

    const [isprofileClick,isprofileGettingClicked]=useState(false);
    const [link,setLink]=useState('/')
    const onClickHandler=()=>{
        isprofileGettingClicked(isprofileClick===true?false:true)
    }
    var loggedIn=localStorage.getItem("loggedIn")===1?"Logout":"Sign In/Login"
    const items=[
      ['Home','/'],
      ['Discuss','/discuss'],
      ['Contact','/contact']
    ]

    const authenticateHandler=()=>{
      var val=localStorage.getItem("loggedIn");
      if(val===1){
        logoutHandler();
      }
      else{
       setLink('/login')
      }
    }

    const logoutHandler=()=>{
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1)}`,
        }
    }
    const data = {}
    localStorage.setItem("loggedout", true);
    axios
        .post("https://monkcoder.herokuapp.com/user/logout", data, config)
        .then(res => {
            if (res.data.response.code === 200) {
                setLink('/')
                localStorage.removeItem("token")
                localStorage.removeItem("loggedIn")

            } else {
                console.log("ERROR")
                localStorage.setItem("name", "Logout")
            }
        })
        .catch(err => {
           

            console.log("Logout Error", err);
            localStorage.setItem("name", "Logout")
        });


    }



    const settings=[
      ['Profile','/profile'],
      ['Resume Builer','/resumebuilder'],
      ['My Courses','/'],
      ['My Certification','/'],
      
    ]

    return (
        <AppBar position='sticky'>
            <Toolbar disableGutters>
              <IconButton size='large' edge='start' color='inherit' sx={{ml:"20px"}}>
            <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Areial',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none',color: '#CDD2C6'}}>
            <FaBookReader />
            Flex Learning
    </Link>
          </Typography>
    </IconButton>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              open={Boolean(isprofileClick)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {items.map((item) => (
                <MenuItem key={item[0]}>
                  <Typography textAlign="center">{item[0]}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Flex Learning
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {items.map((item) => (
              <Button
                key={item[0]}
                sx={{color: 'white', display: 'block' }}
              >
                <Link to={item[1]}  style={{ textDecoration: 'none',color: '#CDD2C6',fontSize:'19px' }}>
                {item[0]}
                </Link>
              </Button>
            ))}
          </Box>
          <Box >
            <Tooltip title="Open">
              <IconButton onClick={onClickHandler} sx={{mr:20}}>
                <MdAccountCircle size={38}/>
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
              {settings.map((setting) => (
                <MenuItem key={setting[0]} style={{"backgroundColor":"#1C658C","margin":"5px"}}>
                  <Typography textAlign="center"><Link style={{ textDecoration: 'none', color: '#F2FCFC',fontSize:'16px' }} to={setting[1]} >{setting[0]}
                  </Link></Typography>
                </MenuItem>
              ))}
              <MenuItem><Typography textAlign='center' ><Button onClick={authenticateHandler} sx={{color:"#2C3639", backgroundColor:"#F2FCFC"}}><Link to={link} style={{ textDecoration: 'none',fontSize:'14px',color:"#1C658C" }} >{loggedIn} </Link></Button></Typography></MenuItem>
            </Menu>
          </Box>
    </Toolbar>
    </AppBar>
);

    }

export default NavBar;