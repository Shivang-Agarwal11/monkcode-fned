import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';

export class Academic extends Component {

      state={
        qualiDetails:{
        qualification:'Under Graduation',
        from:'',
        to:'',
        degree:'',
        institute:'',
        percentage:'',
      },}

      handleChange=(input)=>e=>{
        let qualiDetails=this.state.qualiDetails

        qualiDetails[input]=e.target.value

        this.setState(prevState=>({
            qualiDetails:{...prevState.qualiDetails}
        }))
    }
      
      render() {
        console.log(this.state)
        
        return (
         
              <div>
              <label>
              Qualification
              <select value={this.state.qualiDetails.qualification} onChange={this.handleChange('qualification')}>
                
              <option value="Under Graduation">Under Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="Graduation">Graduation</option>
              <option value=" Intermediate"> Intermediate (12th) </option>
              </select>
            </label>
             <TextField 
             placeholder="From (Year)"
             label="From (Year)"
             onChange={this.handleChange('from')}
            //  defaultValue={this.values[0].from}
             margin="normal"
             fullWidth
           />
           <br/>
           <TextField 
           placeholder="To (Year)"
           label="To (Year)"
           onChange={this.handleChange('to')}
          
           margin="normal"
           fullWidth
         />
         <br/>
         <TextField 
         placeholder="Degree"
         label="Degree"
         onChange={this.handleChange('degree')}
        //  defaultValue={this.state.degree}
         margin="normal"
         fullWidth
       />
       <br/>
         <TextField 
         placeholder="Institute"
         label="Institute"
         onChange={this.handleChange('institute')}
        //  defaultValue={this.state.institute}
         margin="normal"
         fullWidth
       />
       <br/>
         <TextField 
         placeholder="Percentage"
         label="Percentage"
         onChange={this.handleChange('percentage')}
        //  defaultValue={this.state.percentage}
         margin="normal"
         fullWidth
       />
       <br/>
       <Box pt={1} textAlign='center'>
       <Button onClick={this.props.handleChange(this.state.qualiDetails)} color="primary" variant='contained'>Add Details</Button>
       </Box>
</div>    
        );
      }
    
}

export default Academic;