import React from 'react';
import { Routes,Route } from "react-router-dom";
import { Box } from '@material-ui/core';
import  UserForm  from './components/Form/UserForm/UserForm';
import SignUpContainer from './components/SignUp/SignUpContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import Home from './components/NavBar/Home';
import Discuss from './components/Discuss/Discuss';
import Contact from './components/Contact/Contact';
import Verification from './components/Verification/Verification';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/discuss" element={<Discuss/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<LoginFormContainer/>}/>
    <Route path='/signup' element={<SignUpContainer/>}/>
    <Route path='/verification' element={<Verification/>}/>
    <Route path='/resumebuilder' element={<UserForm/>}/>
    <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Box>
   
  );
}

export default App;
