import "./ContractPage.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { Component } from 'react'
import { Form, FormGroup, FormFeedback } from 'reactstrap'
import axiosInstance from '../axios';
import Error404 from './404Error';

class ContractPage extends Component {
    render(){
        return(
            <div className="md:w-full px-1/2 text-center md:mb-0">
                <Navbar/>
                <div className="flex justify-center ">
                        <img  src={('static/images/coming-soon-4.gif')} className=""/>		
                    </div>
                {/* <Footer/> */}

                {/* <Error404/> */}
            </div>
        )
    }
}

export default ContractPage
