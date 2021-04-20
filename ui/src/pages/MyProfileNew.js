import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import axios from 'axios'
import Swal from 'sweetalert2'
import {Button, ButtonToolbar} from 'react-bootstrap';
import {EditProfilePopUp} from '../components/Cards/EditProfilePopUp';


export class MyProfileNew extends Component {

    constructor(props) {
    
        super(props)
      
        this.state = {
          
           addModalShow : false,
           company_name:"",
           business_type:"",
           contact_number:"",
           location:"",
           description:"",
           email:"",
           limit:"",
           
          
    
        }
    
      }

    


    
      componentDidMount(){
        
        const requestOne = axios.get('https://credit-mart.herokuapp.com/api/profile', {
    
          headers : {
    
            'Authorization': 'Token '+localStorage.getItem('token'),
            Accept: "application/json"
    
          }
    
        })
        const requestTwo = axios.get('https://credit-mart.herokuapp.com/api/user', {
    
          headers : {
    
            'Authorization': 'Token '+localStorage.getItem('token'),
            Accept: "application/json"
    
          }
    
        })

        const requestThree = axios.get('https://credit-mart.herokuapp.com/api/climit', {
    
          headers : {
    
            'Authorization': 'Token '+localStorage.getItem('token'),
            Accept: "application/json"
    
          }
    
        })
        
        axios
        .all([requestOne, requestTwo,requestThree])
        .then(axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];
          console.log( responseOne.data )
          console.log( responseTwo.data )
          console.log( responseThree.data )
          console.log(responseThree.data.message[0].credit_limit)
    
          this.setState ( {
    
            ...this.state,
            company_name : responseOne.data.company.company_name,
            business_type : responseOne.data.company.business_type,
            contact_number : responseOne.data.company.contact_number,
            location : responseOne.data.company.location,
            description: responseOne.data.company.description,
            email : responseTwo.data.detail.email,
            limit : responseThree.data.message[0].credit_limit,
    
             } );

            })
        )
    
        .catch(error =>{
    
          console.log(error.request.responseText);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.request.response,
            footer: '<a>Login </a>'
          });
          if (error.request.status == 401) {
            this.props.history.push('/login')
          }
    
        })
        }
      

    render() {

      let  addModalClose = () => this.setState({addModalShow : false})
      
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
    

                      
                    <div className="flex flex-wrap justify-center -mt-24">
                        <img
                              alt="..."
                             
                              src={("https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg")}
                              className="inline object-cover w-44 h-44 -mr- 6 rounded-full"
                            />
                         
                              <button  className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200" >
                                    &#128640;
                                    
                              </button>
                              
                              
                              
                            
                      </div>
                    
                </div>
                  <div className="md:flex my-4">
                    <div className="md:w-full px-1/2 text-center">
                      <Link to="/editinfo">
                        <button className="md:w-48 bg-blue-700 text-white font-bold py-2 px-4  transform w-44 transition duration-500 hover:bg-blue-500 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none">
                          
                          Edit Profile
                        </button>
                        
                      </Link>

                      <ButtonToolbar>
                        <Button
                          // varient='primary'
                          className="md:w-48 bg-blue-700 text-white font-bold py-2 px-4  transform w-44 transition duration-500 hover:bg-blue-500 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none"
                          onClick = {() => this.setState({addModalShow : true})}
                        >Edit profile</Button>
                          <EditProfilePopUp
                            show = {this.state.addModalShow}
                            onHide = {addModalClose}
                          />
                          
                        </ButtonToolbar>

                      <Link to="/profileaddinfo">
                        <button className="md:w-48 bg-blue-700 text-white font-bold py-2 px-4 mx-4 transform w-44 transition duration-500 hover:bg-blue-500 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none">
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
                      {this.state.email}
                    </div>
                    <div className="mb-2 text-gray-700 border border-solid border-gray-200 w-max mx-auto mt-4 px-5 py-3 rounded-xl font-semibold bg-blue-100">
                      <i className="mr-2 text-xl text-gray-500">
                        Credit Limit : <span className="underline">Rs. {this.state.limit}</span>
                      </i>
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

    </>
        )
    }
}

export default MyProfileNew
