import { data } from 'autoprefixer';
import React, { Component } from 'react'
import { Form, FormGroup, FormFeedback } from 'reactstrap'
import axiosInstance from '../../axios';


export class CardCompanyDetails extends Component {
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
        errors: {}
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

        if (data.company_name === '') errors.company_name = 'User Name can not be blank.';
        if (data.contact_number === '') errors.email = 'Contact Number can not be blank.';
        if (data.location === '') errors.password = 'Location can not be blank.';
        if (data.business_type === '') errors.password = 'Business Type should be specified.';
        if (data.description === '') errors.password = 'Description is needed.';

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
            <div>
                <Form onSubmit={this.handleSubmit} className="md:w-full px-1/2 text-center md:mb-0">
                    <p className="text-4xl font-bold py-9 capitalize">Edit Profile!</p>
                    <div className=" mb-2 flex justify-center">
                        <table className=" text-center">
                            <tr>
                            <FormGroup>
                                <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Name of Company<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="company_name" value={data.company_name}  onChange={this.changeHandler} invalid={errors.company_name ? true : false} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="Enter Company Name"/>
                                    </div>
                                </td>
                                </div>
                                <FormFeedback>{errors.company_name}</FormFeedback>
                            </FormGroup>
                            </tr>

                            <tr>
                            <FormGroup>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Contact Number<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="contact_number" value={data.contact_number}  onChange={this.changeHandler} invalid={errors.contact_number ? true : false} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="Enter Contact Number"/>
                                    </div>
                                </td>
                            </div>
                            <FormFeedback>{errors.contact_number}</FormFeedback>

                            </FormGroup>
                            </tr>

                            <tr>
                            <FormGroup>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Location<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="location" value={data.location} onChange={this.changeHandler} invalid={errors.location ? true : false} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="Enter Location"/>
                                    </div>
                                </td>
                            </div>
                            <FormFeedback>{errors.location}</FormFeedback>

                            </FormGroup>
                            </tr>
                        
                            <tr>
                                <FormGroup>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Business Type<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="business_type" value={data.business_type} onChange={this.changeHandler} invalid={errors.business_type ? true : false} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="Enter Business Type"/>
                                    </div>
                                </td>
                            </div>
                            <FormFeedback>{errors.business_type}</FormFeedback>

                            </FormGroup>
                            </tr>

                            <tr>
                                <FormGroup>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Description<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="description" value={data.description} onChange={this.changeHandler} invalid={errors.description ? true : false} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="Enter Company Description"/>
                                    </div>
                                </td>
                            </div>
                            <FormFeedback>{errors.description}</FormFeedback>
                            </FormGroup>
                            </tr>
                        </table>
                    </div>
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
