
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
// import background11 from "./imagess/background1.jpg";
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

      <section className="relative w-full h-full py-40 min-h-screen">
         {/* <img
                    alt="..."
                    src={("static/images/background1.jpg")}
                    // className="shadow-lg rounded-full mx-auto max-w-120-px"
                  /> */}
   <div className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
    style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + 'static/images/background1.jpg'})`,
  // backgroundRepeat: 'no-repeat',
  // // position:"fixed",
  // width:'100%' 
  
}}>

      {/* <div>
        <img src={background11} alt=""/>
      </div> */}
      
      <div className="container mx-auto px-1 h-full">
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
                     <div className="text-center mb-3">
                    <h3 className="text-gray-600 text-lg font-bold">                   Sign in with
                  </h3>
                  </div>
                  
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
                      className="black-text"
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

                 

                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="black-text"
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
             

                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="primary" rounded type="submit">
                        Login
          </MDBBtn>

          <div className="w-1/2 text-left text-size">
                {/* <Link to="/auth/register" className="text-gray-300"> */}
                  <small>Create new account</small>
                {/* </Link> */}
                </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    );
  }
}

export default FormsPage;

