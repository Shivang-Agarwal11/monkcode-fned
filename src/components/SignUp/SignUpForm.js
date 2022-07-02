import React from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@mui/material";
import { TextField } from "@material-ui/core";
import PasswordStr from "./PasswordStr";
import "./style.css";
// import "../LoginForm/LoginForm.css"
import {Link } from "react-router-dom";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="signUpBox">
      <h1 style={{"margin-bottom":"10px"}}>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <FormControl>
        <TextField
          name="username"
          label="user name"
          value={user.username}
          onChange={onChange}
          error={errors.username}
        />
      <br/>
        <TextField
          name="email"
          label="email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          variant="standard"
          />
          <br/>
        
        <TextField
        variant="standard"
          type={type}
          name="password"
          label="password"
          value={user.password}
          onChange={onPwChange}
          error={errors.password}
          />
          <br/>
          
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              >{btnTxt}</Button>
            </div>
            )} 
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          label="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          error={errors.pwconfirm}
        />
        
        <div  className="signUpSubmit">
        <Button variant='contained' color='primary' type='submit' onClick={onSubmit}>Submit</Button>
        </div>
        </FormControl>
      <p style={{"margin":"10px"}}>
        Aleady have an account?
      </p>
        <Link to="/login" style={{ textDecoration: 'none',fontSize:'19px', color:"#2C3639",width:"150px",marginLeft:"240px"}}>Login</Link>
    </div>
  );
};

export default SignUpForm;

