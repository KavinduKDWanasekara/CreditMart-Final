import React, { Component } from 'react'
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link as ScrollLink } from 'react-scroll';

class ProfileCompany extends Component {

    constructor(props) {
        super(props);
        
        
      }

    render(){
        const { state } = this.props.location
        

        console.log(state)
  
        return (
           <> 
            <div
            style={{
                background: '#091C29',
            }}
            className="min-h-screen flex items-center justify-center"
            id="header"
            >
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
                <div className="w-full md:w-2/5 ">
                <LazyLoadImage
                    src={("https://cdn.hipwallpaper.com/m/17/28/yfmsQL.jpg")}
                    alt="profile"
                    className={`w-full mx-auto`}
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
                    className=" animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 "
                    >
                    Contract
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
             <h1 className="text-5xl font-dosis font-bold">{state.business_type}</h1>
             <p className="text-gray-600 text-2xl font-dosis mb-10">What we do</p>
             <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
               <LazyLoadImage
                 effect="blur"
                 placeholderSrc={"Image wall"}
                 src={("assets/img/team-2-800x800.jpg")}
                 alt="phone prototype"
                 className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
               />
               <div
                 className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
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
                            className="transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl"
                        >
                            <img
                            src="https://www.iconfinder.com/icons/353437/rocket_space_spaceship_launch_icon"
                            alt="rocket"
                            className="mr-5"
                            />
                            <p className="text-lg">Mail Us</p>
                        </button>
                        </div>
               </div>
               <div className="flex justify-center items-center md:hidden">
              
               </div>
             </div>
           </div>


</>

        );
    }
}

export default ProfileCompany