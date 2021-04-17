import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import axios from 'axios'

export class MyProfileNew extends Component {

    constructor(props) {
    
        super(props)
      
        this.state = {
    
           company_name:"",
           business_type:"",
           contact_number:"",
           location:"",
           description:"",
          
    
        }
    
      }

    


    
      componentDidMount(){
        
        axios.get('https://agile-stream-27533.herokuapp.com/api/profile', {
    
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
            <>
      <main className="relative block h-100-px">
      <Navbar/>
        <section className="relative py-36 h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.hipwallpaper.com/i/52/6/vFbjWA.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-44 bg-gray-300">
          <div className="container">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-10 shadow-xl rounded-lg -mt-56">
            
              <div className="px-6">
              {/* <div className="py-6 px-3 mt-32 sm:mt-0">
                      
                        <Link to="editinfo"><button className="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Edit Profile</button></Link>
                      
                        <Link  to="/profileaddinfo"><button className="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Add Financial Data</button></Link>
                        
                </div> */}

                      
                    <div className="flex flex-wrap justify-center -mt-24">
                        <img
                              alt="..."
                              // src={("https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg")}
                              // src={("https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/16998754_217016665439934_8147080226351143645_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=82cUc6mLSroAX-WpPjx&_nc_ht=scontent.fcmb2-1.fna&oh=06a02ec30ac75a1e23912957e669b3d6&oe=607D52A9")}
                              src={("https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg")}
                              className="inline object-cover w-44 h-44 -mr- 6 rounded-full"
                            />
                         
                              <button  className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200" >
                                    &#128640;
                                    
                              </button>
                              
                              
                              
                            
                      </div>
                     

              


                        
                      
                </div>
                {/* <div className="py-6 px-3 mt-32 sm:mt-0"> */}
                        {/* <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button">Edit Profile</button> */}
                     {/* <div class="flex items-stretch ..."> */}

                     {/* <div class="pt-6 pb-20">
                        <Link to="editinfo"><button className="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Edit Profile</button></Link> */}
                        {/* <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button">Edit Financial Data</button> */}
                    {/* </div> */}
                        {/* <div class="pt-6 pb-10">
  
                        <Link  to="/profileaddinfo"><button className="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Add Financial Data</button></Link>
                        </div>
                        </div>
                </div> */}
                <div className="md:flex my-4">
              <div className="md:w-full px-1/2 text-center">
              <Link to="/editinfo">
                <button className="md:w-48 bg-blue-600 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                  Edit Profile
                </button>
                </Link>
                <Link to="/profileaddinfo">
                  <button className="md:w-48 bg-blue-600 text-white font-bold py-2 px-4 mx-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                    Add Financial Data
                  </button>
                </Link>
              </div>              
              </div>
                
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-2">
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
                      {/* {this.state.location} */} Safraznazar@gmail.com
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
         
        </section>
        <Footer/>
      </main>
      {/* <Footer /> */}
    </>
        )
    }
}

export default MyProfileNew
