import React, { Component } from 'react'
import { Form, FormGroup, FormFeedback } from 'reactstrap'
import axiosInstance from '../../axios';

 class CardCompanyDetails extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            company_name: '',
            contact_number: '',
            location: '',
            business_type: '',
            description: ''
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
        if (data.business_type === '') errors.business_type = 'Field can not be blank.';
        if (data.description === '') errors.description = 'Field can not be blank.';

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
				company_name: data.company_name,
				contact_number: data.contact_number,
				location: data.location,
                business_type: data.business_type,
                description: data.description
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
    
    render() {
        const {  data, errors } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="md:w-full px-1/2 text-center md:mb-0">
                    <p className="text-4xl font-bold py-9 capitalize">Edit Profile!</p>
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
                                            placeholder="Enter Company Name"/>
                                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.company_name}</p>
                                        </FormGroup>
                                </td>
                                

                                
                      
                            </tr>

                            <tr className="md:w-full px-1/2 text-left md:mb-0">
                         
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Contact Number<span className="text-red-500 text-base"> *</span>
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
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.contact_number}</p>
                                        </FormGroup>
                                </td>
                          

                         
                            </tr>

                            <tr className="md:w-full px-1/2 text-left md:mb-0">
                            
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Location<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                <FormGroup>
                                   
                                        <input name="location" 
                                        value={data.location} 
                                        onChange={this.changeHandler} 
                                        invalid={errors.location ? 1 : 0} 
                                        className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="location" 
                                        type="text" 
                                        placeholder="Enter Location"/>
                                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.location}</p>
                                </FormGroup>

                                </td>
                        

                            </tr>
                        
                            <tr className="md:w-full px-1/2 text-left md:mb-0">
                               
                           
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Business Type<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                <FormGroup>
                                        <input name="business_type" value={data.business_type} onChange={this.changeHandler} invalid={errors.business_type ? 1 : 0} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="business_type" type="text" placeholder="Enter Business Type"/>
                                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.business_type}</p>

                                </FormGroup>
                                </td>
                         

                            
                            </tr>

                            <tr className="md:w-full px-1/2 text-left md:mb-0">
                               
                            
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Description<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                <FormGroup>
                                        <input name="description" 
                                        value={data.description} 
                                        onChange={this.changeHandler} 
                                        invalid={errors.description ? 1 : 0} 
                                        className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="description" 
                                        type="text" 
                                        placeholder="Enter Company Description"/>
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.description}</p>
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
        )
    }

}

export default CardCompanyDetails
