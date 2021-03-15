
  
import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import axiosInstance from '../../axios';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
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

        if (data.username === '') errors.username = 'User Name can not be blank.';
       
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
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
            axiosInstance
			.post(`api/users/`, {
				username: data.username,
				email: data.email,
				password: data.password
			})
			.then((res) => {
				this.props.history.push('/login');
				console.log(res);
				console.log(res.data);
			}).catch(err => console.log("api Erorr: ", err.response )+alert(err.request.response));
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <section className="relative w-full h-full py-40 min-h-screen">
 <div className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
    style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + 'static/images/background1.jpg'})`,
  // backgroundRepeat: 'no-repeat',
  // // position:"fixed",
  // width:'100%' 
  
}}>
<div className="bg-grey-lighter min-h-screen flex flex-col">
<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <Form onSubmit={this.handleSubmit} className="w-72">
                <FormGroup>
                <label
                      htmlFor="username"
                      className="text-gray-600 text-md tracking-wide"
                    >
                      Username
              </label>
                    <Input id="username" value={data.username} invalid={errors.username ? true : false} name="username" onChange={this.handleChange} />
                    <FormFeedback>{errors.username}</FormFeedback>
                </FormGroup>

               

                <FormGroup>
                    <Label htmlFor="email" className="text-gray-600 text-md tracking-wide ">Email</Label>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange}  />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange}
                     />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
                <div className="text-center ">
                <button className="  text-center py-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Register</button>
                </div>

            </Form>
            </div>
            </div>
            </div>
           </div>
            </section>
        );
    }
}

export default Register;
