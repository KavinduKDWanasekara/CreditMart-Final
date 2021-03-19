import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import CardCompanyDetails from "../components/Cards/CardCompanyDetails";
import { MDBBtn,  } from "mdbreact";
import axios from 'axios'



export class MyProfile extends Component {

  constructor(props) {
    
    super(props)
  
    this.state = {

       company_name:"",
       business_type:"",
       contact_number:"",
       location:"",
       description:""

    }

  }

  componentDidMount(){
    
    axios.get('http://localhost:8000/api/profile', {

      headers : {

        'Authorization': 'Token '+localStorage.getItem('token'),
        Accept: "application/json"

      }

    })
    
    .then(response => {

      console.log( response.data )

      this.setState ( {

        ...this.state,
        company_name : response.data.company.company_name,
        business_type : response.data.company.business_type,
        contact_number : response.data.company.contact_number,
        location : response.data.company.location,
        description: response.data.company.description

         } )

    })

    .catch(error =>{

      console.log(error)

    })
  }

  
  
  render() {
    
    return (

      <main className="profile-page">
        <Navbar/>
        <section className="relative py-96 bg-gray-700">
        
          <div className="container mx-auto px-14">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="0" >
              {/* <div className="content-center	align-content: center">
                    <div className="relative flex items-center justify-center pl-36 mr-8 ">
                      <img
                        alt="img"
                        src={('static/images/logo.png')}
                        className="shadow-xl rounded-full h-36 w-64 align-middle border-none absolute mt-10"
                      />
                    </div>
                  </div> */}
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={("https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                <div className="flex flex-wrap-reverse">
                  
                  
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  </div>
                </div>
                <div className="text-center mt-28">
                  <div className="text-right mt-1">
                    <Link to='/profileEdit'><button type="button" class="btn btn-outline-dark">Edit Profile </button></Link>
                    <button type="button" class="btn btn-outline-dark">Edit Profile Picture</button>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-right ">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link  to="/profileaddinfo"><MDBBtn color="blue" className="rounded-lg p-2 w-24 h-12">Enter Financial Data</MDBBtn></Link>
                    </div>
                  </div>
                  <div className="text-center mt-28">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    {this.state.company_name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      {this.state.location}
                    </div>
                    <div className="mb-2 text-gray-700 mt-2">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                      {this.state.business_type}
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-phone mr-2 text-lg text-gray-500"></i>
                      {this.state.contact_number}
                    </div>
                    <div className="mb-2 text-gray-700 mt-2">
                      <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>
                      {this.state.location}
                    </div>
                  </div>
                  
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {this.state.description}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CardCompanyDetails/>
        
      </main>
    )
  }
}

export default MyProfile

  
      


