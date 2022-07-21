import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Navigate, Link } from "react-router-dom";
import { FormControl} from '@material-ui/core';
import './LoginForm.css'
const axios = require("axios");
export class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: '',
      loggedin: false
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onSubmitHandle1 = this.onSubmitHandle1.bind(this);
  }
  handleChange = (input) => e => {
    const user = this.state.user
    user[input] = e.target.value
    this.setState(prevState => ({
      user: { ...prevState.user }
    }))

  }
  onSubmitHandle1(event) {
    event.preventDefault();
    this.onSubmitHandle(this.state)
  }
  onSubmitHandle(input) {
    // event.preventDefault();
    localStorage.removeItem("token")
    var params = { password: input.user.password, email: input.user.email };
    console.log(params)
    
    axios
      .post("https://monkcoder.herokuapp.com/user", params)
      .then(res => {
        // console.log(res)
        if (res.data.response.code === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("loggedIn",1);
          localStorage.setItem("name", (res.data.user.name))
          this.setState({
            loggedin: true
          })

        } else {
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        var d = (JSON.parse(JSON.stringify(err)));
        this.setState({
          errors: { code: d.status }
        })
      });
  }



  render() {
    return (
      
      <div className="loginBox">
        {this.state.errors.code===404 && alert('User Not Registered. Please login')}
        {this.state.errors.code===403 && alert('Wrong Password')}
        {this.state.loggedin && <Navigate to='/verification' /> }
        {this.state.errors.code===403 && (this.setState({
          errors:{}
        }))}
        {this.state.errors.code===404 && (this.setState({
          errors:{}
        }))}
        <h1 style={{"margin-bottom":"10px"}}>Log in</h1>
        <FormControl>
        
          <TextField
          variant="standard"
            type='email'
            name="email"
            label="Email ID"
            value={this.state.user.email}
            onChange={this.handleChange('email')}
            sx={{my:10}}
            className="textfield"
          />
          
          <br />
          <TextField
          variant="standard"
            type='password'
            name="password"
            label="Password"
            value={this.state.user.password}
            onChange={this.handleChange('password')}
            sx={{my:10}}
            className="textfield"
          />
          <br />
            <Button variant='contained' color='primary' type='submit' onClick={this.onSubmitHandle1}>Login</Button>
        </FormControl>
        {/* </form> */}
        <p style={{"margin":"10px"}}>New User?</p>

       <Button><Link to="/signup" style={{ textDecoration: 'none',fontSize:'15px', color:"#2C3639"}}>Register Here</Link>
       </Button>
      </div>
       
    )
  }
}

export default LoginFormContainer