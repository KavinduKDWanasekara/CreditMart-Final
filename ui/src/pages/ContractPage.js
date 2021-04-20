
import Navbar from '../components/Navbar';

import React, { Component } from 'react'


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

