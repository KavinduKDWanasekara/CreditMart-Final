import React, { Component } from 'react'

export class CardExplorePage extends Component {



    render() {
        return (
            <div className=" py-6 w-full md:w-1/2 lg:my-4 lg:px-6 lg:w-1/3">
                <div className="rounded-xl shadow bg-blue-100  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <div className="flex justify-center -mt-8 rounded-t-xl  h-32">
                        <img  src={('static/images/prof.png')} className="rounded-full  border-white border-2 my-2 h-32 bg-gray-200"/>		
                    </div>
                    <div className="text-center px-3 pb-6 pt-4  ">
                        <h3 className="text-black text-3xl font-bold font-sans">Credit Mart</h3>
                        <p className="mt-2 font-sans font-bold text-grey-dark">Business Type</p>
                        <p className="mt-2 font-sans text-grey-dark">Hello, i'm from another the other side!</p>
                    </div>
                    <hr/>
                    <div className="justify-center pb-3 mt-2 text-grey-dark">
                        <div className="text-center ">
                        <i className="fas fa-map-marker-alt text-lg text-gray-500"></i><br/>
                            Los Angeles, California ,US
                        </div>
                        <div className="text-center">
                        <i className="fas fa-envelope mt-1 text-lg text-gray-500"></i><br/>
                            creditMart@gmail.com 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardExplorePage
