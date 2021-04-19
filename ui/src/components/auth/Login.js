  
import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import axiosInstance from '../../axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            username: '',
            password: '',
         
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

        if (data.password === '') errors.password = 'Password must be valid.';


        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log("sent data intial : ",data)
            axiosInstance
			.post(`auth/`, {
				username: data.username,
				password: data.password
			})
			.then((res) => {
                
				localStorage.setItem('token', res.data.token);
				axiosInstance.defaults.headers['Authorization'] =
					'Token ' + localStorage.getItem('token');
                this.props.history.push('/dashboard');
				console.log(res);
				console.log(res.data);
			})
           
            .catch((error) => {
                console.log("api Erorr: ", error.response);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: error.request.response,
                  footer: '<a>Login </a>'
                });
                if (error.request.status == 400) {
                  this.props.history.push('/login')
                }
              });
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
                <div className="absolute top-0 w-full h-full bg-blue-500 bg-no-repeat bg-full"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + 'static/images/background1.jpg'})`,
                    }}>
                        
                  
                        <Link to="/"><button className= "md:w-48 bg-blue-700 text-white font-bold  mx-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-16 w-16" >
                            Home<i className="fas fa-home"></i>
                            </button></Link> 
                    <div className="bg-grey-lighter min-h-screen flex flex-col">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                                    <Form onSubmit={this.handleSubmit} className="w-72">
                                        <FormGroup>
                                            <label
                                                htmlFor="username"
                                                className="text-gray-600 text-md tracking-wide"
                                                >
                                                Username
                                            </label>
                                            <Input id="username" 
                                                value={data.username} 
                                                invalid={errors.username ? true : false} 
                                                name="username" 
                                                onChange={this.handleChange} 
                                            />
                                            <FormFeedback>
                                                {errors.username}
                                            </FormFeedback>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Label 
                                                htmlFor="password">
                                                Password
                                            </Label>
                                            <Input id="password" 
                                                value={data.password} 
                                                type="password" 
                                                name="password" 
                                                invalid={errors.password ? true : false} 
                                                onChange={this.handleChange} 
                                            />
                                            <FormFeedback>
                                                {errors.password}
                                            </FormFeedback>
                                        </FormGroup>
                                        <div className="text-center ">
                                            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Sign In</button>
                                        </div>
                                        <a href="/register" className="... md:no-underline md:hover:underline ...">Don’t have an account?
                                            Sign up</a>	
                                    </Form>
                            </div>
                        </div>
                    </div>
                </div>

           
            </section>
        );
    }
}

export default Login;