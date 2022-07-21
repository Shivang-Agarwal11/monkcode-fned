import { Box } from '@material-ui/core'
import {  Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";






const SubMenu = (props) => {
  return (
    <Box sx={{flexGrow:0}}>
    <Grid item xs={12} md={6} >
    <List component="nav"
          aria-labelledby="nested-list-subheader">
        <ListItem>
              <ListItemIcon><Button onClick={props.onClickHandler}><MdAccountCircle/></Button></ListItemIcon>
        </ListItem>
      <ListItem>
       <Link to="/profile" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #E4DCCF' }}>Profile</Link>
       </ListItem>
       <ListItem>
      <Link to="/resume" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #E4DCCF' }}>Resume Builder</Link>
      </ListItem>
      <ListItem>
      <Link to="/home" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #E4DCCF' }}>My Courses</Link>
      </ListItem>
      <ListItem>
      <Link to="/home" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #E4DCCF' }}>My Certifications</Link>
      </ListItem>
      </List>
    </Grid>
    </Box>
  )
}

export default SubMenu