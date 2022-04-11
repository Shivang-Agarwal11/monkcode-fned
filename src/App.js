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


const App = () => {
  // const themeLight = createTheme({
  //   palette: {
  //     background: {
  //       default: "#e3f2fd"
  //     }
  //   }
  // });
  
  
  return (
    // <MuiThemeProvider theme={themeLight}>
    //   <CssBaseline/>
    <Router>
    <Routes>
      <Route path="/home" element={<Navbar/>}/>
      <Route path="/discuss" element={<Discuss/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/' element={<LoginFormContainer/>}/>
    <Route path='/signup' element={<SignUpContainer/>}/>
    <Route path='/verification' element={<Verification/>}/>
    <Route path='/resumebuilder' element={<UserForm/>}/>
    <Route path='/profile' element={<Profile/>}/>
      
      </Routes>  
    </Router>
    
  //  </MuiThemeProvider> 
   
  );
}

export default App;
