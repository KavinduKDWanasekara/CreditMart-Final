
import React, { Component } from 'react'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";


class ProfileAddInfo extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        
    }

    getInitialState = () => ({
        data: {
            year:'',
            totCurrentAssets:'',
            totCurrentLiabilities:'',
            workingCapital:'',
            totalAssets:'',
            cashEq:'',
            netInc:'',
            netCreditSales:'',
            accReceivables:'',
            totalDepts:'',
            totalShareholderEq:'',
            intExp:'',
            totalLabilities:'',
            longTermDepts:'',
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
        const { data } = this.state;
        let errors = {};

        if (data.year === '') errors.year = 'This field can not be blank.';
        if (data.totCurrentAssets === '') errors.totCurrentAssets = 'This field can not be blank.';
        if (data.totCurrentLiabilities === '') errors.totCurrentLiabilities = 'This field can not be blank.';
        if (data.workingCapital === '') errors.workingCapital = 'This field can not be blank.';
        if (data.totalAssets === '') errors.totalAssets = 'This field can not be blank.';
        if (data.cashEq === '') errors.cashEq = 'This field can not be blank.';
        if (data.netInc === '') errors.netInc = 'This field can not be blank.';
        if (data.netCreditSales === '') errors.netCreditSales = 'This field can not be blank.';
        if (data.accReceivables === '') errors.accReceivables = 'This field can not be blank.';
        if (data.totalDepts === '') errors.totalDepts = 'This field can not be blank.';
        if (data.totalShareholderEq === '') errors.totalShareholderEq = 'This field can not be blank.';
        if (data.intExp === '') errors.intExp = 'This field can not be blank.';
        if (data.totalLabilities === '') errors.totalLabilities = 'This field can not be blank.';
        if (data.longTermDepts === '') errors.longTermDepts = 'This field can not be blank.';
        if (data.ebit === '') errors.ebit = 'This field can not be blank.';
       
        

        return errors;
    }
   
   
    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }


    render() {
        const { data, errors } = this.state;
        return (
            <div>

                <Form onSubmit={this.submitHandler} className="md:w-full px-1/2 text-center md:mb-0">
                    <p className="text-4xl font-bold py-9 capitalize">Please enter your financial data</p>
                    <div className=" mb-2 flex justify-center">
                        <table className=" text-center">
                            <tr>
                            
                                <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Year of Statement<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="year" 
                                          value={year}
                                          onChange={this.changeHandler} 
                                          className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3"
                                          id="addInfoData" 
                                          type="text" 
                                          placeholder="20XX"
                                          required/>
                                    </div>
                                </td>
                                </div>
                               
                            </tr>

                            <tr>
                          
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="totCurrentAssets">
                                        Total current assets<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="totCurrentAssets" value={data.totCurrentAssets} onChange={this.handleChange} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="totCurrentAssets" type="text" placeholder="RS XXXXX.XX"
                                         invalid={errors.totCurrentAssets ? true : false}  />
                                    </div>
                                    <FormFeedback>{errors.totCurrentAssets}</FormFeedback>
                                </td>
                            </div>
                            
                            </tr>

                            <tr>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Total current liabilities<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input name="totCurrentLiabilities" value={totCurrentLiabilities} onChange={this.changeHandler} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX"
                                        required/>
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
                                        <input name="workingCapital" value={workingCapital} onChange={this.changeHandler} className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder=" RS XXXXX.XX"
                                        required/>
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
                                        <input name="totalAssets" value={totalAssets} onChange={this.changeHandler}className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder=" RS XXXXX.XX" required/>
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
                                        <input name="cashEq" value={cashEq} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="netInc" value={netInc} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="netCreditSales" value={netCreditSales} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="accReceivables" value={accReceivables} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="totalDepts" value={totalDepts} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required />
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
                                        <input name="totalShareholderEq" value={totalShareholderEq} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="intExp" value={intExp} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="totalLabilities" value={totalLabilities} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="longTermDepts" value={longTermDepts} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
                                        <input name="ebit" value={ebit} onChange={this.changeHandler} className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="RS XXXXX.XX" required/>
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
        );
    }
}

export default ProfileAddInfo
