
import { data } from 'autoprefixer';
import React, { Component } from 'react'
import { Form, Input, Label, FormGroup, Feedback, FormFeedback, Button } from 'reactstrap';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
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
            current_assets:'',
            current_liabilities:'',
            working_capital:'',
            total_assets:'',
            cash_equivalents:'',
            net_income:'',
            net_credit_sales:'',
            accounts_receivables:'',
            total_debt:'',
            total_shareholders_equity:'',
            interest_expenses:'',
            total_liabilities:'',
            long_term_debt:'',
            ebit:''
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
        // if (typeof (data.financial_year === String)) errors.financial_year="This field should be number";
        if (data.current_assets === '') errors.current_assets = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.current_assets)) errors.current_assets="This field should be number";

        if (data.current_liabilities === '') errors.current_liabilities = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.current_liabilities)) errors.current_liabilities="This field should be number";

        if (data.working_capital === '') errors.working_capital = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.working_capital)) errors.working_capital="This field should be number";

        if (data.total_assets === '') errors.total_assets = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.total_assets)) errors.total_assets="This field should be number";

        if (data.cash_equivalents === '') errors.cash_equivalents = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.cash_equivalents)) errors.cash_equivalents="This field should be number";

        if (data.net_income === '') errors.net_income = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.net_income)) errors.net_income="This field should be number";


        if (data.net_credit_sales === '') errors.net_credit_sales = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.net_credit_sales)) errors.net_credit_sales="This field should be number";

        if (data.accounts_receivables === '') errors.accounts_receivables = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.accounts_receivables)) errors.accounts_receivables="This field should be number";

        if (data.total_debt === '') errors.total_debt = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.total_debt)) errors.total_debt="This field should be number";

        if (data.total_shareholders_equity === '') errors.total_shareholders_equity = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.total_shareholders_equity)) errors.total_shareholders_equity="This field should be number";

        if (data.interest_expenses === '') errors.interest_expenses = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.interest_expenses)) errors.interest_expenses="This field should be number";

        
        if (data.total_liabilities === '') errors.total_liabilities = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.total_liabilities)) errors.total_liabilities="This field should be number";

        if (data.long_term_debt === '') errors.long_term_debt = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.long_term_debt)) errors.long_term_debt="This field should be number";

        if (data.ebit === '') errors.ebit = 'This field can not be blank.';
        else if (!/^[0-9.]+$/.test(data.ebit)) errors.ebit="This field should be number";
        

        return errors;
    }
    // changeHandler = (e) => {
    //     this.setState ({[e.target.name]: e.target.value})
    // }

   
    handleSubmit = (e) => {
        e.preventDefault();
     

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            axiosInstance
			.post(`api/fdetails`, {
				financial_year: data.financial_year,
				current_assets: data.current_assets,
				current_liabilities: data.current_liabilities,
                working_capital: data.working_capital,
				total_assets: data.total_assets,
				cash_equivalents: data.cash_equivalents,
                net_income: data.net_income,
				net_credit_sales: data.net_credit_sales,
				accounts_receivables: data.accounts_receivables,
                total_debt: data.total_debt,
				total_shareholders_equity: data.total_shareholders_equity,
				interest_expenses: data.interest_expenses,
                total_liabilities: data.total_liabilities,
                long_term_debt: data.long_term_debt,
                ebit:data.ebit
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
            // this.setState(this.getInitialState());

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
                  
                        <label htmlFor="current_assets" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        Current assets<span className="text-red-500 text-base"> *</span>
                        </label>
                        </td>
                        <td>
                        <FormGroup>
                        <Input id="current_assets" 
                            value={data.current_assets} 
                            invalid={errors.current_assets ? true : false} 
                            name="current_assets" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"  />
                          <p className="text-red-500 text-xs font-semibold ml-4">{errors.current_assets}</p> 
                    </FormGroup>
                    </td>
                    </tr>
                   
                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>                   
                        <label htmlFor="current_liabilities" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        current liabilities<span className="text-red-500 text-base"> *</span>
                        </label>
</td>
<td>
                        <FormGroup>
                        <Input id="current_liabilities" 
                            value={data.current_liabilities} 
                            invalid={errors.current_liabilities ? true : false} 
                            name="current_liabilities" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                         <p className="text-red-500 text-xs font-semibold ml-4">{errors.current_assets}</p> 
                                                    
                    </FormGroup>

</td>
</tr>

<tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                        <label htmlFor="working_capital" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                         working capital<span className="text-red-500 text-base"> *</span>
                        </label>
                        </td>
                        <td>
                        <FormGroup>
                        <Input id="working_capital" 
                            value={data.working_capital} 
                            invalid={errors.working_capital ? true : false} 
                            name="working_capital" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                     <p className="text-red-500 text-xs font-semibold ml-4">{errors.working_capital}</p>                                    
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
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_assets}</p>                                   
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                        <label htmlFor="cash_equivalents" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        cash equivalents<span className="text-red-500 text-base"> *</span>
                        </label>
</td>
<td>
                        <FormGroup>
                        <Input id="cash_equivalents" 
                            value={data.cash_equivalents} 
                            invalid={errors.cash_equivalents ? true : false} 
                            name="cash_equivalents" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                         <p className="text-red-500 text-xs font-semibold ml-4">{errors.cash_equivalents}</p>                                    
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                        <label htmlFor=" net_income" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        net income<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

<td>

                        <FormGroup>
                        <Input id="net_income" 
                            value={data.net_income} 
                            invalid={errors.net_income ? true : false} 
                            name="net_income" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer"
                            minLength="4" 
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                      <p className="text-red-500 text-xs font-semibold ml-4">{errors.net_income}</p>                         
                    </FormGroup>
                    </td>
                    </tr>


                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor="net_credit_sales" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        net credit sales<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

                     <td>
                        <FormGroup>
                        <Input id="net_credit_sales" 
                            value={data.net_credit_sales} 
                            invalid={errors.net_credit_sales ? true : false} 
                            name="net_credit_sales" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                     <p className="text-red-500 text-xs font-semibold ml-4">{errors.net_credit_sales}</p>                                    
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor="accounts_receivables" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        accounts receivables<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

                     <td>
                        <FormGroup>
                        <Input id="accounts_receivables" 
                            value={data.accounts_receivables} 
                            invalid={errors.accounts_receivables ? true : false} 
                            name="accounts_receivables" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                      <p className="text-red-500 text-xs font-semibold ml-4">{errors.accounts_receivables}</p>                                  
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor=" total_debt" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        total debt<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

                     <td>
                        <FormGroup>
                        <Input id="total_debt" 
                            value={data.total_debt} 
                            invalid={errors.total_debt ? true : false} 
                            name="total_debt" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_debt}</p>                                   
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor=" total_shareholders_equity" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                        total shareholders equity<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

                     <td>
                        <FormGroup>
                        <Input id="total_shareholders_equity" 
                            value={data.total_shareholders_equity} 
                            invalid={errors.total_shareholders_equity ? true : false} 
                            name="total_shareholders_equity" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                      <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_shareholders_equity}</p>                                     
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
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                        <p className="text-red-500 text-xs font-semibold ml-4">{errors.interest_expenses}</p>                                 
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor="  total_liabilities" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
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
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                       <p className="text-red-500 text-xs font-semibold ml-4">{errors.total_liabilities}</p>                         
                    </FormGroup>
                    </td>
                    </tr>

                    <tr className="md:w-full px-1/2 text-left md:mb-0"> 
                <td>
                   
                        <label htmlFor="long_term_debt" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                         long term debt<span className="text-red-500 text-base"> *</span>
                        </label>
</td>

                     <td>
                        <FormGroup>
                        <Input id="long_term_debt" 
                            value={data.long_term_debt} 
                            invalid={errors.long_term_debt ? true : false} 
                            name="long_term_debt" 
                            onChange={this.handleChange} 
                            placeholder="RS XXXX.XX"
                            type="integer" 
                            minLength="4"
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                       <p className="text-red-500 text-xs font-semibold ml-4">{errors.long_term_debt}</p>                                   
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
                            type="integer" 
                            className="w-96 h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"   
                        />
                       <p className="text-red-500 text-xs font-semibold ml-4">{errors.ebit}</p>                                 
                    </FormGroup>
                    </td>
                    </tr>       
          
                   </tbody>
                        </table>
                    <div className= "md:flex my-4">
                        <div className= "md:w-full px-1/2 text-center">
                            <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full" >
                            Submit
                            </button>
                            <Link to="/profile"><button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 mx-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full" >
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


