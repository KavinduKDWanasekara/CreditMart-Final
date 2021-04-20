

import React, { Component } from 'react'
import { Form, Input,  FormGroup } from 'reactstrap';

import axiosInstance from '../../axios';

import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar"
import Swal from 'sweetalert2'




export class ProfileAddInfo extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        

        
    }

    getInitialState = () => ({
        data: {
            financial_year:'',
            total_assets:'',
            profit_on_sales:'',
            interest_expenses:'',
            ebitda:'',
            ebit:'',
            cost_of_products_sold:'',
            sales:'',
            depreciation:'',
            profit_on_operating_activities:'',
            extraordinary_items:'',
            total_expenses:'',
            short_term_liabilities:'',
            total_liabilities:'',
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
        const { data, } = this.state;
        let errors = {};

        if (data.financial_year === '') errors.financial_year = 'This field can not be blank.';
        else if (!/^[0-9]+$/.test(data.financial_year)) errors.financial_year="This field should be number";
        
        if (data.total_assets === '') errors.total_assets = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.total_assets)) errors.total_assets="This field should be number";
        
        if (data.profit_on_sales === '') errors.profit_on_sales = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.profit_on_sales)) errors.profit_on_sales="This field should be number";
        
        if (data.interest_expenses === '') errors.interest_expenses = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.interest_expenses)) errors.interest_expenses="This field should be number";

        if (data.ebitda === '') errors.ebitda = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.ebitda)) errors.ebitda="This field should be number";
        
        if (data.ebit === '') errors.ebit = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.ebit)) errors.ebit="This field should be number";
        
        if (data.cost_of_products_sold === '') errors.cost_of_products_sold = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.cost_of_products_sold)) errors.cost_of_products_sold="This field should be number";


        if (data.sales === '') errors.sales = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.sales)) errors.sales="This field should be number";

        if (data.depreciation === '') errors.depreciation = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.depreciation)) errors.depreciation="This field should be number";


        if (data.profit_on_operating_activities === '') errors.profit_on_operating_activities = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.profit_on_operating_activities)) errors.profit_on_operating_activities="This field should be number";

        if (data.extraordinary_items === '') errors.extraordinary_items = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.extraordinary_items)) errors.extraordinary_items="This field should be number";

        if (data.total_expenses === '') errors.total_expenses = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.total_expenses)) errors.total_expenses="This field should be number";

        if (data.short_term_liabilities === '') errors.short_term_liabilities = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.short_term_liabilities)) errors.short_term_liabilities="This field should be number";
      
        if (data.total_liabilities === '') errors.total_liabilities = 'This field can not be blank.';
        else if (!/^[0-9.-]+$/.test(data.total_liabilities)) errors.total_liabilities="This field should be number";

        return errors;
    }

   
    handleSubmit = (e) => {
        e.preventDefault();
     

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            axiosInstance
			.post(`api/fdetails`, {
				financial_year: data.financial_year,
				total_assets: data.total_assets,
				profit_on_sales: data.profit_on_sales,
				interest_expenses: data.interest_expenses,
				ebitda: data.ebitda,
                ebit:data.ebit,
                cost_of_products_sold: data.cost_of_products_sold,
				sales: data.sales,
                depreciation: data.depreciation,
				profit_on_operating_activities: data.profit_on_operating_activities,
				extraordinary_items: data.extraordinary_items,
                total_expenses: data.total_expenses,
				short_term_liabilities: data.short_term_liabilities,
                total_liabilities: data.total_liabilities,
			})
			.then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Data saved successfully',
                })
                this.props.history.push('/dashboard');
				console.log(res);
				console.log(res.data);
               
			}).catch(err => console.log("api Erorr: ", err.response)+
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong!"
            }));

        } else {
            this.setState({ errors });
        }
    }
    render() {
        const { data, errors } = this.state;
        return (

            <>
            <Navbar/>

            <div>
                

                <Form onSubmit={this.handleSubmit} className="md:w-full px-1/2 text-center  md:mb-0 ">
                <p className="text-4xl font-bold py-9 capitalize">
                    Enter Financial Data
                </p>
                <table className=" text-center mb-2 flex justify-center">
                    <tbody> 
                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="financial_year" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                financial year of Statement<span className="text-red-500 text-base"> *</span>
                                </label>

                            </td>
                            <td>
                                <FormGroup>
                                <Input id="financial_year" 
                                    value={data.financial_year} 
                                    invalid={errors.financial_year ? true : false} 
                                    name="financial_year" 
                                    maxLength="4"
                                    minLength="4"
                                    onChange={this.handleChange} 
                                    placeholder="20XX"
                                    type="integer" 
                                    className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.financial_year}</p>                                                       
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor=" total_assets" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                total assets<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="total_assets" 
                                        value={data.total_assets} 
                                        invalid={errors.total_assets ? true : false} 
                                        name="total_assets" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_assets}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="profit_on_sales" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                profit on sales<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="profit_on_sales" 
                                        value={data.profit_on_sales} 
                                        invalid={errors.profit_on_sales ? true : false} 
                                        name="profit_on_sales" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.profit_on_sales}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>
          
                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="interest_expenses" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                interest expenses<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="interest_expenses" 
                                        value={data.interest_expenses} 
                                        invalid={errors.interest_expenses ? true : false} 
                                        name="interest_expenses" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.interest_expenses}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="ebitda" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                ebitda<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="ebitda" 
                                        value={data.ebitda} 
                                        invalid={errors.ebitda ? true : false} 
                                        name="ebitda" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.ebitda}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="ebit" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                ebit<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="ebit" 
                                        value={data.ebit} 
                                        invalid={errors.ebit ? true : false} 
                                        name="ebit" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.ebit}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="cost_of_products_sold" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                cost of products sold<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="cost_of_products_sold" 
                                        value={data.cost_of_products_sold} 
                                        invalid={errors.cost_of_products_sold ? true : false} 
                                        name="cost_of_products_sold" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.cost_of_products_sold}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="sales" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                sales<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="sales" 
                                        value={data.sales} 
                                        invalid={errors.sales ? true : false} 
                                        name="sales" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.sales}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="depreciation" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                depreciation<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="depreciation" 
                                        value={data.depreciation} 
                                        invalid={errors.depreciation ? true : false} 
                                        name="depreciation" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.depreciation}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="profit_on_operating_activities" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                profit on operating activities<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="profit_on_operating_activities" 
                                        value={data.profit_on_operating_activities} 
                                        invalid={errors.profit_on_operating_activities ? true : false} 
                                        name="profit_on_operating_activities" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.profit_on_operating_activities}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="extraordinary_items" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                extraordinary items<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="extraordinary_items" 
                                        value={data.extraordinary_items} 
                                        invalid={errors.saextraordinary_itemsles ? true : false} 
                                        name="extraordinary_items" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.extraordinary_items}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="total_expenses" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                total expenses<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="total_expenses" 
                                        value={data.total_expenses} 
                                        invalid={errors.total_expenses ? true : false} 
                                        name="total_expenses" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_expenses}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="short_term_liabilities" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                short term liabilities<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="short_term_liabilities" 
                                        value={data.short_term_liabilities} 
                                        invalid={errors.short_term_liabilities ? true : false} 
                                        name="short_term_liabilities" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.short_term_liabilities}</p>                                   
                                </FormGroup>
                            </td>
                        </tr>

                        <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                            <td>
                                <label htmlFor="total_liabilities" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                total liabilities<span className="text-red-500 text-base"> *</span>
                                </label>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input id="total_liabilities" 
                                        value={data.total_liabilities} 
                                        invalid={errors.total_liabilities ? true : false} 
                                        name="total_liabilities" 
                                        onChange={this.handleChange} 
                                        placeholder="RS XXXX.XX"
                                        type="double" 
                                        // minLength="4"
                                        className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                                    />
                                    <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_liabilities}</p>                                   
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
                            <Link to="/profile">
                                <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 mx-4 transform w-44 transition duration-500 hover:bg-gray-700 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none" >
                            Back
                            </button></Link>
                        </div>
                    </div>
                </Form>
            </div>
            </>
        )
    }
}

export default ProfileAddInfo


