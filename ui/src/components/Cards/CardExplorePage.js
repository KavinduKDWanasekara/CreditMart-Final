import React, { Component } from 'react'
import companyPage from '../../pages/ProfilePageCompanies';
import { Link, useHistory } from "react-router-dom";

export class CardExplorePage extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            companyData : this.props.company
        }
        
      }

      onEdit = (pr) =>{
        
        console.log("Individual Company details  ",pr)
        console.log("Individual Company details state  ",this.state.companyData)
        
       
        
      }

    render() {
        
 

        return (
            <Link className=" py-6 w-full md:w-1/2 lg:my-4 lg:px-6 lg:w-1/3" to={{
                pathname: "/companies",
                state: this.state.companyData
              }}>
            <div  onClick={() =>{this.onEdit(this.props)}} >
                <div className="rounded-xl shadow bg-blue-100  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <div className="flex justify-center -mt-8 rounded-t-xl  h-32">
                        <img  src={('static/images/prof.png')} className="rounded-full  border-white border-2 my-2 h-32 bg-gray-200"/>		
                    </div>
                    <div className="text-center px-3 pb-6 pt-4  ">
                        <h3 className="text-black text-3xl font-bold font-sans">{this.props.company.company_name}</h3>
                        <p className="mt-2 font-sans font-bold text-grey-dark">{this.props.company.business_type}</p>
                        <p className="mt-2 font-sans text-grey-dark">{this.props.company.description}</p>
                    </div>
                    <hr/>
                    <div className="justify-center pb-3 mt-2 text-grey-dark">
                        <div className="text-center ">
                        <i className="fas fa-map-marker-alt text-lg text-gray-500"></i><br/>
                        {this.props.company.location}
                        </div>
                        <div className="text-center">
                        <i className="fas fa-envelope mt-1 text-lg text-gray-500"></i><br/>
                        {this.props.company.contact_number} 
                        </div>
                        
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}

export default CardExplorePage
