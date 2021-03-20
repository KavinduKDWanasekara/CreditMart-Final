import "./ContractPage.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { Component } from 'react'
import { Form, FormGroup, FormFeedback } from 'reactstrap'
import axiosInstance from '../axios';


class Error404 extends Component {
    render(){
        return(
            <div className="md:w-full px-1/2 text-center md:mb-0">
                {/* <Navbar/> */}
                <div class="flex justify-center ">
                        <img  src={('static/images/404.gif')} className="w-screen"/>		
                    </div>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default Error404;
