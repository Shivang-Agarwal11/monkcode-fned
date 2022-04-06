import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
// import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
export class LoginFormContainer extends Component {
    state={
        user:{email:'',
        password:''
    }
    }
    handleChange=(input)=>e=>{
        const user=this.state.user
        user[input]=e.target.value
        this.setState(prevState=>({
            user:{...prevState.user}
        }))

    }
    onSubmit(event){
        event.preventDefault();
    }
  render() {
    return (
        <div className="loginBox">
        <h1>Log in</h1>
       
  
        <form onSubmit={this.onSubmit}>
          <TextField
            name="email"
            label="email"
            value={this.state.user.email}
            onChange={this.handleChange('email')}
            // error={errors.email}
            />
            <br/>
          
          <TextField
            type='password'
            name="password"
            label="password"
            value={this.state.user.password}
            onChange={this.handleChange('password')}
            // error={errors.password}
            />
            <br/>
            <div  className="signUpSubmit">
        <Button
         
          color='primary'
          variant='contained'
          type="submit"
          label="submit"
        >Submit</Button>
        </div>
            </form>
        {/* <Router>
          <Routes> */}
           <p>New User?</p>
           <NavLink to="/signup" className="navbar">Register Here</NavLink>
        
            </div>
    )
  }
}

export default LoginFormContainer