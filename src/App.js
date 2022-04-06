import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import  UserForm  from './components/Form/UserForm/UserForm';



import SignUpContainer from './components/SignUp/SignUpContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import Navbar from './components/NavBar/NavBar';


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
      <Route path="/" element={<Navbar/>}/>
      <Route path='/login' element={<LoginFormContainer/>}/>
    <Route path='/signup' element={<SignUpContainer/>}/>
    <Route path='/resumebuilder' element={<UserForm/>}/>
      
      </Routes>  
    </Router>
    
  //  </MuiThemeProvider> 
   
  );
}

export default App;
