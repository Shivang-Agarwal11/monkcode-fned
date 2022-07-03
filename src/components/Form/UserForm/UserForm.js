import React, { Component } from 'react';
import Personal from '../Personal/Personal';
import Academic from '../Academic/Academic';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Awards from '../Awards/Awards';
import Certification from '../Certification/Certification';
import { Card, CardContent } from '@material-ui/core';
import AppBars from '../AppBars';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

import { Languages } from '../Languages/Languages';
import { Interests } from '../Interests/Interests';
const axios = require("axios");

export class UserForm extends Component {
  state = {
    profile: {
      name: '',
      email: '',
      address: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
      contactNo: '',
    },
    qualiDetails: [
    ],
    company: [

    ],
    skills: [

    ],
    awards: [

    ],
    certificates: [

    ],
    languages: [

    ],
    interests: [

    ],
    editing: false,
    companyAdd: false,
    skillAdd: false,
    awardAdd: false,
    certiAdd: false,
    langAdd: false,
    intAdd: false
  }

  onlangAdd = () => {
    this.setState({
      langAdd: true
    })
  }
  onintAdd = () => {
    this.setState({
      intAdd: true
    })
  }
  onEdit = () => {
    this.setState({
      editing: true
    })
  }
  onSubmitForm = (event) => {
    event.preventDefault()
    var params = {
      ...this.state.profile, educations: this.state.qualiDetails, workExperience: this.state.company, skills: this.state.skils, achievements: this.state.award,
      certificates: this.state.certificates, interests: this.state.interests, languages: this.state.languages
    }
    const headers = {
      "Access-Control-Allow-Origin" : "*",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1)}`,
    }
  
    axios
      .post("https://monkcoder.herokuapp.com/resume/create", params,{headers:headers})
      .then(res => {
        
        if (res.data.response.code === 201) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          
          // window.location.reload();
        } else {
          
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        
      });
  }


  onAwardAdd = () => {
    this.setState({
      awardAdd: true
    })
  }
  onCompAdd = () => {
    this.setState({
      companyAdd: true
    })
  }
  onSkillAdd = () => {
    this.setState({
      skillAdd: true
    })
  }
  onCertAdd = () => {
    this.setState({
      certiAdd: true
    })
  }
  handleChangeProfile = (input) => e => {

    let profile = this.state.profile

    profile[input] = e.target.value

    this.setState(prevState => ({
      profile: { ...prevState.profile }
    }))
  }

  handleChangeSkills = (input) => e => {
    let skills = this.state.skills
    if(input){
    skills.push(input)
    this.setState(prevState => ({
      skills: [...prevState.skills],
      skillAdd: false
    }))}
    else
    this.setState(prevState=>({
      skillAdd:false
    }))
    this.render()
  }
  handleChangeLanguages = (input) => e => {
    let languages = this.state.languages
    if(input){
    languages.push(input)
    this.setState(prevState => ({
      languages: [...prevState.languages],
      langAdd: false
    }))
  }
  else
  this.setState(prevState=>({
    langAdd:false
  }))
    this.render()
  }
  handleChangeInter = (input) => e => {
    let interests = this.state.interests
    if(input){
    interests.push(input)
    this.setState(prevState => ({
      interests: [...prevState.interests],
      intAdd: false
    }))
  }
  else
  this.setState(prevState=>({
    intAdd:false
  }))
    this.render()
  }
  handleChangeCertification = (input) => e => {
    let certificates = this.state.certificates
    if(Object.keys(input).length>0){
    certificates.push(input)
    this.setState(prevState => ({
      certificates: [...prevState.certificates],
      certiAdd: false
    }))
  }
  else
  this.setState(prevState=>({
    certiAdd:false
  }))
    this.render()
  }


  handleChangeAwards = (input) => e => {
    let awards = this.state.awards
    if(Object.keys(input).length>0){
    awards.push(input)
    this.setState(prevState => ({
      awards: [...prevState.awards],
      awardAdd: false
    }))}
    else
    this.setState(prevState=>({
      awardAdd:false
    }))
    this.render()
  }
  handleChangeQualification = (input) => e => {

    let qualiDetails = this.state.qualiDetails
    
    if(Object.keys(input).length>0){
      
    qualiDetails.push(input)
    this.setState(prevState => ({
      qualiDetails: [...prevState.qualiDetails],
      editing: false
    }))
  }
  else
  this.setState(prevState=>({
    editing:false
  }))
    this.render()
  }
  handleChangeExperience = (input) => e => {

    let company = this.state.company
    if(Object.keys(input).length>0){
    company.push(input)
    this.setState(prevState => ({
      company: [...prevState.company],
      companyAdd: false
    }))
  }
  else
  this.setState(prevState=>({
    companyAdd:false
  }))
    this.render()
  }

  render() {
    return ( 
        <React.Fragment>
          <Personal
            handleChange={this.handleChangeProfile}
            values={this.state.profile} />
            <Box pt={3} textAlign='center'>
            <Box ml={20} mr={20} pt={10}>
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Academic History"}/>
                    {this.state.qualiDetails.length === 0 ? "" : <p>{(this.state.qualiDetails).map((quali) => <h4 key={quali.qualification}> {quali.qualification} </h4>)}</p>}
                    {!this.state.editing && (
                    
                        <Button onClick={this.onEdit}  sx={{marginTop:"20"}} color="primary" variant='contained'style={{"fontWeight":"700"}}>Add Qualification</Button>
                      )}
                    {
                      this.state.editing && (
                        <Academic
                          handleChange={this.handleChangeQualification}></Academic>
                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Work Experience"} />
                    {this.state.company.length === 0 ? "" : <p>{(this.state.company).map((comp) => <h4 key={comp.name}> {comp.name} </h4>)}</p>}
                    {!this.state.companyAdd && (
                      
                        <Button onClick={this.onCompAdd} color="primary" variant='contained' style={{"fontWeight":"700"}}>Add Work</Button>
                      )}
                    {
                      this.state.companyAdd && (

                        <Experience
                          handleChange={this.handleChangeExperience}
                        />
                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Skills"} />
                    {this.state.skills.length === 0 ? "" : <p>{(this.state.skills).map((skill) => <h4 key={skill}> {skill} </h4>)}</p>}
                    {!this.state.skillAdd && (
                      
                        <Button onClick={this.onSkillAdd} color="primary" variant='contained' style={{"fontWeight":"700"}}>Add Skills</Button>
                      )}
                    {
                      this.state.skillAdd && (

                        <Skills
                          handleChange={this.handleChangeSkills}
                        />

                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Awards & Achievements"} />
                    {this.state.awards.length === 0 ? "" : <p>{(this.state.awards).map((award) => <h4 key={award.title}> {award.title} </h4>)}</p>}
                    {!this.state.awardAdd && (
                      
                        <Button onClick={this.onAwardAdd} color="primary" variant='contained'style={{"fontWeight":"700"}}>Add Fields</Button>
                      )}
                    {
                      this.state.awardAdd && (

                        <Awards
                          handleChange={this.handleChangeAwards}
                        />

                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={" Certification & Projects "} />
                    {this.state.certificates.length === 0 ? "" : <p>{(this.state.certificates).map((certificate) => <h4 key={certificate.title}> {certificate.title} </h4>)}</p>}
                    {!this.state.certiAdd && (
                        <Button onClick={this.onCertAdd} color="primary" variant='contained' style={{"fontWeight":"700"}}>Add Fields</Button>
                      )}
                    {
                      this.state.certiAdd && (

                        <Certification
                          handleChange={this.handleChangeCertification}
                        />


                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Languages"} />
                    {this.state.languages.length === 0 ? "" : <p>{(this.state.languages).map((language) => <h4 key={language}> {language} </h4>)}</p>}
                    {!this.state.langAdd && (
                     
                        <Button onClick={this.onlangAdd} color="primary" variant='contained' style={{"fontWeight":"700"}}>Add Language</Button>
                      )}
                    {
                      this.state.langAdd && (

                        <Languages
                          handleChange={this.handleChangeLanguages}
                        />
                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
            <Box ml={20} mr={20} pt={10}>
              
                <Card variant='elevation' elevation={6}>
                  <CardContent>
                    <AppBars values={"Interests"} />
                    {this.state.interests.length === 0 ? "" : <p>{(this.state.interests).map((interest) => <h4 key={interest}> {interest} </h4>)}</p>}
                    {!this.state.intAdd && (
                    
                        <Button onClick={this.onintAdd} color="primary" variant='contained' style={{"fontWeight":"700"}}>Add Interest</Button>
                      )}
                    {
                      this.state.intAdd && (

                        <Interests
                          handleChange={this.handleChangeInter}
                        />
                      )
                    }
                  </CardContent>
                </Card>
              
            </Box>
          
          <Button onClick={this.onSubmitForm} variant='contained' color='primary' style={{"margin":"20px","width":"400px","fontWeight":"700"}}>Submit </Button>
          </Box>
          
        </React.Fragment>
      

    )

  }
}


export default UserForm;