// import React from "react";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import ProfileAddInfo from "../components/Cards/ProfileAddInfo";
import CardCompanyDetails from "../components/Cards/CardCompanyDetails";
import { MDBBtn,  } from "mdbreact";
import axios from 'axios'
// import { Link } from "react-router-dom";


// import React, { Component } from 'react'

export class MyProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }

  componentDidMount(){
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('http://localhost:8000/api/profile')
    .then(response =>{
      console.log(response)
      this.setState({posts: response.data})
    })
    .catch(error =>{
      console.log(error)
    })
  }
  
  render() {
    const {posts} =this.state
    return (
      <main className="profile-page">
    <Navbar/>

        <section className="relative py-96 bg-gray-700">
        
          <div className="container mx-auto px-14">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="0" >
                <div className="flex flex-wrap-reverse">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative flex items-center justify-center pl-36 mr-8 ">
                      <img
                        alt="img"
                        src={('static/images/logo.png')}
                        className="shadow-xl rounded-full h-36 w-64 align-middle border-none absolute mt-10"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center ">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link  to="/profileaddinfo"><MDBBtn color="blue" className="rounded-lg p-2 w-24 h-12">Enter Financial Data</MDBBtn></Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  </div>

                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Companies</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Likes</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>


{/* 

{/* 

  state={
    profileImg:'https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }; */}

                </div>
                <div className="text-center mt-28">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    Credit Mart
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
                    Los Angeles, California ,US
                  </div>
                  <div className="mb-2 text-gray-700 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Credit Managment 
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-phone mr-2 text-lg text-gray-500"></i>
                    077-125 4551

                  </div>
                  <div className="text-right mt-1">
                    <Link to='/profileEdit'><button type="button" class="btn btn-outline-dark">Edit Profile </button></Link>
                    <button type="button" class="btn btn-outline-dark">Edit Profile Picture</button>
                  </div>
                  <div className="text-center mt-28">
                  
                     {/* <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                     <div className="label">
          				        <label className="image-upload" htmlFor="input">
							                  	Add/Edit  Profile Picture
						              </label>
          			      </div> */}
                        
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                      No Name
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      No Location
                    </div>
                    <div className="mb-2 text-gray-700 mt-2">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                      No Bussiness Type 
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-phone mr-2 text-lg text-gray-500"></i>
                      No Mobile Number
                    </div>
                    <div className="mb-2 text-gray-700 mt-2">
                      <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>
                      creditMart@gmail.com 
                    </div>
                    {/* <div className="inline-flex mb-2 text-gray-700 mt-2">
                      <i className="text-lg text-gray-500 "></i>
                       <img alt="rate1" src={('static/images/starOut.png')} className="h-8 w-8" />
                       <img alt="rate2" src={('static/images/starOut.png')} className="h-8 w-8" />
                       <img alt="rate3" src={('static/images/starOut.png')} className="h-8 w-8" />
                       <img alt="rate4" src={('static/images/starOut.png')} className="h-8 w-8" />
                       <img alt="rate5" src={('static/images/starOut.png')} className="h-8 w-8" />
                    </div> */}
                    
                  </div>
                  
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          No Description
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
        <div>
          {
            posts.length ?
            posts.map(post =><div key={post.id}>{post.userId}</div>):
            null
          }
        </div>
      </main>
    )
  }
}

export default MyProfile


// export default function MyProfile() {
  
//   return (
  
      

 
//   );
// }
