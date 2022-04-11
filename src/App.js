import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import  UserForm  from './components/Form/UserForm/UserForm';



import SignUpContainer from './components/SignUp/SignUpContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import Navbar from './components/NavBar/NavBar';
import Discuss from './components/Discuss/Discuss';
import Contact from './components/Contact/Contact';

import Verification from './components/Verification/Verification';
import Profile from './components/Profile/Profile';
import Landing from './components/Landing/Landing';


const App = () => {
  
  
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Navbar/>}/>
      <Route path="/discuss" element={<Discuss/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<LoginFormContainer/>}/>
    <Route path='/signup' element={<SignUpContainer/>}/>
    <Route path='/verification' element={<Verification/>}/>
    <Route path='/resumebuilder' element={<UserForm/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/' element={<Landing/>}/>
      
      </Routes>  
    </Router>
    
  //  </MuiThemeProvider> 
   
  );
}

export default App;
