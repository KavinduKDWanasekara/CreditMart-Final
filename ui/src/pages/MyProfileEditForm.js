import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { Link } from "react-router-dom";
import { Component } from "react";
import { Form } from "reactstrap";

class MyProfileEditForm extends Component{

  constructor(props){
    super(props);
    this.state = this.getInitialState();
}

getInitialState = () => ({
    data: {
        companyname: '',
        location: '',
        businesstype: '',
        contact: '',
        description:''
    },
    errors: {}
});


handleChange = (e) => {
  this.setState({
      data: {
          ...this.state.data,
          [e.target.name]: e.target.value
      },
      errors: {
          ...this.state.errors,
          [e.target.name]: ''
      }
  });
}

validate = () => {
  const { data } = this.state;
  let errors = {};

  if (data.companyname === '') errors.userName = 'Company Name can not be blank.';

  if (data.email === '') errors.email = 'Email can not be blank.';
  if (data.password === '') errors.password = 'Password must be valid.';
  if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

  return errors;
}

handleSubmit = (e) => {
  e.preventDefault();

  const { data } = this.state;

  const errors = this.validate();

  if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      //Resetting the form
      this.setState(this.getInitialState());
  } else {
      this.setState({ errors });
  }
}
  render(){

   
    return(
      <MDBContainer >
      <MDBRow >
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody >
              <Form  >
            
              <div className="text-left">
                <h3 className="dark-grey-text mb-5">
                  <strong>Edit Your Information</strong>
                </h3>
              </div>
              
              <MDBInput
                label="Your Company Name"
                id = "companyname"
                // invalid={errors.companyname ? true : false}
                value={this.companyname}
                onChange={this.handleChange}
                name = "companyname"
                type="text"
                
              />
              {/* <h1>{errors.companyname}</h1> */}
              <MDBInput
                label="Your Location"
                id = "location"
                value={this.location}
                onChange={this.handleChange}
                name="location"
                type="text"
                
                
              />
              <MDBInput
                label="Bussiness Type"
                id = "businesstype"
                value={this.businesstype}
                onChange={this.handleChange}
                name="businesstype"
                type="text"
                
              />
              <MDBInput
                label="Your Mobile Number"
                id = "contact"
                value={this.contact}
                onChange={this.handleChange}
                name="handleChange"
                type="text"
                
              />
              <MDBInput
                label="Add a Description"
                id = "description"
                value={this.description}
                onChange={this.handleChange}
                name="description"
                type="text"
                
              />
             
             
              
              
              <div className="text-center mb-3">
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                      onClick={this.handleSubmit}
                    >
                      Save Your Information
                    </MDBBtn>
                    <Link to= '/profile'>
                        <MDBBtn
                          type="button"
                          gradient="blue"
                          rounded
                          className="btn-block z-depth-1a"
                        >
                          Back To Profile
                        </MDBBtn>
                    </Link>
              </div>
              </Form>
            </MDBCardBody>
           
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  // }
  // return MyProfileEditForm
}
}

export default MyProfileEditForm;