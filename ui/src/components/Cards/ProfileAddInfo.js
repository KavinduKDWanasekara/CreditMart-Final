import { data } from 'autoprefixer';
import React, { Component } from 'react'
import { Form } from 'reactstrap'

export class ProfileAddInfo extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }


    render() {
        return (
            <div>

                <Form onSubmit={this.handleSubmit} className="md:w-full px-1/2 text-center md:mb-0">
                    <p className="text-4xl font-bold py-9 capitalize">Please enter your financial data</p>
                    <div className=" mb-2 flex justify-center">
                        <table className=" text-center">
                            <tr>
                                <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label htmlFor="year" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Year of Statement<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="20XX"/>
                                    </div>
                                </td>
                                </div>
                            </tr>

                            <tr>
                            <div className="md:w-full px-1/2 text-left md:mb-0">
                                <td>
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Total current assets<span className="text-red-500 text-base"> *</span>
                                    </label>
                                </td>
                                <td>
                                    <div>
                                        <input className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                                    </div>
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
                                        <input className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
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
                                        <input className= "w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                                    </div>
                                </td>
                            </div>
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

export default ProfileAddInfo
