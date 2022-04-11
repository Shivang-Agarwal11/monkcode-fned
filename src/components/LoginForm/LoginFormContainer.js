import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
// import { Button } from '@material-ui/core'
// import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Navigate, NavLink } from "react-router-dom";

import './LoginForm.css'
// import { useNavigate } from 'react-router-dom';
const axios = require("axios");
// const navigate=useNavigate()
export class LoginFormContainer extends Component {
  constructor(props){
    super(props);
    
    this.state={
        user:{email:'',
        password:''
    },
    errors:'',
    loggedin:false
    };
    this.onSubmitHandle=this.onSubmitHandle.bind(this);
    this.onSubmitHandle1=this.onSubmitHandle1.bind(this);
  }
    handleChange=(input)=>e=>{
        const user=this.state.user
        user[input]=e.target.value
        this.setState(prevState=>({
            user:{...prevState.user}
        }))

    }
    onSubmitHandle1(event){
      event.preventDefault();
      this.onSubmitHandle(this.state)
    }
    onSubmitHandle(input){
      // event.preventDefault();
      // console.log(JSON.stringify(input.user))
      var params = { password: input.user.password, email: input.user.email };
      // console.log(params)
      axios
        .post("https://monkcoder.herokuapp.com/user", params)
        .then(res => {
          // console.log(res)
          if (res.data.response.code === 200) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            // navigate("/")
            localStorage.setItem("name",(res.data.user.name))
            this.setState({
              loggedin:true
            })
            // window.location.reload();
            // localStorage.token = res.data.token;
            // localStorage.isAuthenticated = true;
            // console.log(localStorage.token)
            
            // window.location.reload();
          } else {
            console.log("ERROR")
            this.setState({
              errors: { message: res.data.message }
            });
          }
        })
        .catch(err => {
          console.log("Log in Error: ", err);
        });
    }
  

    
  render() {
    // console.log(this.state)
    return (
        <div className="loginBox">
          {this.state.loggedin?<Navigate to='/verification'/>:""}
        <h1>Log in</h1>
       
  
        <form onSubmit={this.onSubmitHandle1}>
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
            <div  className="login">
       <button type='submit'>Log in</button>
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