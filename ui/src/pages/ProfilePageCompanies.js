import React, { Component } from 'react'
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


class ProfileCompany extends Component {

    constructor(props) {
        super(props);
        
      }



    render(){
        
        const { state } = this.props.location      

        return (
           <> 
            <div
            style={{
                background: '#091C29',
            }}
            className="min-h-screen flex items-center justify-center"
            id="header"
            >
                <Link to="/explore">
                    <button className= "bg-blue-700 px-4 py-1 text-lg text-white rounded-lg absolute top-0 left-0 mt-3 ml-3 transform transition duration-500 hover:bg-blue-500 hover:scale-95 rounded-xl hover:shadow-lg focus:outline-none" >
                    Back
                    </button>
                </Link>
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
                <div className="w-full md:w-2/5 ">
                <LazyLoadImage
                    src={("https://cdn.hipwallpaper.com/m/17/28/yfmsQL.jpg")}
                    alt="profile"
                    className={`w-full mx-auto rounded-full`}
                    effect="blur"
                    placeholderSrc="image"
                />
                </div>

                <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
                <h2
                    className="text-3xl md:text-4xl lg:text-6xl text-white font-bold "
                >
                    Hi,
                    <br />
                    we are {state.company_name}
                </h2>
                <h1
                    className="text-2xl md:text-4xl text-gray-400  "
                >
                    Welcome !<br/> <br/> 
                    <Typical
                    steps={['Keep your', 1000, 'Trust on US', 500]}
                    loop={Infinity}
                    className="inline-block"
                    wrapper="p"
                    />
                </h1>

                <ScrollLink to="mywork" smooth={true}>
                    <button
                        className=" animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300"
                    >
                        My credibility
                    </button>
                </ScrollLink>
                </div>
            </div>
            </div>




             <div
             className="min-h-screen flex justify-center items-center flex-col"
             style={{
               background: '#FEFEFE',
             }}
             id="mywork"
           >
             <h1 className="text-5xl font-dosis font-bold mt-5">What we do !</h1>
             <p className="text-gray-600 text-2xl font-dosis mb-10">{state.business_type}</p>
             <div className="flex flex-col md:flex-row justify-between items-center w-full ">
               <LazyLoadImage
                 effect="blur"
                 placeholderSrc={"Image wall"}
                 src={("static/images/credit.jpg")}
                 alt="img"
                 className="transform transition duration-1000 hover:scale-110 md:w-3/5 ml-20 h-max rounded-3xl shadow-lg"
               />
               <div
                 className="transtion duration-2000 ease-in-out p-10 max-w-xl rounded-lg md:block"
                 style={{
                   border: '1px solid #e5ecf9',
                   transform: 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)',
                   boxShadow:'35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
                 }}
               >
                    <div>
                        <h1
                            className="transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold"
                        >
                            About us !
                        </h1>
                        <p
                            className= "transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis"
                        >
                            {state.description}
                        </p>
                        <button
                            className="transform transition duration-700 hover:scale-105 px-20 py-3 m-4 bg-black justify-around text-white rounded-lg shadow-2xl w-11/12 inline-flex"
                            onClick={(e) => {
                                window.location = `mailto:${state.email}`;
                                e.preventDefault();
                                }}
                        >
                            <img
                                src={("static/images/email.png")}
                                alt="rocket"
                                className="h-7"
                            />
                            <p className="text-lg -ml-24" >
                                Mail Us
                            </p>
                        </button>
                    </div>
               </div>
             
             </div>


                <div className="relative flex flex-col min-w-0 w-5/6 break-words py-8 rounded-full my-20 shadow-lg border-4 border-solid border-blue-900">
                    <div className="flex-auto p-4">
                        <div className="relative mb-4 flex-initial mx-auto text-center">
                                <div
                                    className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 " }
                                >
                                    <i className={"far fa-chart-bar"}></i>
                                </div>
                            </div>
                        <div className="flex flex-wrap">
                            <div className="relative min-w-max pr-4 flex-grow flex-1 text-center">
                                <div className="text-center bg-gray-300 w-max mx-auto px-10 py-4 rounded-xl border-4 border-red-500">
                                    <h1 className="text-blueGray-400 uppercase font-bold text-4xl">
                                        Credit Limit 
                                    </h1>
                                    <span className="font-semibold text-xl">
                                        Rs. {state.credit_limit}
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <p className="text-lg text-blueGray-400 mt-4 text-center border-b-2 border-gray-500 w-max mx-auto">
                            <span className={" mr-2"}>
                                Probability of The Company being bankruptcy : 
                            </span>
                            <span className="text-red-500 font-semibold">
                                {state.pd * 100} %
                            </span>
                        </p>
                    </div>
                </div>
            </div>


</>

        );
    }
}

export default ProfileCompany