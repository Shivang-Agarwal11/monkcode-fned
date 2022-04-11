import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";
import { Navigate } from "react-router-dom";
const axios = require("axios");
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const zxcvbn = require("zxcvbn");

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
        pwconfirm: ""
      },
      btnTxt: "show",
      type: "password",
      score: "0",
      toLogin:false
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (event.target.value === "") {
      this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
  }

  submitSignup(user) {
    var params = { name: user.username,  email: user.email,password: user.password };
    console.log(params)
    axios
      .post("https://monkcoder.herokuapp.com/user/create", params)
      .then(res => {
        console.log(res.data)
        if (res.data.response.code === 201) {
          // localStorage.token = res.data.token;
          // localStorage.isAuthenticated = true;
          // console.log(localStorage.token)
          this.setState({
            toLogin:true
          })
          // window.location.reload();
        } 
         else {
          console.log("ERROR")
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        var d=(JSON.parse(JSON.stringify(err)));
        this.setState({
          errors:{code:d.status}
        })
        // console.log(JSON.stringify(err));
      });
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validateSignUpForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {}
      });
      var user = {
        username: this.state.user.username,
        password: this.state.user.password,
        email: this.state.user.email
      };
      this.submitSignup(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState(state =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
      })
    );
  }

  render() {
      
    return (
      <div>
        {this.state.errors.code===400?alert('User Already Exists. Please login'):''}
        {this.state.toLogin && <Navigate to="/login" replace={true}/>}
        <SignUpForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }
}

export default SignUpContainer;