import React, { Component } from 'react'
import { Form } from 'reactstrap'

export class ProfileAddInfo extends Component {
    render() {
        return (
            <div>

                <Form className="md:w-full px-1/2 text-center md:mb-0">
                    <p class="text-4xl font-bold py-9 capitalize">Please enter your financial data</p>
                    <div class=" mb-2 ">
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Year of Statement<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="20XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total current assets<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total current liabilities<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Working Capital<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total assets<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Cash and cash equivalents<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Net Income<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Receivables Turnover<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total debt<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total shareholders equity<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Interest Expense<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total liabilities<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Long-term debt<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        <div class="md:w-full px-1/2 text-center md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Total liabilities<span class="text-red-500 text-base"> *</span>
                            </label>
                            <div>
                                <input class="w-96 bg-gray-200 text-black border border-gray-200 rounded py-3 mx-4 px-4 mb-3" id="addInfoData" type="text" placeholder="XXXXX.XX"/>
                            </div>
                        </div>
                        
                    </div>

                    <div class="md:flex mt-2">
                        <div class="md:w-full px-1/2 text-center">
                            <button class="md:w-48 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
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
