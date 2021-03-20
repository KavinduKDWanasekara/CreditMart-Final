import React, { Component } from 'react'
import axiosInstance from './../axios';
import Navbar from '../components/Navbar'
import CardExplorePage from "../components/Cards/CardExplorePage";

import { MDBCol, MDBFormInline, MDBIcon, MDBBtn  } from "mdbreact";
import Footer from '../components/Footer';

class ExplorePage extends Component{

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            search: '',
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

        if (data.search === '') errors.search = 'Field can not be blank.';
        
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
            //Resetting the form
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
            <div>
            <MDBCol>
                <MDBFormInline onSubmit={this.handleSubmit} className="md-form flex justify-center">
                    <MDBIcon icon="search" />
                    <input 
                    value={data.search}
                    invalid={errors.company_name ? 1 : 0} 
                    onChange={this.changeHandler} 
                    className="form-control ml-3"
                    placeholder="Search" 
                    aria-label="Search"/>
                    <MDBBtn color="blue" type="submit" className="rounded-3xl p-2 w-24 h-9">
                        Search
                    </MDBBtn>
                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.search}</p>

                </MDBFormInline>
            </MDBCol>
            </div>
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
