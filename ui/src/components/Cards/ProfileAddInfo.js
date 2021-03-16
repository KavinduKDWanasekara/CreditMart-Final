import { data } from 'autoprefixer';
import React, { Component } from 'react'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axiosInstance from '../../axios';


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
        if (data.current_assets === '') errors.current_assets = 'This field can not be blank.';
        if (data.current_liabilities === '') errors.current_liabilities = 'This field can not be blank.';
        if (data.working_capital === '') errors.working_capital = 'This field can not be blank.';
        if (data.total_assets === '') errors.total_assets = 'This field can not be blank.';
        if (data.cash_equivalents === '') errors.cash_equivalents = 'This field can not be blank.';
        if (data.net_income === '') errors.net_income = 'This field can not be blank.';
        if (data.net_credit_sales === '') errors.net_credit_sales = 'This field can not be blank.';
        if (data.accounts_receivables === '') errors.accounts_receivables = 'This field can not be blank.';
        if (data.total_debt === '') errors.total_debt = 'This field can not be blank.';
        if (data.total_shareholders_equity === '') errors.total_shareholders_equity = 'This field can not be blank.';
        if (data.interest_expenses === '') errors.interest_expenses = 'This field can not be blank.';
        if (data.total_liabilities === '') errors.total_liabilities = 'This field can not be blank.';
        if (data.long_term_debt === '') errors.long_term_debt = 'This field can not be blank.';
        if (data.ebit === '') errors.ebit = 'This field can not be blank.';
       
        

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
			.post(`api/fdetails/`, {
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

			})
			.then((res) => {
				// this.props.history.push('/login');
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
                    <p className="text-4xl font-bold py-9 capitalize">Please enter your financial data</p>
                    <div className=" mb-2 flex justify-center">
                        <table className=" text-center">
                        <FormGroup>
                            <tr>
                                <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    financial_year of Statement<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                             
                                <td>
                                    <div>
                                        <input name="financial_year" 
                                          value={data.financial_year}
                                          onChange={this.handleChange} 
                                          className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"
                                          id="financial_year" 
                                          type="text" 
                                          placeholder="20XX"
                                          invalid={errors.financial_year ? true : false}
                                          required
                                         />     
                                        <FormFeedback>{errors.financial_year}</FormFeedback>                                     
                                    </div>
                                </td>
                                
                                </div>
                            </tr>
                            </FormGroup>
<FormGroup>
                            <tr>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Total current assets<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                              
                                <td>
                                    <div>
                                        <input name="current_assets" value={data.current_assets}
                                          onChange={this.handleChange} 
                                          className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"
                                          id="current_assets" 
                                          type="text" 
                                          placeholder="RS XXXXX.XX"
                                          invalid={errors.current_assets ? true : false}  
                                          required/>

                                     <FormFeedback>{errors.current_assets}</FormFeedback>
                                    </div>
                                  
                                </td>
                            </div>
                            </tr>
                            </FormGroup>
                            <tr>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total current liabilities<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="current_liabilities" 
                                         value={data.current_liabilities} 
                                         onChange={this.handleChange} 
                                         className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                         id="current_liabilities"
                                         type="text" 
                                         invalid={errors.current_liabilities ? true : false}
                                         placeholder="RS XXXXX.XX"
                                         required
                                         />
                                   <FormFeedback>{errors.current_liabilities}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>
                        
                            <tr>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Working Capital<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="working_capital"
                                         value={data.working_capital} 
                                         onChange={this.handleChange} 
                                         className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                         id="working_capital"
                                         type="text" 
                                         invalid={errors.working_capital ? true : false}
                                         placeholder=" RS XXXXX.XX"
                                         required
                                        />
                                         <FormFeedback>{errors.working_capital}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>
                        
                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total assets<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="total_assets" 
                                        value={data.total_assets} 
                                        onChange={this.handleChange}
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="total_assets" 
                                        type="text" 
                                        invalid={errors.total_assets ? true : false}
                                        placeholder=" RS XXXXX.XX" 
                                        required
                                       />
                                        <FormFeedback>{errors.total_assets}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Cash and cash equivalents<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="cash_equivalents" 
                                        value={data.cash_equivalents} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="cash_equivalents" 
                                        type="text" 
                                        invalid={errors.cash_equivalents ? true : false}
                                        placeholder="RS XXXXX.XX"
                                        required
                                       />
                                        <FormFeedback>{errors.cash_equivalents}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>


                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Net Income<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="net_income" 
                                        value={data.net_income} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"
                                         id="net_income" 
                                         type="text"
                                         invalid={errors.net_income ? true : false}
                                          placeholder="RS XXXXX.XX" 
                                          required
                                          />
                                           <FormFeedback>{errors.net_income}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>


                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Net Credit Sales<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="net_credit_sales" 
                                        value={data.net_credit_sales} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="net_credit_sales" 
                                        type="text" 
                                        invalid={errors.net_credit_sales ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.net_credit_sales}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Account Receivables<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="accounts_receivables" 
                                        value={data.accounts_receivables} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="accounts_receivables" 
                                        type="text" 
                                        invalid={errors.accounts_receivables ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.accounts_receivables}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total Depts<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="total_debt" 
                                        value={data.total_debt} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="total_debt" 
                                        type="text" 
                                        invalid={errors.total_debt ? true : false}
                                        placeholder="RS XXXXX.XX"
                                        required 
                                         />
                                          <FormFeedback>{errors.total_debt}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total shareholders equity<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="total_shareholders_equity" 
                                        value={data.total_shareholders_equity} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="total_shareholders_equity" 
                                        type="text" 
                                        invalid={errors.total_shareholders_equity ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.total_shareholders_equity}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Interest Expense<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="interest_expenses" 
                                        value={data.interest_expenses} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="interest_expenses"                                     
                                        type="text" 
                                        invalid={errors.interest_expenses ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.interest_expenses}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total liabilities<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="total_liabilities" 
                                        value={data.total_liabilities} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="total_liabilities" 
                                        type="text" 
                                        invalid={errors.total_liabilities ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.total_liabilities}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Long-term debt<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="long_term_debt" 
                                        value={data.long_term_debt} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="long_term_debt" 
                                        type="text" 
                                        invalid={errors.long_term_debt ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.long_term_debt}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>

                            <tr>
                            <div className= "md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className= "uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    EBIT (Earning before tax)<span className= "text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="ebit" 
                                        value={data.ebit} 
                                        onChange={this.handleChange} 
                                        className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" 
                                        id="ebit" 
                                        type="text" 
                                        invalid={errors.ebit ? true : false}
                                        placeholder="RS XXXXX.XX" 
                                        required
                                        />
                                         <FormFeedback>{errors.ebit}</FormFeedback>
                                    </div>
                                </td>
                            </div>
                            </tr>
                        </table>
                    </div>

                    <div className= "md:flex my-4">
                        <div className= "md:w-full px-1/2 text-center">
                            <button className= "md:w-48 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full" >
                            Submit
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default ProfileAddInfo
