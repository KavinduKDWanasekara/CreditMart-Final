import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
// import { Auth } from "aws-amplify";

class FormsPage extends React.Component {
  state = {
    fname: "",
    // lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    // zip: ""
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
      <h6 className="text-gray-600 text-sm font-bold">                 Sign up with
                  </h6>
   
                  <div className="btn-wrapper text-center">               
               <button
                 className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                 type="button"
               >
                 {/* <img
                   alt="..."
                   className="w-5 mr-1"
                   src={require("assets/img/google.svg")}
                 /> */}
                 Google
               </button>
             </div>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Username
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Username"
                required
              />
              <div className="valid-feedback">Looks good!</div>         
            
              {/* <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div> */}
        
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
       
        
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Password
              </label>
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
              {/* <div className="invalid-feedback">
                Please provide a valid city.
              </div>               */}
              {/* <div className="valid-feedback">Looks good!</div>          */}
            
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
               Confirm Password
              </label>
              <input
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              {/* <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div> */}
         
              {/* <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Zip
              </label>
              <input
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              /> */}
              {/* <div className="invalid-feedback">
                Please provide a valid zip.
              </div> */}
              {/* <div className="valid-feedback"></div> */}
         
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
            <div className="text-center py-4 mt-3">
          <MDBBtn color="primary" rounded type="submit">
            Submit 
          </MDBBtn>
          </div>
        </form>     
      </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsPage;