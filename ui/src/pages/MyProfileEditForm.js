import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { Link } from "react-router-dom";
import { Component } from "react";
import { Form } from "reactstrap";

class MyProfileEditForm extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      company_name:"",
      contact_number:"",
      location:"",
      business_type:"",
      description:""
    }
  }
  changeHandler = (e) => {
    this.setState ({[e.target.name]: e.target.value})
}

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
}
  
  render(){
    const {company_name,
      contact_number,
      location,
      business_type,
      description} = this.state;
    // const MyProfileEditForm = () => {
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
                // id = "cName"
                value={company_name}
                onChange={this.changeHandler}
                name = "company_name"
                type="text"
                
                
              />
              <MDBInput
                label="Your Location"
                // id = "cLocation"
                value={location}
                onChange={this.changeHandler}
                name="location"
                type="text"
                
                
              />
              <MDBInput
                label="Bussiness Type"
                // id = "business_type"
                value={business_type}
                onChange={this.changeHandler}
                name="business_type"
                type="text"
                
              />
              <MDBInput
                label="Your Mobile Number"
                // id = "contact_number"
                value={contact_number}
                onChange={this.changeHandler}
                name="contact_number"
                type="text"
                
              />
              <MDBInput
                label="Add a Description"
                // id = "description"
                value={description}
                onChange={this.changeHandler}
                name="description"
                type="text"
                
              />
              <div className="text-left">
                <h3 className="dark-grey-text mb-5">
                  <strong>Change Your Password</strong>
                </h3>
              </div>
              <MDBInput
                label="Your New Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                
                <a href="#!" className="blue-text ml-1">

                Forgot Password?
                </a>
              </p>
              <MDBInput
                label="Confirm Your New Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.submitHandler}
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