import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';

export class Academic extends Component {

      state={
        company:{
          name:'',
          designation:'',
          country:'',
          industry:'',
          start:'',
          end:''

      },}

      handleChange=(input)=>e=>{
        let company=this.state.company

        company[input]=e.target.value

        this.setState(prevState=>({
            company:{...prevState.company}
        }))
    }
      
      render() {
        console.log(this.state)
        
        return (
         
              <div>

             <TextField 
             placeholder="Company Name"
             label="Company Name"
             onChange={this.handleChange('name')}
            //  defaultValue={this.values[0].from}
             margin="normal"
             fullWidth
           />
             <TextField 
             placeholder="Designation"
             label="Designation"
             onChange={this.handleChange('designation')}
            //  defaultValue={this.values[0].from}
             margin="normal"
             fullWidth
           />
           <br/>
           <TextField 
           placeholder="Country"
           label="Country"
           onChange={this.handleChange('country')}
          
           margin="normal"
           fullWidth
         />
         <br/>
         <TextField 
         placeholder="Industry"
         label="Industry"
         onChange={this.handleChange('industry')}
        //  defaultValue={this.state.degree}
         margin="normal"
         fullWidth
       />
       <br/>
         <TextField 
         placeholder="Start Date"
         label="Start Date"
         onChange={this.handleChange('start')}
        //  defaultValue={this.state.institute}
         margin="normal"
         fullWidth
       />
       <br/>
         <TextField 
         placeholder="End Date"
         label="End Date"
         onChange={this.handleChange('end')}
        //  defaultValue={this.state.percentage}
         margin="normal"
         fullWidth
       />
       <br/>
       <Box pt={1} textAlign='center'>
       <Button onClick={this.props.handleChange(this.state.company)} color="primary" variant='contained'>Add Work</Button>
       </Box>
</div>    
        );
      }
    
}

export default Academic;