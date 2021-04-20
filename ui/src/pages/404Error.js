
import React, { Component } from 'react'


class Error404 extends Component {
    render(){
        return(
            <div className="md:w-full px-1/2 text-center md:mb-0">
              
                <div class="flex justify-center ">
                        <img  src={('static/images/404.gif')} className="w-screen"/>		
                    </div>
               
            </div>
        )
    }
}

export default Error404;
