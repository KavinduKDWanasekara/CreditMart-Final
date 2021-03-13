// import React, { Component } from 'react';
// import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
// import { isEmail } from 'validator';

// class Register extends Component {

//     constructor(props) {
//         super(props);

//         this.state = this.getInitialState();
//     }

//     getInitialState = () => ({
//         data: {
//             userName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         },
//         errors: {}
//     });

//     handleChange = (e) => {
//         this.setState({
//             data: {
//                 ...this.state.data,
//                 [e.target.name]: e.target.value
//             },
//             errors: {
//                 ...this.state.errors,
//                 [e.target.name]: ''
//             }
//         });
//     }

//     validate = () => {
//         const { data } = this.state;
//         let errors = {};

//         if (data.userName === '') errors.userName = 'User Name can not be blank.';
       
//         if (!isEmail(data.email)) errors.email = 'Email must be valid.';
//         if (data.email === '') errors.email = 'Email can not be blank.';
//         if (data.password === '') errors.password = 'Password must be valid.';
//         if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

//         return errors;
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         const { data } = this.state;

//         const errors = this.validate();

//         if (Object.keys(errors).length === 0) {
//             console.log(data);
//             //Call an api here
//             //Resetting the form
//             this.setState(this.getInitialState());
//         } else {
//             this.setState({ errors });
//         }
//     }

//     render() {
//         const { data, errors } = this.state;
//         return (
//             <section className="relative w-full h-full py-40 min-h-screen">
//  <div className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
//     style={{ 
//   backgroundImage: `url(${process.env.PUBLIC_URL + 'static/images/background1.jpg'})`,
//   // backgroundRepeat: 'no-repeat',
//   // // position:"fixed",
//   // width:'100%' 
  
// }}>

// <div className="container mx-auto px- h-full">
//         <div className="flex content-center items-center justify-center h-full">
//           <div className="w-full lg:w-6/12 px-4">
//             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
//               <div className="rounded-t mb-0 px-6 py-6">

//               <div className="text-center mb-3">
//                     <h3 className="text-gray-600 text-3xl font-bold tracking-widest ">  Sign Up
//                   </h3>
//                   </div>

//             <Form onSubmit={this.handleSubmit} className="w-72">
//                 <FormGroup>
//                 <label
//                       for="userName"
//                       className="text-gray-600 text-md tracking-wide"
//                     >
//                       Username
//               </label>
//                     <Input id="userName" value={data.userName} invalid={errors.userName ? true : false} name="userName" onChange={this.handleChange} />
//                     <FormFeedback>{errors.userName}</FormFeedback>
//                 </FormGroup>

               

//                 <FormGroup>
//                     <Label for="email" className="text-gray-600 text-md tracking-wide ">Email</Label>
//                     <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange}  />
//                     <FormFeedback>{errors.email}</FormFeedback>
//                 </FormGroup>

//                 <FormGroup>
//                     <Label for="password">Password</Label>
//                     <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
//                     <FormFeedback>{errors.password}</FormFeedback>
//                 </FormGroup>

//                 <FormGroup>
//                     <Label for="confirmPassword">Confirm Password</Label>
//                     <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange}
//                      />
//                     <FormFeedback>{errors.confirmPassword}</FormFeedback>
//                 </FormGroup>
//                 <div className="text-center ">
//                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Register</button>
//                 </div>

//             </Form>
//             </div>
//             </div>
//             </div>
//           </div>
//         </div>
      
//             </div>
//             </section>
//         );
//     }
// }

// export default Register;

