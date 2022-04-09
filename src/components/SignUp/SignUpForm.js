import React from "react";
import { Button } from "@material-ui/core";

import { TextField } from "@material-ui/core";
import PasswordStr from "./PasswordStr";
import "./style.css";
import { NavLink } from "react-router-dom";

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
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
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
          />
          <br/>
        
        <TextField
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
        <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Aleady have an account? <br/>
        <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUpForm;

