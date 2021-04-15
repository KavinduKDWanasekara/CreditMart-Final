import "./ContractPage.css";

import React, { Component } from 'react'
import "./ContractPage.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Form, FormGroup, FormFeedback } from 'reactstrap'
import axiosInstance from '../axios';
import Test from "../components/Cards/Test";


class ContractPage1 extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            company_name: '',
            contact_number: '',
            location: '',
            email: '',
            zip_code: '',
            querries: ''

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

        if (data.company_name === '') errors.company_name = 'Field can not be blank.';
        if (data.contact_number === '') errors.contact_number = 'Field can not be blank.';
        else if (!/^[0-9]+$/.test(data.contact_number)) errors.contact_number = 'Invalid.';
        if (data.location === '') errors.location = 'Field can not be blank.';
        if (data.email === '') errors.email = 'Field can not be blank.';
        else if (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i.test(data.email)) errors.email = 'Invalid.';
        if (data.zip_code === '') errors.zip_code = 'Field can not be blank.';

        return errors;
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
     

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            axiosInstance
			.post(``, {
				company_name: data.company_name,
				contact_number: data.contact_number,
				location: data.location,
                email: data.email,
                zip_code: data.zip_code,
                querries: data.querries
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
                <div className="">
                <div className="border-b border-blue-500 flex items-center h-56"> 
                    <div className="md:w-4/5 px-w-4/5">
                        <table className="ml-20">
                            <tr>
                                <td className="w-1/3">                        
                                    <img  src={('static/images/prof.png')} className="rounded-full  border-white border-2 my-2 h-32 bg-gray-200"/>		
                                </td>
                                <td className="w-1/3">
                                    <p/><strong>Company Name</strong><br/>
                                    Product Type<br/>
                                    <i>Unit Price</i></td>
                                <td className="w-1/3">
                                    <input class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                                    placeholder="Quantity"
                                    />    
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class=" border-l-4 border-blue-500 flex items-center justify-center md:w-1/2 ml-10 ">
    
                        <div className="bg-gray-200 h-32 rounded-3xl w-1/2 px-5 py-3">
                            <h1 className="h-1/3 text-3xl font-bold">Summary</h1>
                            <table className=" w-full h-3/4">
                                <tr>
                                    <td><strong>TOTAL </strong></td>
                                    <td className="text-right"> Rs. 1000</td>
                                </tr>
                            </table>
                        </div>
    
                    </div>
                </div>
                
                <div className="">    
                    <Form onSubmit={this.handleSubmit} className="md:w-full px-1/2 text-center md:mb-0">
                        <p className="text-4xl font-bold py-9 capitalize">Enter Company Details To Place A Contract!</p>
                            <table className=" text-center mb-2 flex justify-center">
                                <tbody>
                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                                
                                     
                                    <td>
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Name of Company<span className="text-red-500 text-base"> *</span>
                                        </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <input name="company_name" 
                                                value={data.company_name}
                                                invalid={errors.company_name ? 1 : 0} 
                                                onChange={this.changeHandler} 
                                                className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                                id="company_name" 
                                                type="text" 
                                                placeholder="Enter Company Name"
                                            />
                                            <p className="text-red-500 text-xs font-semibold ml-4">
                                                {errors.company_name}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>
    
                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                             
                                    <td>
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                            Contact Number
                                            <span className="text-red-500 text-base"> *</span>
                                        </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                                <input name="contact_number" 
                                                value={data.contact_number}  
                                                onChange={this.changeHandler} 
                                                invalid={errors.contact_number ? 1 : 0} 
                                                className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                                id="contact_number" 
                                                type="integer" 
                                                maxLength="10"
                                                minLength="10"
                                                placeholder="Enter Contact Number"/>
                                            <p className="text-red-500 text-xs font-semibold ml-4">
                                                {errors.contact_number}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>
    
                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                                    <td>
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                            Location (Address)
                                            <span className="text-red-500 text-base"> *</span>
                                        </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <textarea name="location" 
                                            value={data.location} 
                                            onChange={this.changeHandler} 
                                            invalid={errors.location ? 1 : 0} 
                                            className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                            id="location" 
                                            type="text" 
                                            placeholder="Enter Location Details"/>
                                            <p className="text-red-500 text-xs font-semibold ml-4">
                                                {errors.location}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>
                            
                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                                    <td>
                                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                            Email Address
                                            <span className="text-red-500 text-base"> *</span>
                                        </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <input name="email" 
                                            value={data.email} 
                                            onChange={this.changeHandler} 
                                            invalid={errors.email ? 1 : 0} 
                                            className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                            id="email" 
                                            type="text" 
                                            placeholder="Enter Email Address"/>
                                            <p className="text-red-500 text-xs font-semibold ml-4">
                                                {errors.email}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>

                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                                   <td>
                                       <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                            Zip Code
                                            <span className="text-red-500 text-base"> *</span>
                                       </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                           <input name="zip_code" 
                                           value={data.zip_code} 
                                           onChange={this.changeHandler} 
                                           invalid={errors.zip_code ? 1 : 0} 
                                           className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                           id="zip_code" 
                                           type="text" 
                                           placeholder="Enter Zip Code"/>
                                           <p className="text-red-500 text-xs font-semibold ml-4">
                                               {errors.zip_code}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>
    
                                <tr className="md:w-full px-1/2 text-left md:mb-0">
                                    <td>
                                        <label htmlFor="querries" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                            Querries if any?
                                        </label>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <textarea name="querries" 
                                            value={data.querries} 
                                            onChange={this.changeHandler} 
                                            // invalid={errors.querries ? 1 : 0} 
                                            className="w-96 h-32 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                            id="querries"  
                                            placeholder="Anything?"/>
                                            <p className="text-red-500 text-xs font-semibold ml-4">
                                                {errors.querries}
                                            </p>
                                        </FormGroup>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        <div className= "md:flex my-4">
                            <div className= "md:w-full px-1/2 text-center">
                                <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
                </div>
                <Footer/>
            </div>

            // <div>

            // </div>
        )
    }
    
}

export default ContractPage1