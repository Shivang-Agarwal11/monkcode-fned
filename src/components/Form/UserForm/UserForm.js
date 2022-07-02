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
    console.log(params)
    console.log(headers.Authorization)
    axios
      .post("https://monkcoder.herokuapp.com/resume/create", params,{headers:headers})
      .then(res => {
        console.log(res.data)
        if (res.data.response.code === 201) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          console.log(localStorage.token)
          // window.location.reload();
        } else {
          console.log("ERROR")
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
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
    skills.push(input)
    this.setState(prevState => ({
      skills: [...prevState.skills],
      skillAdd: false
    }))
    this.render()
  }
  handleChangeLanguages = (input) => e => {
    let languages = this.state.languages
    languages.push(input)
    this.setState(prevState => ({
      languages: [...prevState.languages],
      langAdd: false
    }))
    this.render()
  }
  handleChangeInter = (input) => e => {
    let interests = this.state.interests
    interests.push(input)
    this.setState(prevState => ({
      interests: [...prevState.interests],
      intAdd: false
    }))
    this.render()
  }
  handleChangeCertification = (input) => e => {
    let certificates = this.state.certificates
    certificates.push(input)
    this.setState(prevState => ({
      certificates: [...prevState.certificates],
      certiAdd: false
    }))
    this.render()
  }


  handleChangeAwards = (input) => e => {
    let awards = this.state.awards
    awards.push(input)
    this.setState(prevState => ({
      awards: [...prevState.awards],
      awardAdd: false
    }))
    this.render()
  }
  handleChangeQualification = (input) => e => {

    let qualiDetails = this.state.qualiDetails
    qualiDetails.push(input)
    this.setState(prevState => ({
      qualiDetails: [...prevState.qualiDetails],
      editing: false
    }))
    this.render()
  }
  handleChangeExperience = (input) => e => {

    let company = this.state.company
    company.push(input)
    this.setState(prevState => ({
      company: [...prevState.company],
      companyAdd: false
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
                    {this.state.qualiDetails.length === 0 ? "" : <ul>{(this.state.qualiDetails).map((quali) => <li key={quali.qualification}> {quali.qualification} </li>)}</ul>}
                    {!this.state.editing && (
                    
                        <Button onClick={this.onEdit} color="primary" variant='contained'style={{"margin-top":"20px","fontWeight":"700"}}>Add Qualification</Button>
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
                    {this.state.company.length === 0 ? "" : <ul>{(this.state.company).map((comp) => <li key={comp.name}> {comp.name} </li>)}</ul>}
                    {!this.state.companyAdd && (
                      
                        <Button onClick={this.onCompAdd} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Work</Button>
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
                    {this.state.skills.length === 0 ? "" : <ul>{(this.state.skills).map((skill) => <li key={skill}> {skill} </li>)}</ul>}
                    {!this.state.skillAdd && (
                      
                        <Button onClick={this.onSkillAdd} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Skills</Button>
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
                    {this.state.awards.length === 0 ? "" : <ul>{(this.state.awards).map((award) => <li key={award.title}> {award.title} </li>)}</ul>}
                    {!this.state.awardAdd && (
                      
                        <Button onClick={this.onAwardAdd} color="primary" variant='contained'style={{"margin-top":"20px","fontWeight":"700"}}>Add Fields</Button>
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
                    {this.state.certificates.length === 0 ? "" : <ul>{(this.state.certificates).map((certificate) => <li key={certificate.title}> {certificate.title} </li>)}</ul>}
                    {!this.state.certiAdd && (
                        <Button onClick={this.onCertAdd} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Fields</Button>
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
                    {this.state.languages.length === 0 ? "" : <ul>{(this.state.languages).map((language) => <li key={language}> {language} </li>)}</ul>}
                    {!this.state.langAdd && (
                     
                        <Button onClick={this.onlangAdd} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Language</Button>
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
                    {this.state.interests.length === 0 ? "" : <ul>{(this.state.interests).map((interest) => <li key={interest}> {interest} </li>)}</ul>}
                    {!this.state.intAdd && (
                    
                        <Button onClick={this.onintAdd} color="primary" variant='contained' style={{"margin-top":"20px","fontWeight":"700"}}>Add Interest</Button>
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