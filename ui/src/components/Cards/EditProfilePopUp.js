import React, {component} from 'react';
import { Component } from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';
import { Form, FormGroup } from 'reactstrap';
import axiosInstance from '../../axios';
import Swal from 'sweetalert2'


export class EditProfilePopUp extends Component{

    constructor(props){
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
                Swal.fire({
                    icon: 'success',
                    title: 'Data saved successfully',
                    text: 'Add financial data for atleast 03 years!'
                })
                this.props.history.push('/profile');
                console.log(res);
                console.log(res.data);
                // window.location.reload();
			}).catch(err => console.log("api Erorr: ", err.response)+
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong!"
            }));
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }


    render(){
        const {  data, errors } = this.state;
        return(

            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Your Profile Details 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='Container'>
            <Row>
                <Col sm={12}>
                <Form onSubmit={this.handleSubmit} >
                    {/* <p className="text-4xl font-bold py-9 capitalize">Edit Profile!</p> */}
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
                                        <input name="business_type" 
                                        value={data.business_type} 
                                        onChange={this.changeHandler} 
                                        invalid={errors.business_type ? 1 : 0} 
                                        className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="business_type" 
                                        type="text" 
                                        placeholder="Enter Business Type"/>
                                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.business_type}</p>

                                </FormGroup>
                                </td>
                         

                            
                            </tr>

                            <tr className="md:w-full px-1/2 text-left md:mb-0">
                               
                            
                                <td>
                                    <label htmlFor="description" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Description<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                <FormGroup>
                                        <textarea name="description" 
                                        value={data.description} 
                                        onChange={this.changeHandler} 
                                        invalid={errors.description ? 1 : 0} 
                                        className="w-96 h-32 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="description"  
                                        placeholder="Enter Company Description"/>
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.description}</p>
                                </FormGroup>
                                </td>
                            
                            
                      
                            </tr>

                            
                            </tbody>
                        </table>
                    <div className= "md:flex my-4">
                        <div className= "md:w-full px-1/2 text-center">
                            <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 transform w-44 transition duration-500 hover:bg-gray-700 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none">
                                Submit
                            </button>
                            {/* <Link to="/profile">
                                <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 mx-4 transform w-44 transition duration-500 hover:bg-gray-700 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none" >
                                    Back
                                </button>
                            </Link> */}
                        </div>
                    </div>
                </Form>
                </Col>
            </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
         onClick={this.props.onHide}
         variant='danger'
        >Close
        </Button>
      </Modal.Footer>
    </Modal>

        );
    }
}