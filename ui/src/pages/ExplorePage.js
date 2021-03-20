import React, { Component } from 'react'
import axiosInstance from './../axios';
import Navbar from '../components/Navbar'
import CardExplorePage from "../components/Cards/CardExplorePage";

import Footer from '../components/Footer';
import { Form, FormGroup } from 'reactstrap';

class ExplorePage extends Component{
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            search: ""
        },
        errors: {},
    });

    changeHandler = (e) => {
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

        if (data.search === '') errors.search = 'Please enter company name to search.';
        
        return errors;
    }

    handleSubmit = (e) => {
       
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            axiosInstance
			.post(`api/profile`, {
				search: data.search
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
            // Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

render(){
    const {  data, errors } = this.state;
    return (
        <div>
            <Navbar/>
            <Form onSubmit={this.handleSubmit} className="md-form flex justify-center">
                <FormGroup>
                    <div className="text-center flex justify-center">
                       
                       <input 
                            value={data.search}
                            invalid={errors.company_name ? 1 : 0} 
                            onChange={this.changeHandler} 
                            className=" w-80 form-control ml-3 px-10" 
                            name="search"
                            type="text" 
                            placeholder="Search"/>
                            
                        <div className="p-4">
                            <button className="bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none w-11 h-11 flex items-center justify-center"
                            type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </FormGroup>
            </Form>
                <p className="text-red-500 text-xs font-semibold flex justify-center -ml-44">
                    {errors.search}
                </p>



            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>
                <CardExplorePage/>

                </div>
        </div>
        <Footer/>
        </div>
    )
}
}

export default ExplorePage
